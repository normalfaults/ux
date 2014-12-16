'use strict';

require('angular-ui-router');
require('angular-animate');
require('angular-resource');
require('angular-bootstrap');
require('angular-gravatar');
require('angular-loading-bar');
require('angular-smart-table');
require('angucomplete');

var angular = require('angular');



var app = angular.module('broker', [
  "ui.router",
  "ngResource",
  "angular-loading-bar",
  "smart-table",
  'ngAnimate',
  "ui.gravatar",
  "angucomplete",
  "ui.bootstrap",
  require('./common').name,
  require('./base').name,
  require('./admin').name,
  require('./authentication').name,
  require('./cart').name,
  require('./projects').name,
  require('./products').name,
  require('./services').name,
  require('./marketplace').name,
  require('./applications').name,
  require('./bundles').name,
  require('./orders').name,
  require('./directives').name,
  require('./dashboard').name
])
  .run(require('./init'));
