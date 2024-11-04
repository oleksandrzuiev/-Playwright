import { chromium } from "@playwright/test";
import { HomePage } from '../../page-objects/pages/HomePage';
import { SignInForm } from '../../page-objects/components/forms/SignInForm';
import { mainUserEmail, mainUserPassword } from '../../test-data/credentials';
import { GaragePage } from "../../page-objects/pages/GaragePage";
import { test } from '../../test-data/fixtures/fixtureBase'

test.describe(('Task1'), () => {
    let homePage: HomePage;
    let signInForm: SignInForm;
    let garagePage: GaragePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
        garagePage = new GaragePage(page);
        const changeProfileData = {
            "status": "ok",
            "data": {
                "userId": 151289,
                "photoFilename": "default-user.png",
                "name": "PLAYWRIGHT",
                "lastName": "ABUSER"
            }
        }
        await page.route('**/api/users/profile', route => route.fulfill({
            body: JSON.stringify(changeProfileData),
        }));
        await homePage.open();
        await homePage.openSignInForm();
        await signInForm.loginWithCredentials(mainUserEmail, mainUserPassword);
    })
    
    test(`Getting to profile`, async ({ page }) => {
        await page.locator('.-profile').click();
    })

})