//Create a program that reads data from a file, makes an HTTP request based on the data, 
//and processes the response using Promises or async/await. 

const https = require('https');
const fs = require('fs');


// Ek HTTP request bana kar ek Promise return karne wala function
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        resolve(responseData);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}


// Response data ko file me save karne wala function
function saveToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Har URL ko process karne wala function
function processUrl(url, index) {
  return new Promise((resolve, reject) => {

    // HTTP request banao
    makeRequest(url)
      .then((response) => {
        // Response ko file me save karo
        const fileName = `response_${index + 1}.txt`;
        return saveToFile(fileName, response);
      })
      .then(() => {
        console.log(`Response saved to response_${index + 1}.txt`);
        resolve();
      })
      .catch((err) => {
        console.error('Error:', err);
        reject(err);
      });
  });
}


// API URLs wale file ko padho
fs.readFile('api_urls.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }


  // Data ko alag-alag URLs me batao
  const urls = data.trim().split('\n');
 

  // Promises ka istemal karke har URL ko ek-ek karke process karo
  urls.reduce((promiseChain, url, index) => {
    return promiseChain.then(() => processUrl(url, index));
  }, Promise.resolve());
});
