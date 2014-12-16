'use strict';

var _ = require('underscore');
var BaseData = require('./base_controller').resolve;
var HeaderData = require('./header_controller').resolve;

var AllData = _.extend({}, BaseData, HeaderData);

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider.state('root', {
    url: "/",
    data: {
      authorizedRoles: [USER_ROLES.all]
    },
    controller: 'RootController'
  }).state('base', {
    abstract: true,
    templateUrl: "/partials/base.html",
    data: {
      authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
    },
    resolve: AllData,
    controller: "BaseController as baseCtrl"
  }).state('publicbase', {
    abstract: true,
    templateUrl: "/partials/base.html",
    data: {
      authorizedRoles: [USER_ROLES.all]
    }
  });
};
