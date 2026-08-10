import { test, expect } from "@playwright/test";

// Client-side i18n behavior (ADR 0004): first-visit locale detection on the
// default-locale homepage, stored explicit choice, locale-aware 404.
// The matrix mirrors PB-019's acceptance criteria.

test.describe("first-visit detection", () => {
    test.describe("en browser", () => {
        test.use({ locale: "en-US" });
        test("/ redirects to /en/", async ({ page }) => {
            await page.goto("/");
            await page.waitForURL("**/en/");
            await expect(page).toHaveURL(/\/en\/$/);
        });
    });

    test.describe("de browser", () => {
        test.use({ locale: "de-CH" });
        test("/ redirects to /de/", async ({ page }) => {
            await page.goto("/");
            await page.waitForURL("**/de/");
            await expect(page).toHaveURL(/\/de\/$/);
        });
    });

    test.describe("fr browser", () => {
        test.use({ locale: "fr-CH" });
        test("/ stays on the default locale", async ({ page }) => {
            await page.goto("/", { waitUntil: "networkidle" });
            await expect(page).toHaveURL(/\/$/);
            expect(new URL(page.url()).pathname).toBe("/");
        });
    });

    test.describe("unsupported browser language", () => {
        test.use({ locale: "it-IT" });
        test("/ stays on the default locale", async ({ page }) => {
            await page.goto("/", { waitUntil: "networkidle" });
            expect(new URL(page.url()).pathname).toBe("/");
        });
    });
});

test.describe("stored language choice", () => {
    test.use({ locale: "de-CH" });

    test("stored choice wins over browser language", async ({ context, page }) => {
        await context.addInitScript(() => localStorage.setItem("lang", "fr"));
        await page.goto("/", { waitUntil: "networkidle" });
        expect(new URL(page.url()).pathname).toBe("/");
    });

    test("selector choice is stored and never overridden by detection", async ({
        page,
    }) => {
        // A de browser lands on /de/, explicitly picks French via the selector…
        await page.goto("/de/");
        await page.locator("button.language-selector-btn").first().click();
        await page.locator('[data-lang-choice="fr"]').first().click();
        await page.waitForURL(/\/$/);
        expect(
            await page.evaluate(() => localStorage.getItem("lang")),
        ).toBe("fr");

        // …and detection no longer bounces them off the French homepage.
        await page.goto("/", { waitUntil: "networkidle" });
        expect(new URL(page.url()).pathname).toBe("/");
    });
});

test.describe("locale-aware 404", () => {
    const cases = [
        { path: "/broken", visible: "fr", text: "Page introuvable" },
        { path: "/en/broken", visible: "en", text: "Page not found" },
        { path: "/de/broken", visible: "de", text: "Seite nicht gefunden" },
    ] as const;

    for (const { path, visible, text } of cases) {
        test(`${path} shows the ${visible} message`, async ({ page }) => {
            const response = await page.goto(path);
            expect(response?.status()).toBe(404);
            await expect(page.locator(`[data-404-msg="${visible}"]`)).toBeVisible();
            await expect(page.locator(`[data-404-msg="${visible}"]`)).toContainText(
                text,
            );
            for (const other of ["fr", "de", "en"].filter((l) => l !== visible)) {
                await expect(page.locator(`[data-404-msg="${other}"]`)).toBeHidden();
            }
        });
    }
});
