'use strict';

/**@ngInject*/
var ProjectQuestion = function($resource, ApiResource) {
    var projectQuestion = $resource(ApiResource('projectQuestions'), { id: '@id' }, {
        'update': { method:'PUT' }
    });
    return projectQuestion;
};

module.exports = ProjectQuestion;