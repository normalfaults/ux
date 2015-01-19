'use strict';

var _ = require('lodash');

/**@ngInject*/
function ShowProductController(products, categories, $stateParams) {
  var self = this;

  this.product = _.find(products, {id: $stateParams.id});
  this.productType = _.find(categories, {id: this.product.product_type_id});

  _.each(this.product.answers, function(answer) {
    answer.question = _.find(self.productType.questions, {id: answer.product_type_question_id})
  });
}

ShowProductController.resolve = {
  ///**@ngInject*/
  //product: function(products, $stateParams) {
  //  return _.find(products, {id: $stateParams.id});
  //  //return ProductResource.get({id: $stateParams.id, 'includes[]': ['product_type', 'answers']}).$promise;
  //}
};

module.exports = ShowProductController;
