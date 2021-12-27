import { browser } from "protractor";

exports.config = {

    framework: 'jasmine2',

    specs: [
        './specs/*.ts',
    ],

    onPrepare: async function () {
        browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
    }
};
