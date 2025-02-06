import { expect, test } from "@playwright/test";

const TEST_URL = "http://localhost:3000/registration/step1";
const TEST_URL2 = "http://localhost:3000/registration/step2";

test.describe("registration page step 2", () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(TEST_URL);
  });

  test("test user is able to proceed to registration send OTP page", async () => {
    await page.getByRole("textbox", { name: "Enter first name..." }).click();
    await page
      .getByRole("textbox", { name: "Enter first name..." })
      .fill("test");
    await page
      .getByRole("textbox", { name: "Enter first name..." })
      .press("Tab");
    await page
      .getByRole("textbox", { name: "Enter last name..." })
      .fill("test");
    await page
      .getByRole("textbox", { name: "Enter last name..." })
      .press("Tab");
    await page.getByRole("combobox").selectOption("male");
    await page
      .getByRole("textbox", { name: "Select residence country..." })
      .click();
    await page.getByText("United States").first().click();
    await page.getByRole("textbox", { name: "Enter email address..." }).click();
    await page
      .getByRole("textbox", { name: "Enter email address..." })
      .fill("test@gmail.com");
    await page.locator('input[name="phoneNumber"]').click();
    await page.locator('input[name="phoneNumber"]').fill("4324343423");
    await page
      .getByRole("checkbox", { name: "I agree to the terms and" })
      .check();
    await page.getByText("Submit").click();
    await page
      .getByRole("textbox", { name: "Select residence country..." })
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^United States$/ })
      .nth(4)
      .click();
    await page.getByText("Submit").click();
    await page.waitForURL(new RegExp(`^${TEST_URL2}`))
    await expect(page).toHaveURL(TEST_URL2)
  });

  test('test registration page 2 elements', async () => {
    await expect(page.getByText('OTP Verification')).toBeVisible();
    await page.getByRole('heading', { name: 'Send Code' }).click();
    await expect(page.getByRole('heading', { name: 'Send Code' })).toBeVisible();
    await expect(page.getByText('How would you like to receive')).toBeVisible();
    await expect(page.getByText('Send to Phone')).toBeVisible();
    await expect(page.getByText('Send to Email')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
    await expect(page.getByText('Next')).toBeVisible();
  });

  test('test go back functionality', async () => {
    await page.getByRole('button', { name: 'Back' }).click();
    await page.waitForURL(new RegExp(`^${TEST_URL}`))
    await expect(page).toHaveURL(TEST_URL)
  });
});
