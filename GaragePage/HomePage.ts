import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly signUpButton: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.getByText('Sign up');
        this.signInButton = page.getByText('Sign In');
    }

    async open() {
        await this.page.goto('');
    }

    async openSignUpForm() {
        await this.signUpButton.click();
    }

    async openSignInForm() {
        await this.signInButton.click();
    }
}