'use strict';

/**@ngInject*/
var ProjectQuestion = function($resource, ApiResource) {
    var projectQuestion = $resource(ApiResource('projectQuestions'), { id: '@id' });
    return projectQuestion;
};

module.exports = ProjectQuestion;