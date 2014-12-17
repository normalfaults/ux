'use strict';

var ProjectQuestionData = require('./project_questions_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
    $stateProvider
        .state('base.admin.projects', {
            url: '/products',
            abstract: true,
            template: '<div class="projects-admin" ui-view></div>',
            controller: 'ProjectsAdminController as productsAdminCtrl'
        })
        .state('base.admin.projects.project_questions', {
            url: '/questions',
            templateUrl: "/partials/admin/projects/project_questions.html",
            controller: 'ProjectQuestionsController as projectQuestion',
            resolve: ProjectQuestionData
        })
        .state('base.admin.projects.new_project_questions', {
            url: '/questions/new',
            templateUrl: "/partials/admin/projects/new_project_question.html",
            controller: 'NewProjectQuestionController as newProjectQuestion'
        })
}