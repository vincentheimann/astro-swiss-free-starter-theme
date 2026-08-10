/**
 * Scripted marketing captures (PB-017b).
 *
 * Shoots pixel-consistent screenshots of the built site (`astro preview`)
 * and writes them ONLY to ./captures/ (gitignored). Copy the results to
 * their marketing targets (landing, astro.build staging, docs) explicitly —
 * this script never touches tracked files (AGENTS.md rule 7).
 *
 * Usage: npm run capture   (builds first, then runs this script)
 */
import { chromium } from "@playwright/test";
import sharp from "sharp";
import { spawn, execSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "captures");
const BASE = "http://localhost:4321";
const VIEWPORT = { width: 1600, height: 900 }; // astro.build preview spec

async function serverUp() {
    try {
        return (await fetch(BASE)).ok;
    } catch {
        return false;
    }
}

async function startPreview() {
    if (await serverUp()) {
        // Never shoot a server we didn't start — it might be another repo's
        // site (daemonized dev servers share the default port).
        throw new Error(
            `something is already serving ${BASE} — stop it first so the capture run owns the server`,
        );
    }
    const child = spawn("npm", ["run", "preview"], {
        cwd: root,
        shell: true,
        stdio: ["ignore", "pipe", "inherit"], // keep stderr visible (rule 10)
    });
    for (let i = 0; i < 60; i++) {
        if (await serverUp()) return child;
        await new Promise((r) => setTimeout(r, 500));
    }
    child.kill();
    throw new Error("astro preview did not become reachable on " + BASE);
}

/** Screenshot the current viewport and save as an optimized WebP. */
async function shot(page, name, { fullPage = false } = {}) {
    const png = await page.screenshot({ fullPage, animations: "disabled" });
    const file = path.join(outDir, `${name}.webp`);
    await sharp(png).webp({ quality: 88 }).toFile(file);
    console.log("captured", `${name}.webp`);
}

/** Screenshot a single element (for docs detail shots). */
async function shotElement(page, selector, name, padding = 24) {
    const box = await page.locator(selector).first().boundingBox();
    if (!box) throw new Error(`no bounding box for ${selector}`);
    const clip = {
        x: Math.max(0, box.x - padding),
        y: Math.max(0, box.y - padding),
        width: box.width + padding * 2,
        height: box.height + padding * 2,
    };
    const png = await page.screenshot({ clip, animations: "disabled" });
    await sharp(png).webp({ quality: 88 }).toFile(path.join(outDir, `${name}.webp`));
    console.log("captured", `${name}.webp`);
}

async function settle(page) {
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300); // let the carousel/first paint settle
}

const server = await startPreview();
await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();

try {
    for (const scheme of ["light", "dark"]) {
        const context = await browser.newContext({
            viewport: VIEWPORT,
            deviceScaleFactor: 1,
            locale: "fr-CH", // default locale — detection never redirects fr
            colorScheme: scheme,
        });
        const page = await context.newPage();
        await page.goto(BASE + "/");
        await settle(page);

        // hero
        await shot(page, `home-hero-${scheme}`);

        // sections, scrolled to top of viewport
        for (const section of ["portfolio", "about", "services"]) {
            await page.evaluate((id) => {
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "instant", block: "start" });
            }, section);
            await page.waitForTimeout(300);
            await shot(page, `section-${section}-${scheme}`);
        }

        // full page (docs homepage shots)
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(200);
        await shot(page, `home-full-${scheme}`, { fullPage: true });

        if (scheme === "light") {
            // language selector open (the i18n USP shot)
            await page.locator("button.language-selector-btn").first().click();
            await page.waitForTimeout(300);
            await shot(page, "language-selector-open");
            await shotElement(
                page,
                "[data-lang-choice='fr']",
                "detail-language-selector",
                90,
            );
            await page.keyboard.press("Escape");

            // theme toggle detail (docs)
            await shotElement(page, "button.theme-toggle-btn", "detail-theme-toggle", 60);
        }

        await context.close();
    }

    // Mobile capture, composed on a 1600x900 canvas so it sits uniformly in
    // 16:9 galleries.
    {
        const context = await browser.newContext({
            viewport: { width: 390, height: 844 },
            deviceScaleFactor: 2,
            isMobile: true,
            hasTouch: true,
            locale: "fr-CH",
        });
        const page = await context.newPage();
        await page.goto(BASE + "/");
        await settle(page);
        const phone = await page.screenshot({ animations: "disabled" });
        await context.close();

        const phoneImg = await sharp(phone)
            .resize({ height: 820 })
            .png()
            .toBuffer();
        const { width: pw } = await sharp(phoneImg).metadata();
        await sharp({
            create: {
                width: 1600,
                height: 900,
                channels: 4,
                background: "#eef1f5",
            },
        })
            .composite([
                { input: phoneImg, left: Math.round((1600 - pw) / 2), top: 40 },
            ])
            .webp({ quality: 88 })
            .toFile(path.join(outDir, "mobile-showcase.webp"));
        console.log("captured mobile-showcase.webp");
    }

    // Light/dark side-by-side (replaces the old dark-mode animation in docs).
    {
        const half = (name) =>
            sharp(path.join(outDir, name)).resize(800, 450).toBuffer();
        await sharp({
            create: { width: 1600, height: 450, channels: 4, background: "#ffffff" },
        })
            .composite([
                { input: await half("home-hero-light.webp"), left: 0, top: 0 },
                { input: await half("home-hero-dark.webp"), left: 800, top: 0 },
            ])
            .webp({ quality: 88 })
            .toFile(path.join(outDir, "theme-light-dark.webp"));
        console.log("captured theme-light-dark.webp");
    }
} finally {
    await browser.close();
    if (server) {
        // On Windows, kill() only reaches the npm shell — the astro preview
        // grandchild survives and its open stdout pipe keeps node alive.
        // Kill the whole process tree instead.
        if (process.platform === "win32") {
            try {
                execSync(`taskkill /PID ${server.pid} /T /F`, { stdio: "ignore" });
            } catch {
                /* already gone */
            }
        } else {
            server.kill();
        }
    }
}
console.log("done →", outDir);
process.exit(0);
