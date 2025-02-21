const {test, expect} = require('@playwright/test');

test("Navigate to PDP", async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    await page.waitForSelector(`//div[@class='card-block']`);
    const title= await page.title();
    await expect(title).toContain("STORE");
})

test("Failed Test Case", async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    await page.waitForSelector(`//div[@class='card-block']`);
    const title= await page.title();
    await expect(title).toContain("STORE1");
})