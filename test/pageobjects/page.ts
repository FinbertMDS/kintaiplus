import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    */
    public open () {
        return browser.url(`https://kintaiplus.freee.co.jp/independent/recorder2/personal`)
    }
}
