var createError = require('http-errors');
var express = require('express');
var connect = require('connect')
var serveStatic = require('serve-static')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var vhost = require('vhost');

var indexRouter = require('./routes/index');
var mobileRouter = require('./routes/mobile');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



var mainapp = connect();
mainapp.use(require('connect-history-api-fallback')());
mainapp.use('/', indexRouter);
mainapp.use(serveStatic(path.join(__dirname, 'public')))
var mobileapp = connect()
mobileapp.use(require('connect-history-api-fallback')());
mobileapp.use('/', mobileRouter);
mobileapp.use(serveStatic(path.join(__dirname, 'public/mobile')))


app.use(vhost("m.wedives.com", mobileapp));
app.use(vhost("wedives.com", mainapp));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
