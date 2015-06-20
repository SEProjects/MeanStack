var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var marken= require('./routes/marken');
var ks= require('./routes/ks');
var users = require('./routes/users');
var sessions = require('./routes/sessions');
var auto= require('./routes/autos');
var aa= require('./routes/autoarten');
var rechnung= require('./routes/rechungen');
var app = express();
var cors = require('cors');

var multer  = require('multer')


app.use(multer({ dest: './uploads/'}));


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
global.urlforSoap = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration?wsdl';
global.urlforSoap2 = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration'


app.use('/users', users);
app.use('/session',sessions);
app.use('/autos',auto);
app.use('/marken',marken);
app.use('/ks',ks);
app.use('/aa',aa);
app.use('/rechnung',rechnung);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.jsonp({
      message: err.message,
      error: err
    });
  });

app.set('view engine', 'jade');
// production error handler
// no stacktraces leaked to user


module.exports = app;
