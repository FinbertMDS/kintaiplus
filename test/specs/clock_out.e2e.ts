import { browser } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import constants from './constants.js';
import { checkIsMyHoliday } from './utils';

describe('KintaiPlus', () => {
    it('clock_out', async () => {
        var holiday = await checkIsMyHoliday();
        if (!holiday) {
            console.log("今日は祝日ではありません");
            await LoginPage.open()
            await LoginPage.login(constants.KTP_ID, constants.KTP_PASSWORD);
            await browser.pause(5000);
            console.log("start clock out");
            await LoginPage.clockOut();
            await browser.pause(5000);
        } else {
            console.log("今日休み");
        }
    })
})

