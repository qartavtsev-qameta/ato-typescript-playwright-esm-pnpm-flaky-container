import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
// Alternative import method:
// Use common Allure utilities for JavaScript integration from 'allure-js-commons' if 'allure-playwright' is not used
// import * as allure from 'allure-js-commons';

// Test #1

test('Should randomly pass or fail to simulate flakiness', async ({ page }) => {
  await allure.description('Randomly passes or fails based on a generated number to simulate flaky behavior');
  await allure.tags('Flaky');

  await allure.step('Generate a random number and assert it’s > 0.5', async () => {
    const value = Math.random();
    await expect(value).toBeGreaterThan(0.5);
    // This step has a 50% chance to PASS and a 50% chance to FAIL
  });

  await allure.step('Log a random test outcome (PASS or FAIL)', async () => {
    const result = Math.random() < 0.5 ? 'PASS' : 'FAIL';
    console.log(`Test result: ${result}`);
    // This step logs a random outcome (50%/50% chance) but does not affect test success
  });
});

// Test #2

test('Should fail as marked with test.flaky();', async ({ page }) => {
  test.flaky();
  await allure.description('Simulates a failed attempt to mark test with test.flaky();');
  await allure.tags('Flaky');

  await allure.step('Generate a random number and assert it’s > 0.5', async () => {
    const value = Math.random();
    await expect(value).toBeGreaterThan(0.5);
    // This step has a 50% chance to PASS and a 50% chance to FAIL
  });

  await allure.step('Log a random test outcome (PASS or FAIL)', async () => {
    const result = Math.random() < 0.5 ? 'PASS' : 'FAIL';
    console.log(`Test result: ${result}`);
    // This step logs a random outcome (50%/50% chance) but does not affect test success
  });
});
