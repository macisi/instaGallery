/**
 * @author: vincent
 * @date: 2014/7/21
 */
'use strict';
var express = require('express');
var app = express();
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var site = require('./routes/site');


// config
app.use(logger('dev'));
app.use(cookieParser('vincent'));
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.engine('jade', require('jade').__express);

// general

app.get(/^\/(home|user|post)\/?.*$/, site.index);
app.get('/', site.index);


app.listen(80);