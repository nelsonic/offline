var phantom = require('phantom');

var posts = require('./posts.json');
console.log("Posts:",posts.length);

var postUsers = [];
posts.map(function(p){
  postUsers.push(p.user_id);
});
console.log("postUsers:",postUsers.length);

var users = require('./users.json');
console.log("Users:",users.length);

var interval = setInterval( function() {
  var u = nextUser();
  if(typeof u !== 'undefined' && typeof u._id !== 'undefined') {
    console.log(u._id +' | '+users.length);
    u.email = u.emails[0].address;
    savePDF(u);
  }

  if(users.length === 0) {
    clearInterval(interval);
  }
}, 1000);

function nextUser(){
  var hasPosts = false;
  while(hasPosts === false){
    var u = users.pop();
    if(postUsers.indexOf(u._id) > -1){
      // console.log('hai');
      hasPosts = true;
    }
  }
  return u;
}


function savePDF(user){
  var u = user;

  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open("http://localhost:8080/#/"+u._id, function (status) {
        console.log("Page Opened? ", status);

        page.set('paperSize', { format: 'A4', border: '1cm' });
        // page.set('paperSize', { width: 1024, height: 768} );
        var filename = __dirname+'/pdf/Tilr_posts_'+u.email+'.pdf'
        page.evaluate(function () { return document.title; }, function (title) {
          console.log('Page title is ' + title);
          page.render(filename, function() {
            console.log(filename + ' - - - SAVED - - -')
            // file is now written to disk
            ph.exit();
          });
        });
      });
    });
  });

}

var user = {
  "_id":"qn6Tdx3EuMkvwLbdx",
  "email":"this@mail.com"
};
var user2 = {
  "_id":"JssPdKAasxJcXSqbE",
  "email":"that@mail.com"
};
// var users = [user, user2];
// users.map(function(user){
//   savePDF(user);
// });
