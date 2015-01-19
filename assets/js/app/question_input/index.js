'use strict';

var angular = require('angular');

var QuestionInputModule = angular.module('broker.question_input', [])
  .controller('QuestionInputController', require('./question_input_controller'))
  .directive('questionInput', require('./question_input_directive'));

module.exports = QuestionInputModule;
