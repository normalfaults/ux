'use strict';

/**@ngInject*/
var UsersBoxDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/users/users_box.html',
    transclude: true,
    scope: {
      user: "="
    }
  };
};

module.exports = UsersBoxDirective;
