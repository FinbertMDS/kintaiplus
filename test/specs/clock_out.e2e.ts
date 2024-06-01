import { browser } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import constants from './constants.js';

describe('KintaiPlus', () => {
    it('clock_out', async () => {
        await LoginPage.open()
        await LoginPage.login(constants.KTP_ID, constants.KTP_PASSWORD);
        await browser.pause(5000);
        console.log("start clock out");
        await LoginPage.clockOut();
        await browser.pause(5000);
    })
})

