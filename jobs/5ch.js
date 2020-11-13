import puppeteer from 'puppeteer';

const crawl5channel = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://krsw.5ch.net/test/read.cgi/gamesm/1604658593/');
  const sures = await page.evaluate(() => {
    const msgs = document.querySelectorAll('.post .message .escaped');
    return Array.prototype.map.call(msgs, (msg) => msg.textContent);
  });
  sures.forEach(async (sure) => {
    console.log(sure);
  });
  await browser.close();
};

export default {
  crawl5channel,
};
