'use strict';

/**@ngInject*/
function DashboardController(alerts, projects) {
  this.alerts = alerts;
  this.projects = projects;
}


DashboardController.resolve = {

};

module.exports = DashboardController;