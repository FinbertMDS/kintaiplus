import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername() {
        return $('#id');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get btnSubmit() {
        return $('.btn-control-message');
    }

    public get btnClockIn() {
        return $('.record-clock-in');
    }

    public get btnClockOut() {
        return $('.record-clock-out');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {
        if (await (await this.inputUsername).isDisplayed()) {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
        }
    }

    public async clockIn() {
        if (await (await this.btnClockIn).isDisplayed()) {
            await (await this.btnClockIn).click();
            console.log("clock in done");
        }
    }

    public async clockOut() {
        if (await (await this.btnClockOut).isDisplayed()) {
            await (await this.btnClockOut).click();
            console.log("clock out done");
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open();
    }
}

export default new LoginPage();
