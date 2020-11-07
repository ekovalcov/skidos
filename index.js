const got = require('got');

got('https://www.google.com/').then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});