const {expect} = require('chai');
const {Builder, By, until} = require('selenium-webdriver');

describe('default test', () => {
    const driver = new Builder()
        .usingServer('http://hub-cloud.browserstack.com/wd/hub')
        .withCapabilities({
            'browserName' : 'Chrome',
            'browser_version' : '62.0',
            'os' : 'Windows',
            'os_version' : '10',
            'resolution' : '1920x1080',
            'browserstack.user' : process.env.BS_USER,
            'browserstack.key' : process.env.BS_KEY,
            'browserstack.local' : 'true'
        })
        .build();

    const url = 'http://localhost';

    it('should check the page title', async () => {
        await driver.get(`${url}`);

        const pageTitle = await driver.getTitle();

        expect(pageTitle).to.include('Playground');
    });

    after(async () => driver.quit());
});