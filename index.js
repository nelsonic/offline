// var request = require('request');
//
// request('https://qa-eu.progress360.pearson-intl.com/admin/api/posts_this', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.
//   } else {
//     console.log(error);
//   }
// })

request = require('request-json');
var client = request.newClient('https://qa-eu.progress360.pearson-intl.com/');

client.get('admin/api/posts_this', function(err, res, body) {
  return console.log(err);
});
