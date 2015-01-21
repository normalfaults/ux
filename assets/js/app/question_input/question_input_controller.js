'use strict';

/**@ngInject*/
function QuestionInputController() {
  var self = this;

  this.init = function(scope, el, attrs, required) {
  };

  this.hasError = function(validation) {
    return self.form.hasError(self.fieldName(), validation);
  };

  this.fieldId = function() {
    return 'question-' + self.question.id;
  };

  // Id's may need to be different than names at some point
  this.fieldName = function() {
    return self.fieldId();
  };
}

module.exports = QuestionInputController;
