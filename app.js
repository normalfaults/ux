"use strict";

var defaults = {
  'port': 5000,
  'apiBasePath': 'http://localhost:3000',
  'orgLogo': '/images/logo.png',
  'orgColor': '#0a498a'
};

var appVersion = '2.0.0';

var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var http = require('http');
var _ = require('underscore');
var winston = require('winston');
var compression = require('compression');
var app = express();
var fs = require('fs');

var appConfigPath = './public/appConfig.js';
var appVersionPath = './public/appVersion.js';

app.set('port', process.env.PORT || defaults.port);

app.use(compression({
  threshold: 512
}));
app.use(express.logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.set('views', path.join(__dirname, '/public/views'));
app.engine('html', ejs.renderFile);

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.all("/api/*", function (req, res) {
  res.send("Not found", 404);
});

var apiBasePath = defaults.apiBasePath;
if (process.env.API_BASE_PATH) {
  apiBasePath = process.env.API_BASE_PATH;
}

// Set the org Logo
var orgLogo = defaults.orgLogo;
if (process.env.ORG_LOGO) {
  orgLogo = process.env.ORG_LOGO;
}

// Set the org Color
var orgColor = defaults.orgColor;
if (process.env.ORG_COLOR) {
  orgColor = process.env.ORG_COLOR;
}

// Create the default contents of the file, if it does not exist
var appConfigContents = 'window.appConfig = {apiBasePath: "' + apiBasePath + '", orgLogo: "' + orgLogo + '", orgColor: "' + orgColor + '"};';
fs.exists(appConfigPath, function (exists) {
  if(!exists){
    fs.writeFileSync(appConfigPath, appConfigContents);
  }
});

// Create the default contents of the versions file, always remake it
var appVersionContents = 'window.appVersion = {ux: "' + appVersion + '"};';
fs.writeFileSync(appVersionPath, appVersionContents);

// Get all the public directories.
var dirs = fs.readdirSync(path.join(__dirname, 'public'));

//redirect all other routes to angular
app.get("*", function (req, res) {

  /**
   * We check to see if the url matches one of our internal urls
   * if it does, that means that it has not matched, so we return a
   * 404 here.  This allows us to return 404 and debug easier than
   * returning the original html and 200.
   */
  var url = req.originalUrl || req.url;
  _.any(dirs, function(dir) {
    if (url.match('^/' + dir)) {
      res.status(404).send('Not found');
      return;
    }
  });

  // If not allow url to pass through and return the bootstrap html.
  res.render("index.html");
});

//start the app
http.createServer(app).listen(app.get('port'), function () {
  winston.info('Express server listening on port ' + app.get('port'));
});
