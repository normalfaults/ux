'use strict';

var angular = require('angular');

var AdminSettingsModule = angular.module('broker.admin.settings', [])
    .controller('EditSettingsController', require('./edit_settings_controller'))
    .controller('SettingsController', require('./settings_controller'))
    .factory('AdminSetting', require('./admin_setting'))
    .config(require('./routes'));

module.exports = AdminSettingsModule;