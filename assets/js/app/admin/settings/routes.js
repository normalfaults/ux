'use strict';

var SettingsData = require('./edit_settings_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
    $stateProvider
        .state('base.admin.settings', {
            url: '/settings',
            abstract: true,
            template: '<div class="products-admin" ui-view></div>',
            controller: 'SettingsController as settings'
        })
        .state('base.admin.settings.edit', {
            url: '/edit',
            controller: 'EditSettingsController as editSettings',
            templateUrl: "/partials/admin/settings/edit.html",
            resolve: SettingsData
        })
}