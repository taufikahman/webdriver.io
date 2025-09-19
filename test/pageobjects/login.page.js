import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#Email');
    }

    get inputPassword () {
        return $('#Password');
    }

    get btnSubmit () {
        return $('//button[normalize-space()="Log in"]');
    }

     get messageFailed () {
        return $("//li[normalize-space()='No customer account found']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
