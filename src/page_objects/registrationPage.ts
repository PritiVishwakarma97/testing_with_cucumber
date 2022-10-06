import { Page } from "puppeteer";
import { CustomerCreatedPage } from "./customerCreatedPage";

export class RegistrationPage{
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //#region Web elements
    firstNameTxtBox = "input[id='customer.firstName']";
    lastNameTxtBox = "input[id='customer.lastName']";
    addressTxtBox = "input[id='customer.address.street']";
    cityTxtBox = "input[id='customer.address.city']";
    stateTxtBox = "input[id='customer.address.state']";
    zipCodeTxtBox = "input[id='customer.address.zipCode']";
    phoneNumberTxtBox = "input[id='customer.phoneNumber']";
    ssnTxtBox = "input[id='customer.ssn']";
    usernameTxtBox = "input[id='customer.username']";
    passwordTxtBox = "input[id='customer.password']";
    confirmPasswordTxtBox = "input[id='repeatedPassword']";
    registerBtn = "input[value='Register']";
    //#endregion


    async enterUserDetails(userDetail: UserDetail){

        const firstName = await this.page.$(this.firstNameTxtBox);
        await firstName?.click();
        await firstName?.type(userDetail.firstName);

        const lastName = await this.page.$(this.lastNameTxtBox);
        await lastName?.focus();
        await lastName?.type(userDetail.lastName);

        const address = await this.page.$(this.addressTxtBox);
        await address?.focus();
        await address?.type(userDetail.address);

        const city = await this.page.$(this.cityTxtBox);
        await city?.focus();
        await city?.type(userDetail.city);

        const state = await this.page.$(this.stateTxtBox);
        await state?.type(userDetail.state);

        const zipCode = await this.page.$(this.zipCodeTxtBox);
        await zipCode?.type(userDetail.zipCode);

        const phoneNumber = await this.page.$(this.phoneNumberTxtBox);
        await phoneNumber?.type(userDetail.phoneNumber);

        const ssn = await this.page.$(this.ssnTxtBox);
        await ssn?.type(userDetail.ssn);

        const username = await this.page.$(this.usernameTxtBox);
        await username?.type(userDetail.username);

        const password = await this.page.$(this.passwordTxtBox);
        await password?.type(userDetail.password);

        const confirm = await this.page.$(this.confirmPasswordTxtBox);
        await confirm?.type(userDetail.password);
    }

    async clickRegisterBtn(): Promise<CustomerCreatedPage>{

        await Promise.all([
            this.page.click(this.registerBtn),
            this.page.waitForNavigation()
        ]);

        return new CustomerCreatedPage(this.page);
    }
}

export interface UserDetail{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    ssn: string;
    phoneNumber: string;
    username: string;
    password: string;
}