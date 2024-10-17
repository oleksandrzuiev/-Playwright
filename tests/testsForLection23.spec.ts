import { test, expect } from '@playwright/test';

test.describe('Field "Name" tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign up').click();
  })
    test('Name is required error', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Name required');
    })

    test('Name is invalid error', async ({ page }) => {
      await page.locator('#signupName').fill('123123');
      await page.locator('#signupName').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Name is invalid');
    })

    test('Wrong length for name error', async ({ page }) => {
      await page.locator('#signupName').fill('q');
      await page.locator('#signupName').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
    })

    test('Border color red error', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').blur();
      await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})

test.describe('Field "Last Name" tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign up').click();
  })
    test('Last Name is required error', async ({ page }) => {
      await page.locator('#signupLastName').focus();
      await page.locator('#signupLastName').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Last name required');
    })

    test('Last Name is invalid error', async ({ page }) => {
      await page.locator('#signupLastName').fill('123123');
      await page.locator('#signupLastName').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Last name is invalid');
    })

    test('Wrong length for last name error', async ({ page }) => {
      await page.locator('#signupLastName').fill('q');
      await page.locator('#signupLastName').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
    })

    test('Border color red error', async ({ page }) => {
      await page.locator('#signupLastName').focus();
      await page.locator('#signupLastName').blur();
      await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})

test.describe('Field "Email" tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign up').click();
  })
    test('Email required error', async ({ page }) => {
      await page.locator('#signupEmail').focus();
      await page.locator('#signupEmail').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Email required');
    })

    test('Email is incorrect error', async ({ page }) => {
      await page.locator('#signupEmail').fill('qwe@qwe');
      await page.locator('#signupEmail').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
    })

    test('Border color red error', async ({ page }) => {
      await page.locator('#signupEmail').focus();
      await page.locator('#signupEmail').blur();
      await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})

test.describe('Field "Password" tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign up').click();
  })
    test('Password required error', async ({ page }) => {
      await page.locator('#signupPassword').focus();
      await page.locator('#signupPassword').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Password required');
    })

    test('Password is incorrect error', async ({ page }) => {
      await page.locator('#signupPassword').fill('1');
      await page.locator('#signupPassword').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    })

    test('Border color red error', async ({ page }) => {
      await page.locator('#signupPassword').focus();
      await page.locator('#signupPassword').blur();
      await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})

test.describe('Field "Re-enter Password" tests', () => {
  test.beforeEach( async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign up').click();
  })
    test('Passwords do not match error', async ({ page }) => {
      await page.locator('#signupPassword').fill('For_The_Horde99');
      await page.locator('#signupRepeatPassword').fill('For_The_Horde9');
      await page.locator('#signupRepeatPassword').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Passwords do not match');
    })

    test('Re-enter password required error', async ({ page }) => {
      await page.locator('#signupRepeatPassword').focus();
      await page.locator('#signupRepeatPassword').blur();
      await expect(page.locator('.invalid-feedback')).toHaveText('Re-enter password required');
    })

    test('Border color red error', async ({ page }) => {
      await page.locator('#signupRepeatPassword').focus();
      await page.locator('#signupRepeatPassword').blur();
      await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})

test.describe('Button "Register" tests', () => {
  test.beforeEach( async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign up').click();
  })
    test('Register button is disabled', async ({ page }) => {
      await page.locator('#signupName').fill('Oleksandr');
      await page.locator('#signupLastName').fill('Zuiev');
      await page.locator('#signupEmail').fill('qweasdqwe+testuser11@gmail.com');
      await page.locator('#signupPassword').fill('DD_071236');
      await page.locator('#signupRepeatPassword').fill('DD_071236');
      await expect(page.getByText('Register')).toBeDisabled();
    })

    test('Successful Registration', async ({ page }) => {
      await page.locator('#signupName').fill('Oleksandr');
      await page.locator('#signupLastName').fill('Zuiev');
      await page.locator('#signupEmail').fill('qweasdqwe+testuser13@gmail.com');
      await page.locator('#signupPassword').fill('DD_071236');
      await page.locator('#signupRepeatPassword').fill('DD_071236');
      await page.getByText('Register').click();
      await expect(page.getByText('Registration Complete')).toBeVisible();
    })
})