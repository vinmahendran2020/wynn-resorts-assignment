import { expect, test } from "@playwright/test";

const TEST_URL = "http://localhost:3000/registration/step1";
test.describe("registration page step 1", () => {
  let page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto(TEST_URL)
  })

  test("verify registration page elements", async () => {
    await expect(page.getByRole("img", { name: "QR Code" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Registration" })
    ).toBeVisible();
    await expect(page.getByText("First Name*")).toBeVisible();
    await expect(page.getByText("Last Name*")).toBeVisible();
    await expect(page.getByText("Gender", { exact: true })).toBeVisible();
    await expect(page.getByText("Your Residence Country*")).toBeVisible();
    await expect(page.getByText("Email*")).toBeVisible();
    await expect(page.getByText("Phone Number*")).toBeVisible();
    await expect(page.getByText("I agree to the terms and")).toBeVisible();
    await expect(
      page.locator("button").filter({ hasText: "Next" })
    ).toBeVisible();
    await expect(page.getByText("Next")).toBeVisible();
  });

  test("test all registration page 1 fields are required ", async () => {
    await page.getByText("Next").click();
    await expect(page).toHaveURL(TEST_URL);
  });

  test("test first name field is required", async () => {
    await page.getByRole("textbox", { name: "Enter first name..." }).click();
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
    await page
      .locator("div")
      .filter({ hasText: /^Afghanistan$/ })
      .nth(1)
      .click();
    await page.getByRole("textbox", { name: "Enter email address..." }).click();
    await page
      .getByRole("textbox", { name: "Enter email address..." })
      .fill("test@gmail.com");
    await page.locator('input[name="phoneNumber"]').click();
    await page.locator('input[name="phoneNumber"]').fill("585635015");
    await page
      .locator("form div")
      .filter({ hasText: "Contact DetailsEmail*Phone" })
      .locator("svg")
      .click();
    await page.getByRole("textbox", { name: "Search" }).click();
    await page
      .locator("form div")
      .filter({ hasText: "Contact DetailsEmail*Phone" })
      .locator("svg")
      .click();
    await page.locator('input[name="phoneNumber"]').click();
    await page
      .getByRole("checkbox", { name: "I agree to the terms and" })
      .check();
    await page.getByText("Next").click();
    await expect(page).toHaveURL(TEST_URL);
  });

  test("test last name field is required", async () => {
    await page.getByRole("textbox", { name: "Enter first name..." }).click();
    await page
      .getByRole("textbox", { name: "Enter first name..." })
      .fill("test");
    await page
      .getByRole("textbox", { name: "Enter first name..." })
      .press("Tab");
    await page
      .getByRole("textbox", { name: "Enter last name..." })
      .press("Tab");
    await page.getByRole("combobox").selectOption("male");
    await page
      .getByRole("textbox", { name: "Select residence country..." })
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Afghanistan$/ })
      .nth(1)
      .click();
    await page.getByRole("textbox", { name: "Enter email address..." }).click();
    await page
      .getByRole("textbox", { name: "Enter email address..." })
      .fill("test@gmail.com");
    await page.locator('input[name="phoneNumber"]').click();
    await page.locator('input[name="phoneNumber"]').fill("585635015");
    await page
      .locator("form div")
      .filter({ hasText: "Contact DetailsEmail*Phone" })
      .locator("svg")
      .click();
    await page.getByRole("textbox", { name: "Search" }).click();
    await page
      .locator("form div")
      .filter({ hasText: "Contact DetailsEmail*Phone" })
      .locator("svg")
      .click();
    await page.locator('input[name="phoneNumber"]').click();
    await page
      .getByRole("checkbox", { name: "I agree to the terms and" })
      .check();
    await page.getByText("Next").click();
    await expect(page).toHaveURL(TEST_URL);
  });

  test("test residence country field is required", async () => {
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
    await page.getByRole("textbox", { name: "Enter email address..." }).click();
    await page
      .getByRole("textbox", { name: "Enter email address..." })
      .fill("test@gmail.com");
    await page.locator('input[name="phoneNumber"]').click();
    await page.locator('input[name="phoneNumber"]').fill("585635015");
    await page
      .locator("form div")
      .filter({ hasText: "Contact DetailsEmail*Phone" })
      .locator("svg")
      .click();
    await page.getByRole("textbox", { name: "Search" }).click();
    await page
      .locator("form div")
      .filter({ hasText: "Contact DetailsEmail*Phone" })
      .locator("svg")
      .click();
    await page.locator('input[name="phoneNumber"]').click();
    await page
      .getByRole("checkbox", { name: "I agree to the terms and" })
      .check();
    await page.getByText("Next").click();
    await expect(page).toHaveURL(TEST_URL);
  });
});
