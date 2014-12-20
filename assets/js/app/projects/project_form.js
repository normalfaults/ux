'use strict';

/**@ngInject*/
function ProjectForm() {
    return {
        restrict: 'E',
        templateUrl: '/partials/projects/project-form.html',
        scope: {
            project: "=project",
            questions: "=questions",
            buttonLabel: '=buttonLabel',
            submitFunction: "&submitFunction"
        },
        controller: [ '$scope', function ($scope) {
            $scope.project.project_answers = $scope.project.project_answers || [];

            _.each($scope.questions, function(question){
                var existingAnswer = _.find($scope.project.project_answers, function(answer) {return answer.project_question_id === question.id});

                if (existingAnswer === undefined) {
                    $scope.project.project_answers.push({
                        project_question_id: question.id,
                        project_question: question,
                        project_question_name: 'project_question_' + question.id
                    });
                }
            });

            $scope.todayEndDate = function() {
                $scope.project.end_date = new Date();
            };

            $scope.todayEndDate();

            $scope.todayStartDate = function() {
                $scope.project.start_date = new Date();
            };

            $scope.todayStartDate();

            $scope.clearStartDate = function () {
                $scope.project.start_date = null;
            };

            $scope.clearEndDate = function () {
                $scope.project.end_date = null;
            };

            $scope.startDateOpened = false;
            $scope.endDateOpened = false;

            $scope.openStartDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.endDateOpened = false;
                $scope.startDateOpened = true;
            };

            $scope.openEndDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.startDateOpened = false;
                $scope.endDateOpened = true;
            };

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.formats = ['yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd-MMMM-yyyy' ];
            $scope.format = $scope.formats[0];
        }]
    };
}

module.exports = ProjectForm;