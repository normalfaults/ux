'use strict';

/**@ngInject*/
function DataService($resource, ApiResource) {
  return $resource(ApiResource(), {}, {
    getProjectQuestions: {
      method: "GET",
      isArray: true,
      url: ApiResource('projectQuestions')
    },
    getManageValues: {
      method: "GET",
      url: ApiResource('manageValues')
    },
    getMarketplaceValues: {
      method: "GET",
      url: ApiResource('marketplaceValues')
    }
  });
}

module.exports = DataService;
