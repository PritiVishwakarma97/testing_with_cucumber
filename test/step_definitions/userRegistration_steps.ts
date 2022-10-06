import { Given, When, Then, Before, DataTable, setDefaultTimeout, After } from "@cucumber/cucumber";
import assert from "assert";
import * as puppeteer from "puppeteer";
import * as config from "../../config/config.json";
import { CustomerCreatedPage } from "../../src/page_objects/customerCreatedPage";
import { HomePage } from "../../src/page_objects/homePage";
import { RegistrationPage, UserDetail } from "../../src/page_objects/registrationPage";

let browser: puppeteer.Browser;
let page: puppeteer.Page;
let userDetail: UserDetail;
let homePage: HomePage;
let registrationPage: RegistrationPage;
let customerCreatedPage: CustomerCreatedPage;

setDefaultTimeout(60000);

Before({tags: "@UI_Interaction"},async function () {
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            "--start-maximized"
        ]
    });

    await setTimeout(()=>{
        Promise.resolve(1)
    }, 60000);

    page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000);
    await page.goto(config.test.url);
    homePage = new HomePage(page);
});

After({tags: "@UI_Interaction"}, async (scenario)=>{
    if(scenario.result?.status === "FAILED"){
        console.log(scenario.result?.message);
        await page.screenshot({
            path: "test/test_results/screenshots/fail.png"
        });
    }

    await browser.close();
})


Given("you are on home page", async function () {
    const title = await page.title();
    if (title !== "ParaBank | Welcome | Online Banking") {
        await page.goto(config.test.url);
        homePage = new HomePage(page);
    }
});

Given('following user details', (input: DataTable) => {
    userDetail = input.rowsHash() as unknown as UserDetail;
    if(userDetail.username === "<random>"){
        const date = new Date();
        userDetail.username = "newUser" + date.getTime();
        console.log(userDetail.username);
    }

});

When('you click on Register link', async () => {
    registrationPage = await homePage.clickRegisterLink()
});

When('enter all details', async () => {
    await registrationPage.enterUserDetails(userDetail);
});

When('click Register button', async () => {
    customerCreatedPage = await registrationPage.clickRegisterBtn();
})

Then('{string} page should be displayed', async (expectedPageTitle: string) => {
    const title = await page.title();
    const isPageDisplayed = title.includes(expectedPageTitle);
    assert.equal(true, isPageDisplayed);
});

Then('username should be displayed', async () => {
    const isDisplayed = await customerCreatedPage.isWelcomeUserTextDisplayed(userDetail.username);
    assert.equal(isDisplayed, true);
});












