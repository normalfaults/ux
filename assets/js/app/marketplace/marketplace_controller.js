'use strict';

var _ = require('lodash');

/**@ngInject*/
function MarketplaceController(products, categories) {
  var self = this;

  this.products = products;
  this.categories = categories;

  _.each(this.categories, function(category) {
    category.products = _.filter(self.products, {product_type_id: category.id});
  });
}

MarketplaceController.resolve = {};

module.exports = MarketplaceController;
