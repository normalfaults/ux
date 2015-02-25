'use strict';

/**@ngInject*/
function InitiallyNullAlwaysNull() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {},
    link: function(scope, el, attrs, ngModel) {
      var nullInitially = false;
      var unwatch = scope.$watch(function() {
        return ngModel.$modelValue;
      }, function init(value) {
        nullInitially = null === value;
        unwatch();
      });

      ngModel.$parsers.unshift(function toModel(input) {
        if (nullInitially && '' === input) {
          return null;
        }
        return input;
      });
    }
  };
}

module.exports = InitiallyNullAlwaysNull;
