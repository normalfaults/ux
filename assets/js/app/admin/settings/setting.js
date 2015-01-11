'use strict';

/**@ngInject*/
var Setting = function($resource, ApiResource) {
    return $resource(ApiResource('settingById'), { id: '@id' }, {
        'update': { method:'PUT' }
    });
};

module.exports = Setting;