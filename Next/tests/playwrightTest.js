const { chromium } = require('playwright');

(async () => {
  // Arrange: Start the browser, open a new page
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Act: Navigate to the root ("/") route of your web application
  await page.goto('http://localhost:3000/');

  // Assert: Check the status code
  const response = await page.goto('http://localhost:3000/');
  console.log(response.status()); // Should be 200
  
  await browser.close();
})();
