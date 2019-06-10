var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var ayudarRouter = require('./routes/ayudar');
var talleresRouter = require('./routes/talleres');
var programasRouter = require('./routes/programas');
var devsRouter = require('./routes/devs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/ayudar', ayudarRouter);
app.use('/talleres', talleresRouter);
app.use('/programas', programasRouter);
app.use('/developers', devsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  console.log('I get an Error')
  // render the error page
  res.status(err.status || 500);
  res.render('error404');
});

module.exports = app;