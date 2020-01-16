const request = require('request');
const args = process.argv;
request('https://api.thecatapi.com/v1/breeds/search?q=' + args[2], (error, response, body) => {
  if (error) {
    console.log("error:", error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found');
    } else {
      console.log(data[0].description);
    }
  }
});