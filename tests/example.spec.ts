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

   test.setTimeout(0);
   
   console.log(process.env.USERNAME);

   await context.clearCookies();
   expect(await context.cookies()).toEqual([]);
 
   let username = process.env.USERNAME;
   let password = process.env.USERWORD;
       // input username & password
  //https://login.yahoo.com/account/challenge/password?.intl=tw&src=mktg1&done=http%3A%2F%2Ftw.mall.yahoo.com%2F&as=1&sessionIndex=QQ--&acrumb=6Mq7afAt&display=login&authMechanism=primary

  console.log(" start. test done ..... ");
   await page.goto(
		   'https://login.yahoo.com/config/login?.intl=tw&.src=mktg1&.pd=c%3DlVuuuM272e4FzSWCFQRlEd3GYg--&.done=http://tw.mall.yahoo.com'
		  );
   await page.screenshot({ path: './test-results/yahoologin.png', fullPage: true });
   //await page.waitForSelector('#login-username');
   await page.type('#login-username', username);
   await page.click('#login-signin');
   await page.screenshot({ path: './test-results/yahoo.png', fullPage: true });
  console.log(" start. click login done to input data ..... ");
 
   //await page.waitForSelector('#login-passwd');
   console.log(process.env.USERWORD);
   await page.screenshot({ path: './test-results/yahoopass.png', fullPage: true });

   await page.type('#login-passwd', password);
   console.log(" start. click login done to input p data ..... ");
 
  
   //await page.click('#login-signin');
  
   console.log(" test done ..... ");

/*
   await page.goto('https://tw.mall.yahoo.com' );
   await expect(page).toHaveTitle(/Yahoo/);

   console.log(await page.url)
   console.log(await page.title())
   let css_selector = '#UH-Res > div.UHCol3.Grid-U > ul > li:nth-child(2) > a';
   console.log(await page.innerText(css_selector));

   console.log(await page.innerHTML(css_selector));
   console.log(await page.textContent(css_selector));
   
   await expect(page.locator(css_selector)).toHaveText('登出');
*/

  
});
