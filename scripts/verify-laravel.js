let puppeteer;
try {
  puppeteer = require('puppeteer-core');
} catch (e) {
  puppeteer = require('../next-portfolio/node_modules/puppeteer-core');
}
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.resolve(__dirname, '../screenshots-laravel');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();

  // 1. Home Page Full & Hero
  console.log('Navigating to Laravel Home: http://127.0.0.1:8000...');
  await page.goto('http://127.0.0.1:8000', { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 1000));

  await page.screenshot({ path: path.join(outDir, '00-laravel-full-home.png'), fullPage: true });
  console.log('Saved 00-laravel-full-home.png');

  await page.screenshot({ path: path.join(outDir, '01-laravel-home-hero.png') });
  console.log('Saved 01-laravel-home-hero.png');

  // 2. Sections
  const sections = [
    { id: 'skills', name: '02-laravel-skills.png' },
    { id: 'experience', name: '03-laravel-experience.png' },
    { id: 'education', name: '04-laravel-education.png' },
    { id: 'work', name: '05-laravel-work.png' },
    { id: 'services', name: '06-laravel-services.png' },
    { id: 'contact', name: '07-laravel-contact.png' }
  ];

  for (const s of sections) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, s.id);
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, s.name) });
    console.log(`Saved ${s.name}`);
  }

  // 3. Sub-pages
  const subpages = [
    { url: 'http://127.0.0.1:8000/about', name: '08-laravel-about.png' },
    { url: 'http://127.0.0.1:8000/work', name: '09-laravel-work.png' },
    { url: 'http://127.0.0.1:8000/services', name: '10-laravel-services.png' },
    { url: 'http://127.0.0.1:8000/contact', name: '11-laravel-contact.png' }
  ];

  // 4. Test Contact Form Submission via Browser
  console.log('Testing Contact Form Submission on Laravel app...');
  await page.goto('http://127.0.0.1:8000#contact', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 500));

  // Fill in form inputs
  const nameInput = await page.$('input[placeholder="e.g. John Doe"]');
  const emailInput = await page.$('input[placeholder="e.g. john@enterprise.com"]');
  const msgInput = await page.$('textarea[placeholder*="Tell me about your project"]');
  const spamInput = await page.$('input[placeholder="Answer here"]');
  const submitBtn = await page.$('button[type="submit"]');

  if (nameInput && emailInput && msgInput && spamInput && submitBtn) {
    await nameInput.type('Hafiz Automation Test');
    await emailInput.type('hafizcoolman@gmail.com');
    await msgInput.type('Automated testing of native Laravel contact form integration.');
    await spamInput.type('19');
    
    console.log('Submitting contact form in browser...');
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(outDir, '12-laravel-form-submitted.png') });
    console.log('Saved 12-laravel-form-submitted.png');
  }

  await browser.close();
  console.log('All Laravel live verification screenshots captured!');
}

run().catch((err) => {
  console.error('Error verifying Laravel app:', err);
  process.exit(1);
});
