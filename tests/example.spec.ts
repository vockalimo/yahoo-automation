import { test, expect } from '@playwright/test';
import dotenv from "dotenv"
dotenv.config({ path: '.env' })
//require('dotenv').config();

/*
test('basic test', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
 //  await page.locator('text=Get started').click();
 //  await expect(page).toHaveTitle(/Getting started/);

   await page.goto('https://tw.mall.yahoo.com');
   await expect(page).toHaveTitle(/Yahoo/);
   //#isoredux-root > div > div:nth-child(1) > div > div > div.ResultList_resultList_2J1jC > div.ResultList_flexList_1NIrD > div > div > ul > li:nth-child(1) > a > div > span > span.BaseGridItem__price___31jkj > em
   //#isoredux-root > div > div:nth-child(1) > div > div > div.ResultList_resultList_2J1jC > div.ResultList_flexList_1NIrD > div > div > ul > li:nth-child(3) > a > div > span > span.BaseGridItem__price___31jkj > em

});
*/

test('basic test2', async ({ context, page }) => {
  // await page.goto('https://playwright.dev/');
 //  await page.locator('text=Get started').click();
 //  await expect(page).toHaveTitle(/Getting started/);

   //await page.clearBrowserCacheParameters
   
   console.log(process.env.USERNAME);
     let username = process.env.USERNAME;
     console.log( " user name " + username)
  //   let password = process.env.PASSWORD;


   await context.clearCookies();
   expect(await context.cookies()).toEqual([]);
   await page.goto('https://tw.mall.yahoo.com');
   await expect(page).toHaveTitle(/Yahoo/);
 //  console.log(process.env.USERNAME);
 //  console.log(process.env.PASSWORD);
   //{ timeout=30, wait_until="DocumentLoaded|Load|networkidle" }

 //   let username = process.env.USERNAME;
 //   let password = process.env.PASSWORD;
       // input username & password
  /*
    await page.goto(
      'https://login.yahoo.com/m?.lg=tw&.intl=tw&.src=mktg1&.done=http://tw.bid.yahoo.com/status.html'
    );
    await page.waitForSelector('#login-username');
    await page.type('#login-username', username);
    await page.click('#login-signin');
    await page.waitForSelector('#login-passwd');
    await page.type('#login-passwd', password);
    await page.click('#login-signin');



   await page.goto('https://tw.mall.yahoo.com' );

   console.log(await page.url)
   console.log(await page.title())
   let css_selector = '#UH-Res > div.UHCol3.Grid-U > ul > li:nth-child(2) > a';
   console.log(await page.innerText(css_selector));

   console.log(await page.innerHTML(css_selector));
   console.log(await page.textContent(css_selector));
   

    await expect(page.locator(css_selector)).toHaveText('登出');

   

   
   let username = process.env.USERNAME;
   let password = process.env.PASSWORD;
       // input username & password
    await page.goto(
      'https://login.yahoo.com/m?.lg=tw&.intl=tw&.src=mktg1&.done=http://tw.bid.yahoo.com/status.html'
    );
    await page.waitForSelector('#login-username');
    await page.type('#login-username', username);
    await page.click('#login-signin');
    await page.waitForSelector('#login-passwd');
    await page.type('#login-passwd', password);
    await page.click('#login-signin');
  //text=Learn more   await page.waitForNavigation();
  */

  
});