import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import allureReporter from '@wdio/allure-reporter'
import loginPage from '../pageobjects/login.page.js'



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        allureReporter.addFeature('Feature')
        await LoginPage.open()

        await LoginPage.login('testahman@gm2il.com', 'admin123')
        await loginPage.messageFailed.isDisplayed()
    })
})

