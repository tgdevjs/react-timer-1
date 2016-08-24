var express = require('express');

// Create app
var app = express();
const port = process.env.PORT || 3000;

// Redirect https to http
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Designate folder to serve
app.use(express.static('public'));

// Start server
app.listen(port, function() {
  console.log('Express server is on port '+port);
});
