import { expect, Locator, Page } from "@playwright/test";

export class SignInForm {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly form: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('#signinEmail');
        this.passwordField = page.locator('#signinPassword');
        this.form = page.locator('.modal-content');
        this.loginButton = this.form.locator('.btn-primary');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async loginWithCredentials(email: string, password: string) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.clickLoginButton();
    }

    async verifyErrorMessageByText(text: string) {
        await expect(this.form.getByText(text)).toBeVisible();
    }
}