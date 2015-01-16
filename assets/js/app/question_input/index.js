'use strict';

var angular = require('angular');

var QuestionInputModule = angular.module('broker.question_input', [])
  .controller('QuestionInputController', require('./question_input_controller'))
  .directive('QuestionInput', require('./question_input_controller'));

module.exports = QuestionInputModule;
