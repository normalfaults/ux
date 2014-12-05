'use strict';

/**@ngInject*/
function MarketplaceItems($templateCache) {
  return {
    restrict: 'E',
    templateUrl: '/partials/common/marketplace-items.html',
    transclude: true,
    scope: {
      items: "="
    },
    link: function(scope) {
      scope.tab = "featured";
    }
  };
}

module.exports = MarketplaceItems;
