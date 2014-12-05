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
  require('./base').name,
  require('./authentication').name,
  require('./solutions').name,
  require('./projects').name,
  require('./services').name,
  require('./marketplace').name,
  require('./applications').name,
  require('./bundles').name,
  require('./orders').name,
  require('./directives').name
])
  .run(require('./init'));
