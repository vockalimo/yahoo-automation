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
/*
  console.log(" start. test start ..... 1 ");
   await page.goto(
		   'https://login.yahoo.com/?.lang=en-US&src=homepage&.done=https%3A%2F%2Fus.yahoo.com%2F&pspid=2023538075&activity=ybar-signin'
		  );
     console.log(" start. test start ..... 2 ");
   await page.screenshot({ path: './test-results/yahoologin.png', fullPage: true });
   //await page.waitForSelector('#login-username');
    console.log(" start. test start ..... 3 ");
   await page.type('#login-username', username);
       console.log(" start. test start ..... 4 ");
   await page.click('#login-signin');
       console.log(" start. test start ..... 5 ");
 //  await page.screenshot({ path: './test-results/yahoo.png', fullPage: true });
 // console.log(" start. click login done to input data ..... ");
 
   await page.screenshot({ path: './test-results/yahoopass.png', fullPage: true });
   console.log(" start. test start ..... 6 "); 
   await page.waitForSelector('#login-passwd');
      console.log(" start. test start ..... 7 ");
   await page.screenshot({ path: './test-results/yahoopassinputp.png', fullPage: true });
      console.log(" start. test start ..... 8 ");
   
   await page.type('#login-passwd', password);
      console.log(" start. test start ..... 9 ");
   await page.click('#login-signin');
      console.log(" start. test start ..... 10 ");

   await page.screenshot({ path: './test-results/yahoopasscomplete.png', fullPage: true });
   console.log(" start. click login done to input p data ..... ");
   */
 
/*
   console.log(" test done ..... ");


   await page.goto('https://tw.bid.yahoo.com' );
   await expect(page).toHaveTitle(/Yahoo/);


//#yui_3_12_0_1_1643030476029_137
//#yui_3_12_0_1_1643030476029_138
//#yui_3_12_0_1_1643030699312_130
////*[@id="yui_3_12_0_1_1643030699312_130"]
//.sc-ksluID
   await page.waitForSelector('.sc-ksluID');
   await page.type('.sc-ksluID', "macbook pro");
   //.sc-bdnxRM
   await page.click('.sc-bdnxRM');
   //.sc-kstrdz
   //.SearchCrumb_heading_yj_DJ
   await expect(page.locator('.SearchCrumb_heading_yj_DJ')).toHaveText('全部分類 中搜尋 “macbook pro');
   //await page.waitForFunction(() => window.isEverythingReady());
*/

// As a buyer, I could search "macbook"
  const selectorSearch = '#ecs input[type=search]';
  const keyword = "macbook";

  await page.goto('https://tw.mall.yahoo.com/');
  await page.waitForSelector(selectorSearch);
  await page.type(selectorSearch, keyword);
  await page.focus(selectorSearch);
  await page.keyboard.press('Enter');
  await page.waitForNavigation({ waitUntil:'networkidle' });
  await page.waitForSelector('[class*=SortBar_sortCount]');
  const count = await page.$eval('[class*=SortBar_sortCount]',
    (node) => {
      return node.textContent.replace(/(\d*).*/, '$1')
    }
  );

  await page.screenshot({ path: 'screenshot/mall-search.png' });
  
  console.log(`About ${count} results in 「${keyword}」 search.`);
  console.log('mall search test success.');


  // #yui_3_12_0_1_1643030071026_133
/*
   console.log(await page.url)
   console.log(await page.title())
   let css_selector = '#UH-Res > div.UHCol3.Grid-U > ul > li:nth-child(2) > a';
   console.log(await page.innerText(css_selector));

   console.log(await page.innerHTML(css_selector));
   console.log(await page.textContent(css_selector));
   
   await expect(page.locator(css_selector)).toHaveText('登出');
*/

  
});
