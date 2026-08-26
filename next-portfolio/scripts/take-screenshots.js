const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // 1. Home Page Sections
  console.log('Navigating to Home Page...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1000));

  // Capture Full Page
  await page.screenshot({ path: path.join(outDir, '00-full-home.png'), fullPage: true });
  console.log('Saved 00-full-home.png');

  // Capture Hero Viewport
  await page.screenshot({ path: path.join(outDir, '01-home-hero.png') });
  console.log('Saved 01-home-hero.png');

  // Scroll to Skills
  await page.evaluate(() => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '02-skills-section.png') });
  console.log('Saved 02-skills-section.png');

  // Scroll to Experience
  await page.evaluate(() => {
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '03-experience-section.png') });
  console.log('Saved 03-experience-section.png');

  // Scroll to Education
  await page.evaluate(() => {
    const el = document.getElementById('education');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '04-education-section.png') });
  console.log('Saved 04-education-section.png');

  // Scroll to Work
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '05-work-section.png') });
  console.log('Saved 05-work-section.png');

  // Scroll to Services
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '06-services-section.png') });
  console.log('Saved 06-services-section.png');

  // Scroll to Contact
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '07-contact-section.png') });
  console.log('Saved 07-contact-section.png');

  // 2. Dedicated Pages
  console.log('Navigating to /about...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '08-about-page.png') });
  console.log('Saved 08-about-page.png');

  console.log('Navigating to /work...');
  await page.goto('http://localhost:3000/work', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '09-work-page.png') });
  console.log('Saved 09-work-page.png');

  console.log('Navigating to /services...');
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '10-services-page.png') });
  console.log('Saved 10-services-page.png');

  console.log('Navigating to /contact...');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '11-contact-page.png') });
  console.log('Saved 11-contact-page.png');

  await browser.close();
  console.log('All verification screenshots captured successfully!');
}

capture();
