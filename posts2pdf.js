var phantom = require('phantom');
var users = require('./users.json');
console.log(users.length);

// child_process.js:947
//     throw errnoException(process._errno, 'spawn');
//           ^
// Error: spawn EMFILE

var max_concurrent = 100;
var total = users.length;
var done  = 0;
var running = 0;
var waiting = [];
users.map(function(user){
  user.email = user.emails[0].address;
  waiting.push(user);



});

// loop through all items start processing
while(done <= total){

  if(running < max_concurrent){
    running++;
    console.log("Done: "+done+" | Waiting:"+waiting.length +" | Running:"+running);
    run();
  }
}

function run(){
    var u = waiting.pop();
    savePDF(u, function cb(){
      done++;
      running--;
    });
}


function wait(){
  setTimeout(function(){
    if(running.length < max_concurrent){
      next();
    } else {
      wait();
    }
  },100);
}

function next(){
  // running.push(user.)
  user.email = user.emails[0].address;
  if(user.email.indexOf('themanor') > -1 || user.email.indexOf('hony') > -1 ){
    savePDF(user);
  }
}


function savePDF(user, callback){
  var u = user;

  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open("http://localhost:8080/#/"+u._id, function (status) {
        console.log("Page Opened? ", status);

        page.set('paperSize', { format: 'A4', border: '1cm' });
        // page.set('paperSize', { width: 1024, height: 768} );

        page.evaluate(function () { return document.title; }, function (title) {
          console.log('Page title is ' + title);
          page.render(__dirname+'/pdf/Tilr_posts_'+u.email+'.pdf', function() {
            // file is now written to disk
            callback();
          });

          ph.exit();
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
