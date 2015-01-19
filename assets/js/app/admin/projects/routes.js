'use strict';

var ProjectQuestionsData = require('./project_questions_controller').resolve;
var ProjectQuestionData = require('./edit_project_question_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
    $stateProvider
      .state('base.admin.projects', {
          url: '/projects',
          abstract: true,
          template: '<div class="projects-admin" ui-view></div>',
          controller: 'ProjectsAdminController as productsAdminCtrl'
      })
      .state('base.admin.projects.project_questions', {
          url: '/questions',
          templateUrl: "/partials/admin/projects/project_questions.html",
          controller: 'ProjectQuestionsController as projectQuestion',
          resolve: ProjectQuestionsData
      })
      .state('base.admin.projects.new_project_questions', {
          url: '/questions/new',
          templateUrl: "/partials/admin/projects/project_question.html",
          controller: 'NewProjectQuestionController as newProjectQuestion'
      })
      .state('base.admin.projects.edit_project_questions', {
          url: '/questions/:id',
          templateUrl: "/partials/admin/projects/project_question.html",
          controller: 'EditProjectQuestionController as editProjectQuestion',
          resolve: ProjectQuestionData
      });
};