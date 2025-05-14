// Import required modules from Playwright and Node.js
import { defineConfig, devices } from "@playwright/test";
import * as os from "os";

// Export the configuration for Playwright test execution
export default defineConfig({
  // Define the directory containing the test files
  testDir: "./tests",

  // Configure test result reporters
  reporter: [
    // Configure the default "list" reporter to display results in the terminal
    ["list"],

    // Configure the Allure reporter for advanced test reporting
    [
      "allure-playwright",
      {
        // Define the directory to store Allure report results
        resultsDir: "./allure-results",

        // Configure the detail level of the Allure report
        // If true, include detailed steps and hooks in the report (e.g., Playwright test steps, Before Hooks, After Hooks, Worker Cleanup)
        // If false, include only high-level test information
        detail: true,

        // Define environment information to include in the Allure report
        environmentInfo: {
          os_platform: os.platform(),      // Define OS platform (e.g., 'win32', 'linux')
          os_release: os.release(),        // Define OS release version
          os_version: os.version(),        // Define detailed OS version
          node_version: process.version,   // Define Node.js version
        },
      },
    ],
  ],

  // Configure shared test behavior and context options
  use: {
    screenshot: "on",     // Enable automatic screenshot capture on failure or when explicitly triggered
    video: "on",          // Enable video recording of test execution
    trace: "on",          // Enable tracing for capturing detailed test execution
 },

  // Define individual test projects for different browsers
  projects: [
    // Use predefined device settings for Google Chrome
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    // Use predefined device settings for Mozilla Firefox
    // {
    //   name: "Mozilla Firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },
  ],
});
