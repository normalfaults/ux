'use strict';

var _ = require('lodash');

/**@ngInject*/
function EditProductController(product, categories) {
  var self = this;

  this.product = product;
  this.productType = _.find(categories, {id: product.product_type_id});

  _.each(this.product.answers, function(answer) {
    answer.question = _.find(self.productType.questions, {id: answer.product_type_question_id});
  });
}

EditProductController.resolve = {
  /**@ngInject*/
  product: function(ProductsResource, $stateParams) {
    return ProductsResource.get({id: $stateParams.id, 'includes[]': ['answers']}).$promise;
  }
};

module.exports = EditProductController;

