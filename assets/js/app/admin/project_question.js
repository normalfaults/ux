'use strict';

/**@ngInject*/
var ProjectQuestion = function($resource, ApiResource) {
    var projectQuestion = $resource(ApiResource('projectQuestions'));
    return projectQuestion;
};

module.exports = ProjectQuestion;