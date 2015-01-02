'use strict';

/**@ngInject*/
var AdminSetting = function($resource, ApiResource) {
    return $resource(ApiResource('adminSettingById'), { id: '@id' }, {
        'update': { method:'PUT' }
    });
};

module.exports = AdminSetting;