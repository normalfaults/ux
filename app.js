/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */
/**
 * This is the startup script for API and frontend pages.
 *
 * @version 1.0
 * @author Sky_
 */
"use strict";

var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var http = require('http');
var _ = require('underscore');
var winston = require('winston');
var routes = require("./api/routes");
var app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.set('views', path.join(__dirname, '/angular/views'));
app.engine('html', ejs.renderFile);

app.use(express.static(path.join(__dirname, 'angular')));
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

//load all routes
_.each(_.keys(routes), function (route) {
    var value = routes[route],
        httpMethod = route.split(' ').shift().toLowerCase(),
        url = route.split(' ').pop(),
        action = value.action || value,
        controllerName = action.split('#').shift(),
        controllerMethod = action.split('#').pop(),
        controller = require('./api/controllers/' + controllerName);
    app[httpMethod](url, function (req, res, next) {
        setTimeout(function () {
            controller[controllerMethod](req, res, next);
        }, process.env.FAKE_TIMEOUT || 500);
    });
});

app.all("/api/*", function (req, res) {
    res.send("Not found", 404);
});

//redirect all other routes to angular
app.get("*", function (req, res) {
    res.render("index.html");
});

//start the app
http.createServer(app).listen(app.get('port'), function () {
    winston.info('Express server listening on port ' + app.get('port'));
});
