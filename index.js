const puppeteer =  require('puppeteer');

const url = '';


(async () => {
    const browser = await puppeteer.launch({
       // headless:false
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > b:nth-child(1) > font:nth-child(1)');
    await page.waitForSelector('body > table:nth-child(3) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(1)');
    await page.waitForSelector('body > table:nth-child(3) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(2)');
    await page.waitForSelector('body > table:nth-child(3) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(4) > td > b > font');
    await page.waitForSelector('body > table:nth-child(6) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > b > font');
    await page.waitForSelector('body > table:nth-child(6) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > b > font');
    await page.waitForTimeout(10000);
    
    const status =  await page.evaluate(() => {

        return document.querySelector('body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > b:nth-child(1) > font:nth-child(1)').textContent;
        
    });
    const cmts =  await page.evaluate(() => {

        return document.querySelector('body > table:nth-child(3) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent;
        
    });
    const placaup =  await page.evaluate(() => {

        return document.querySelector('body > table:nth-child(3) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(2)').textContent;
        
    });
    const tx =  await page.evaluate(() => {

        return document.querySelector('body > table:nth-child(6) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > b > font').textContent;
        
    });
    const sinal =  await page.evaluate(() => {

        return document.querySelector('body > table:nth-child(3) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(4) > td > b > font').textContent;
        
    });
    const rx =  await page.evaluate(() => {

        return document.querySelector('body > table:nth-child(6) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > b > font').textContent;
        
    });

    if(status === 'Online (pt)'){

        console.log('Online');
        console.log(cmts)
        console.log(placaup)
        console.log('SNR ',sinal)
        console.log('TX ', tx)
        console.log('RX', rx)
    };

    //console.log(status);
    await browser.close();
})();