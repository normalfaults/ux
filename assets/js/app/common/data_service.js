'use strict';

/**@ngInject*/
function DataService($resource, ApiResource) {
  return $resource(ApiResource(), {}, {
    getProjectQuestions: {
      method: "GET",
      isArray: true,
      url: ApiResource('projectQuestions')
    },
    createProject: {
      method: "POST",
      url: ApiResource('createProject')
    },
    getManageValues: {
      method: "GET",
      url: ApiResource('manageValues')
    },
    getMarketplaceValues: {
      method: "GET",
      url: ApiResource('marketplaceValues')
    },
    getAlerts: {
      method: "GET",
      isArray: true,
      url: ApiResource('alerts')
    }
  });
}

module.exports = DataService;