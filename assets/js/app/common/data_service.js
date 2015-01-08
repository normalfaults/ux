'use strict';

/**@ngInject*/
function DataService($resource, ApiResource) {
  return $resource(ApiResource(), {}, {
    getMarketplaceValues: {
      method: "GET",
      url: ApiResource('marketplaceValues')
    }
  });
}

module.exports = DataService;
