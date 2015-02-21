'use strict';

var _ = require('lodash');

/**@ngInject*/
var SettingsResource = function($resource, apiResource) {
    return $resource(apiResource('settingById'), { id: '@id', hid: '@hid'}, {
        'update': { method:'PUT' },
        'get': {
            method: 'GET',
            url: apiResource('settingsByHid'),
            isArray: true,
            transformResponse: function(data, headersGetter) {

                data = JSON.parse(data);

                var response = [];

                var loopCount = 0;
                _.each(data.setting_fields, function(settingField, index) {
                    loopCount++;
                    // If this is an even loop, we know it must be the url value.
                    // Since we have already grabbed this value by a look ahead on the
                    // odd loop, we skip it here.
                    if (loopCount % 2 === 0) {
                        return;
                    }

                    // Get the link name from this iteration, and then look ahead
                    // to the next item to get the value.
                    var linkName = settingField.value;
                    var linkUrl = data.setting_fields[index + 1].value;

                    if (linkName && linkUrl) {
                        response.push({
                            name: linkName,
                            url: linkUrl
                        });
                    }

                });

                return response;
            }
        }
    });
};

module.exports = SettingsResource;
