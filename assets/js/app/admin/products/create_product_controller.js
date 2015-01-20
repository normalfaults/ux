'use strict';

var _ = require('lodash');

/**@ngInject*/
function CreateProductController(product, categories, $stateParams) {
  this.product = product;
  this.productType = _.find(categories, {id: $stateParams.product_type_id});

  this.product.answers = _.map(this.productType.questions, function(question) {
    return {
      answer: question.default,
      product_type_question_id: question.id,
      question: question
    };
  });
}

CreateProductController.resolve = {
  /**@ngInject*/
  product: function(ProductsResource, $stateParams) {
    return new ProductsResource($stateParams);
  }
};

module.exports = CreateProductController;


