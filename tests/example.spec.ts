import { test, expect } from '@playwright/test';

test.describe('Locators', () => {
  test('getByRole', async ({ page }) => {
    await page.goto('');
    await expect(page.getByRole('heading', {level: 1})).toBeVisible();
  })

  test('getByText', async ({ page }) => {
    await page.goto('');
    await expect(page.getByText('Do more!', {exact: true})).toBeVisible();
  })

  test('getByLabel', async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign In').click();
    await expect(page.getByLabel('Email')).toBeVisible();
  })

  test('hasText', async ({ page }) => {
    await page.goto('');
    await page.locator('//button', {hasText: 'Sign up'}).click();
  })

  test('has', async ({ page }) => {
    await page.goto('');

    const fbIcon = page.locator('.icon-facebook'); 

    await page.locator('//a', {has: fbIcon}).click();
  })

  test('multiple elements', async ({ page }) => {
    await page.goto('');

    console.log('Number of elements' + await page.locator('.socials_icon').count());
  })

  test('Text', async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign In').click();
    await page.locator('#signinEmail').fill('test@example.com');
    await page.locator('#signinPassword').fill('123123123');
    await page.locator('//*[@class="modal-content"]//button[@class="btn btn-primary]').click();
  })
})