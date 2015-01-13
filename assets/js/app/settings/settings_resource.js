'use strict';

/**@ngInject*/
var SettingsResource = function($resource, ApiResource) {
    return $resource(ApiResource('settingById'), { id: '@id' }, {
        'update': { method:'PUT' }
    });
};

module.exports = SettingsResource;