'use strict';

var _ = require('lodash');

/**@ngInject*/
var LeftSidebarController = function(currentUser, projects, AuthService) {
  this.currentUser = currentUser;
  this.projects = projects;

  this.AuthService = AuthService;
};

LeftSidebarController.prototype = {

  logout: function() {
    return this.AuthService.logout();
  }
};

module.exports = LeftSidebarController;

