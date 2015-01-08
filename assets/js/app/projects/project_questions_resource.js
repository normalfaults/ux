'use strict';

/**@ngInject*/
var ProjectQuestionsResource = function($resource, ApiResource) {
    return $resource(
      ApiResource('projectQuestions'), {id:'@id'}, {
        query: {
          method: 'GET',
          isArray: true
        }
      }
    );
};

module.exports = ProjectQuestionsResource;
