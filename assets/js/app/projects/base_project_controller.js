'use strict';

/**@ngInject*/
var BaseProjectController = function() {

};

BaseProjectController.resolve = {
  /**@ngInject*/
  project: function(ProjectResource, $stateParams) {
    return ProjectResource.get({id: $stateParams.projectId}).$promise;
  },
  /**@ngInject*/
  products: function(ProductResource) {
    return ProductResource.query({"includes[]": ["cloud"]}).$promise;
  }
};

BaseProjectController.prototype = {

};

module.exports = BaseProjectController;
