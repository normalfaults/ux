'use strict';

require('angular-ui-router');
require('angular-animate');
require('angular-resource');
require('angular-bootstrap');
require('angular-gravatar');
require('angular-loading-bar');

var angular = require('angular');

var app = angular.module('broker', [
  "ui.router",
  "ngResource",
  "angular-loading-bar",
  'ngAnimate',
  "ui.gravatar",
  "ui.bootstrap",
  require('./common').name,
  require('./controllers').name,
  require('./directives').name,
  require('./factories').name
])
  // These are temporary until the app is fully refactored
  // TODO refactor into modules
  .config(require('./routes')).run(require('./init'));
