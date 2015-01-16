'use strict';

/**@ngInject*/
function QuestionInputController() {
  var self = this;

  this.init = function(scope, el, attrs, required) {
    self.form = required[0];
    self.model = attrs.ngModel;
  };

  this.hasError = function(validation) {
    // Only show validation errors on submit; Avoids angulars hasty error messaging
    if (validation) {
      return self.formSubmitted && self.form[self.fieldName()].$error[validation];
    }
    return self.formSubmitted && self.form[self.fieldName()].$invalid;
  }

  this.fieldId = function() {
    return 'question-' + self.question.id;
  };

  // Id's may need to be different than names at some point
  this.fieldName = function() {
    return self.fieldId();
  };
}

module.exports = QuestionInputController;
