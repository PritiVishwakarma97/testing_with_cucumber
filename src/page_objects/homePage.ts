import { Page } from "puppeteer";
import { RegistrationPage } from "./registrationPage";

export class HomePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //#region Web Elements

    registrationLink = "a[href^='register.htm']";

    //#endregion

    //#region Methods

    async clickRegisterLink():Promise<RegistrationPage> {
        await Promise.all([
            this.page.click(this.registrationLink),
            this.page.waitForNavigation()
        ]);
        return new RegistrationPage(this.page);
    }
    
    //#endregion
}