const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];
const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  console.log('StatusCode =', response)
  const content = body;
  fs.writeFile(filePath, content, error => {
    if (error) {
      console.error(error);
      return
    }
  })
  console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);
});