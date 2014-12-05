'use strict';

/**@ngInject*/
function ServiceBox($templateCache) {
  return {
    restrict: 'E',
    scope: {
      service: "="
    },
    templateUrl: '/partials/common/service-box.html'
  };
}

module.exports = ServiceBox;
