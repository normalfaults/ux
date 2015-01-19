'use strict';

/**@ngInject*/
var ProjectQuestion = function($resource, apiResource) {
    var projectQuestion = $resource(apiResource('projectQuestions'), { id: '@id' }, {
        'update': { method:'PUT' }
    });
    return projectQuestion;
};

module.exports = ProjectQuestion;