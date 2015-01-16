'use strict';

function QuestionInputDirective() {
  return {
    replace: true,
    restrict: 'E',
    require: ['^form'],
    scope: {
      question: '&'
    },
    controller: 'QuestionInputController',
    controllerAs: 'qiCtrl',
    bindToController: true,
    templateUrl: '/partials/common/question_input.html',
    link: function(scope, el, attrs, ctrls) {
      scope.qiCtrl.init(scope, el, attrs, ctrls);
    }
  }
}

module.exports = QuestionInput;
