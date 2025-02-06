import { defineConfig, devices } from "@playwright/test";

export default defineConfig({

  webServer: {
    command: "npm run dev",
    port: 3000,
    timeout: 60000,
    reuseExistingServer: !process.env
  },
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3000/registration",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "./src/tests",

  // Run all tests in parallel.
  fullyParallel: false,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: "list",

  // Emulates the user locale.
  locale: "en-US",

  // Grants specified permissions to the browser context.
  permissions: ["geolocation"],

  // Viewport used for all pages in the context.
  viewport: { width: 1280, height: 1020 },

  ignoreHTTPSErrors: true,

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
