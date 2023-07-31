const { chromium } = require('playwright');

(async () => {
  // Arrange: Start the browser, open a new page
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Act: Navigate to the "/helloProfessor" route of your web application
  await page.goto('http://localhost:3000/helloProfessor');

  // Assert: Check that the h1 tag contains "Hello Professor"
  const heading = await page.$('h1');
  const headingText = await heading.innerText();

  console.log(headingText); // Should be "Hello Professor"

  await browser.close();
})();
