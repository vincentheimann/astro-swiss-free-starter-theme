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
        // Never reuse a server we didn't start: a stray process on 4321
        // (e.g. a daemonized dev server from another repo) would make every
        // test silently run against the wrong site. Fail loudly instead.
        reuseExistingServer: false,
        timeout: 60_000,
    },
});
