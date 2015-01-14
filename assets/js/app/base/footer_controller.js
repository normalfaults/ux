'use strict';

var _ = require('lodash');

/**@ngInject*/
var FooterController = function(footerLinks) {

  this.footerLinks = footerLinks;
};

FooterController.resolve = {
  /**@ngInject*/
  footerLinks: function(SettingsResource) {
    return SettingsResource.get({name: 'Footer Links'}).$promise;
  }
};

FooterController.prototype = {

};

module.exports = FooterController;



