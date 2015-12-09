var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/email', function(request, response) {
  console.log(request.body);

  var name = request.body.name || 'Unknown';
  var email = request.body.email || 'no-reply@buyppack.com';
  var message = request.body.message || 'Blank message, wtf?';

  sendgrid.send({
    to:       'mager@postmates.com',
    from:     email,
    subject:  '[ppack] A new message from ' + name,
    text:     message
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
