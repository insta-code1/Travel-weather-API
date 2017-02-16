let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let ejs = require('ejs');

let routes = require('./routes');
let port = process.env.PORT || 3000;

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(pathi.join(__dirname, 'public')));

app.use('/', routes);

app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/public/index.html'));
});

// catch 404 and forward to error handler

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

let server = app.listen(port, () => {
  let host = 'localhost';
  console.log('App listening at http://%s:%s', host, port);
});

