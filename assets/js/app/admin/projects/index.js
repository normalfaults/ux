'use strict';

var angular = require('angular');

var ProjectsAdminModule = angular.module('broker.admin.projects', [])
    .controller('ProjectsAdminController', require('./projects_admin_controller'))
    .controller('ProjectQuestionsController', require('./project_questions_controller'))
    .controller('NewProjectQuestionController', require('./new_project_question_controller'))
    .controller('EditProjectQuestionController', require('./edit_project_question_controller'))
    .directive('projectQuestionForm', require('./project_question_form'))
    .factory('ProjectQuestion', require('./project_question'))
    .config(require('./routes'));

module.exports = ProjectsAdminModule;