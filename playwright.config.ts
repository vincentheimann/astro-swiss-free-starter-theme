import { defineConfig } from "@playwright/test";

// Browser tests + scripted captures run against the built site served by
// `astro preview` (the client-side i18n behavior under test only exists in
// the static build, see ADR 0004).
export default defineConfig({
    testDir: "./tests/browser",
    fullyParallel: true,
    reporter: [["list"]],
    use: {
        baseURL: "http://localhost:4321",
    },
    webServer: {
        command: "npm run preview",
        url: "http://localhost:4321",
        reuseExistingServer: true,
        timeout: 60_000,
    },
});
