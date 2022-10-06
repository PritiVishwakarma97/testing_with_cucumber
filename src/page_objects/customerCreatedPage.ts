import { Page } from "puppeteer";

export class CustomerCreatedPage{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    private welcomeText = "div[id='rightPanel'] > h1";

    async isWelcomeUserTextDisplayed(username: string): Promise<boolean>{
        const welcomeTitle = await this.page.$(this.welcomeText);
        const welcomeText = await this.page.evaluate(el => el?.textContent, welcomeTitle) as string;
        if(welcomeText.includes(username))
            return true;
        else
            return false;
    }
}