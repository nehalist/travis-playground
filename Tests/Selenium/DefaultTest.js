const {expect} = require('chai');
const {Builder, By, until} = require('selenium-webdriver');

describe('default test', () => {
    const driver = new Builder()
        .forBrowser('chrome')
        .build();

    const url = 'http://localhost';

    it('should check the page title', async () => {
        await driver.get(`${url}/account`);

        const pageTitle = await driver.getTitle();

        expect(pageTitle).to.include('Playground');
    });

    after(async () => driver.quit());
});