const express = require('express'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    es6renderer = require('express-es6-template-engine');

    indexRouter = require('./routes/indexRoute'),
    successRouter = require('./routes/successRoute'),
    v2Router = require('./routes/v2Route')

    app = express();

app.engine('html', es6renderer);
app.set('views','./views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));



app.use('/', indexRouter);
app.use('/success', successRouter);
app.use('/v2',v2Router);

module.exports = app;
