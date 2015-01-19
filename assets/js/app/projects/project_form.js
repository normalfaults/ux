'use strict';

var _ = require('lodash');

/**@ngInject*/
function ProjectForm() {
    return {
        restrict: 'E',
        templateUrl: '/partials/projects/project_form.html',
        scope: {
            project: "=project",
            questions: "=questions",
            buttonLabel: '=buttonLabel',
            submitFunction: "&submitFunction"
        },
        controller: [ '$scope', function ($scope) {
            $scope.project.project_answers = $scope.project.project_answers || [];

            _.each($scope.questions, function(question){
                var existingAnswer = _.find($scope.project.project_answers, function(answer) {return answer.project_question_id === question.id;});

                if (existingAnswer === undefined) {
                    $scope.project.project_answers.push({
                        project_question_id: question.id,
                        project_question: question,
                        project_question_name: 'project_question_' + question.id
                    });
                }
            });

            $scope.startDateOpened = false;
            $scope.endDateOpened = false;
            $scope.answerDateOpened = [];

            $scope.openStartDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.endDateOpened = false;
                $scope.startDateOpened = true;
                $scope.answerDateOpened = [];
            };

            $scope.openEndDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.startDateOpened = false;
                $scope.endDateOpened = true;
                $scope.answerDateOpened = [];
            };

            $scope.openAnswerDate = function($event, index) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.startDateOpened = false;
                $scope.endDateOpened = false;
                $scope.answerDateOpened[index] = [];
                $scope.answerDateOpened[index] = true;
            };

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.format = 'yyyy-MM-dd';
        }]
    };
}

module.exports = ProjectForm;