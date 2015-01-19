'use strict';

var angular = require('angular');

var SettingsModule = angular.module('broker.settings', [])
    .factory('SettingsResource', require('./settings_resource'));

module.exports = SettingsModule;