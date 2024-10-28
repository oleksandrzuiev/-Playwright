import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/pages/HomePage';
import { SignUpForm } from '../page-objects/components/forms/SignUpForm';
import { randomUserEmail } from '../test-data/credentials';

test.describe('Field "Name" tests', () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await homePage.open();
    await homePage.openSignUpForm();
  })
    test('Name is required error', async () => {
      await signUpForm.triggerErrorOnFirstNameField();
      await signUpForm.verifyErrorText('Name required');
    })

    test('Name is invalid error', async () => {
      await signUpForm.enterValueAndTriggerErrorOnFirstNameField('123123');
      await signUpForm.verifyErrorText('Name is invalid');
    })

    test('Wrong length for name error', async () => {
      await signUpForm.enterValueAndTriggerErrorOnFirstNameField('q');
      await signUpForm.verifyErrorText('Name has to be from 2 to 20 characters long');
    })

    test('Border color red error', async () => {
      await signUpForm.triggerErrorOnFirstNameField();
      await signUpForm.verifyBorderColorRedAtFirstNameField();
    })
})

test.describe('Field "Last Name" tests', () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await homePage.open();
    await homePage.openSignUpForm();
  })
    test('Last Name is required error', async () => {
      await signUpForm.triggerErrorOnLastNameField();
      await signUpForm.verifyErrorText('Last name required');
    })

    test('Last Name is invalid error', async () => {
      await signUpForm.enterValueAndTriggerErrorOnLastNameField('123123');
      await signUpForm.verifyErrorText('Last name is invalid');
    })

    test('Wrong length for last name error', async () => {
      await signUpForm.enterValueAndTriggerErrorOnLastNameField('q');
      await signUpForm.verifyErrorText('Last name has to be from 2 to 20 characters long');
    })

    test('Border color red error', async () => {
      await signUpForm.triggerErrorOnLastNameField();
      await signUpForm.verifyBorderColorRedAtLastNameField();
    })
})

test.describe('Field "Email" tests', () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await homePage.open();
    await homePage.openSignUpForm();
  })
    test('Email required error', async () => {
      await signUpForm.triggerErrorOnEmailField();
      await signUpForm.verifyErrorText('Email required');
    })

    test('Email is incorrect error', async () => {
      await signUpForm.enterValueAndTriggerErrorOnEmailField('qwe@qwe');
      await signUpForm.verifyErrorText('Email is incorrect');
    })

    test('Border color red error', async () => {
      await signUpForm.triggerErrorOnEmailField();
      await signUpForm.verifyBorderColorRedAtEmailField();
    })
})

test.describe('Field "Password" tests', () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await homePage.open();
    await homePage.openSignUpForm();
  })
    test('Password required error', async () => {
      await signUpForm.triggerErrorOnPasswordField();
      await signUpForm.verifyErrorText('Password required');
    })

    test('Password is incorrect error', async () => {
      await signUpForm.enterValueAndTriggerErrorOnPasswordField('1');
      await signUpForm.verifyErrorText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    })

    test('Border color red error', async () => {
      await signUpForm.triggerErrorOnPasswordField();
      await signUpForm.verifyBorderColorRedAtPasswordField();
    })
})

test.describe('Field "Re-enter Password" tests', () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;
  test.beforeEach( async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await homePage.open();
    await homePage.openSignUpForm();
  })
    test('Passwords do not match error', async () => {
      await signUpForm.enterValuesAndTriggerErrorOnRepeatPasswordField('DD_071236', 'DD_071236');
      await signUpForm.verifyErrorText('Passwords do not match');
    })

    test('Re-enter password required error', async () => {
      await signUpForm.triggerErrorOnRepeatPasswordField();
      await signUpForm.verifyErrorText('Re-enter password required');
    })

    test('Border color red error', async () => {
      await signUpForm.triggerErrorOnRepeatPasswordField();
      await signUpForm.verifyBorderColorRedAtRepeatPasswordField();
    })
})

test.describe('Button "Register" tests', () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;
  test.beforeEach( async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await homePage.open();
    await homePage.openSignUpForm();
  })
    test('Register button is disabled', async () => {
      await signUpForm.fillInRegisterForm('Oleksandr', 'Zuiev', randomUserEmail, 'DD_071236', 'DD_071236');
      await signUpForm.verifyDisabledButton();
    })

    test('Successful Registration', async () => {
      await signUpForm.fillInRegisterForm('Oleksandr', 'Zuiev', randomUserEmail, 'DD_071236', 'DD_071236');
      await signUpForm.clickRegisterButton();
      await signUpForm.verifyNotification('Registration Complete');
    })
})