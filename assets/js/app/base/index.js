'use strict';

var angular = require('angular');

var BaseModule = angular.module('broker.base', [])
  .controller('BaseController', require('./base_controller'))
  .controller('RootController', require('./root_controller'))
  .controller('HeaderController', require('./header_controller'))
  .controller('LeftSidebarController', require('./leftsidebar_controller'))
  .controller('FooterController', require('./footer_controller'))
  .config(require('./routes'));

module.exports = BaseModule;
