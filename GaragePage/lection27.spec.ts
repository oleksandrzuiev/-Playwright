import { chromium } from "@playwright/test";
import { HomePage } from '../page-objects/pages/HomePage';
import { SignInForm } from '../page-objects/components/forms/SignInForm';
import { mainUserEmail, mainUserPassword } from '../test-data/credentials';
import { GaragePage } from "../page-objects/pages/GaragePage";
import { test } from '../test-data/fixtures/fixtureBase'

test.describe(('GaragePage with POM'), () => {
    let homePage: HomePage;
    let signInForm: SignInForm;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
    })

    test(('Add BMW X5'), async ({ garagePageWithEditing }) => {
        await garagePageWithEditing.addNewCar('BMW', 'X5', '100');
        await garagePageWithEditing.verifyLastAddedCarName('BMW X5');
    })

})