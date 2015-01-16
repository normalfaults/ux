'use strict';

var _ = require('lodash');

/**@ngInject*/
var LeftSidebarController = function($state, currentUser, projects, AuthService) {
  this.currentUser = currentUser;
  this.projects = projects;

  this.AuthService = AuthService;
  this.$state = $state;
};

LeftSidebarController.prototype = {

  logout: function() {
    return this.AuthService.logout();
  }
};

module.exports = LeftSidebarController;

