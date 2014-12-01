/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */
"use strict";

/**
 * Represents controller for mock data.
 * @version 1.0
 * @author Sky_
 */

var _ = require("underscore");

// solution entities
var solutions = {
    1: require("../data/solutions/1.json"),
    2: require("../data/solutions/2.json"),
    3: require("../data/solutions/3.json")
};

// project entities
var projects = {
    1: require("../data/projects/1.json"),
    2: require("../data/projects/2.json"),
    3: require("../data/projects/3.json")
};

// service entities
var services = {
    1: require("../data/services/1.json"),
    2: require("../data/services/2.json"),
    3: require("../data/services/3.json"),
    4: require("../data/services/4.json"),
    5: require("../data/services/5.json"),
    6: require("../data/services/6.json"),
    7: require("../data/services/7.json"),
    8: require("../data/services/8.json"),
    9: require("../data/services/9.json"),
    10: require("../data/services/10.json"),
    11: require("../data/services/11.json"),
    12: require("../data/services/12.json"),
    13: require("../data/services/13.json"),
    14: require("../data/services/14.json"),
    15: require("../data/services/15.json")
};

// application entities
var applications = {
    1: require("../data/applications/1.json"),
    2: require("../data/applications/2.json"),
    3: require("../data/applications/3.json"),
    4: require("../data/applications/4.json")
};


// bundle entities
var bundles = {
    1: require("../data/bundles/1.json"),
    2: require("../data/bundles/2.json"),
    3: require("../data/bundles/3.json")
};


// all data displayed in header
var header = require("../data/header.json");

// dropdown values for new project
var projectQuestions = require("../data/project_questions.json");

// dropdown values for manage view
var manageValues = require("../data/manage.json");

// values for marketplace
var marketplaceValues = require("../data/marketplace.json");

// alerts for dashboard and manage
var alerts = require("../data/alerts.json");


// alerts with x icon for dashboard
var alertPopup = require("../data/alert-popup.json");

var staffSignIn = require("../data/staff/sign_in.json");

/**
 * Populate references.
 * @param {Object} target the elements to populate (hashmap id to element)
 * @param {String} fieldName the name of the field to be populated
 * @param {Object} source the referenced elements (hashmap id to element)
 * @private
 */
function _populate(target, fieldName, source) {
    _.each(target, function (item) {
        item[fieldName] = _.map(item[fieldName], function (id) {
            return source[id];
        });
    });
}

_populate(solutions, "projects", projects);
_populate(solutions, "services", services);
_populate(solutions, "applications", applications);
_populate(projects, "services", services);
_populate(applications, "services", services);

/**
 * Return a json object to the response.
 * @param {Number} item the item to return
 * @param {Object} res the http response
 * @param {Function} next the callback function executed if error occurs
 * @private
 */
function _returnItem(item, res, next) {
    if (!item) {
        next(new Error("not found"));
    } else {
        res.json(item);
    }
}

/**
 * Get a solution.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getSolution(req, res, next) {
    _returnItem(solutions[req.params.id], res, next);
}

/**
 * Post a project.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function createProject(req, res, next) {
    res.json(req.params.project);
}

/**
 * Get a project.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getProject(req, res, next) {
    _returnItem(projects[req.params.id], res, next);
}

/**
 * Get all solutions.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getSolutions(req, res, next) {
    res.json(_.values(solutions));
}

/**
 * Get all projects.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getProjects(req, res, next) {
    res.json(_.values(projects));
}

/**
 * Get all applications.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getApplications(req, res, next) {
    res.json(_.values(applications));
}

/**
 * Get all bundles.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getBundles(req, res, next) {
    res.json(_.values(bundles));
}

/**
 * Get all services.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getServices(req, res, next) {
    res.json(_.values(services));
}

/**
 * Get data displayed in header.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getHeader(req, res, next) {
    res.json(header);
}

/**
 * Get dropdown values for new project.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getProjectQuestions(req, res, next) {
    res.json(projectQuestions);
}

/**
 * Get dropdown values for manage view.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getManageValues(req, res, next) {
    res.json(manageValues);
}

/**
 * Get values for marketplace view.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getMarketplaceValues(req, res, next) {
    res.json(marketplaceValues);
}

/**
 * Get a project.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getService(req, res, next) {
    var item = services[req.params.id];
    if (!item) {
        next(new Error("not found"));
    } else {
        item = JSON.parse(JSON.stringify(item));
        _populate([item], "similarSolutions", services);
        res.json(item);
    }
}

/**
 * Get recent solutions.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getRecentSolutions(req, res, next) {
    res.json(projects["1"].services);
}

/**
 * Get recent users.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getRecentUsers(req, res, next) {
    res.json(projects["1"].users);
}

/**
 * Get recent orders.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getRecentOrders(req, res, next) {
    res.json(projects["1"].orderHistory);
}


/**
 * Get alerts.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getAlerts(req, res, next) {
    res.json(alerts);
}

/**
 * Get alert popup for dashboard.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function getAlertPopup(req, res, next) {
    res.json(alertPopup);
}

/**
 * Get staff sign in.
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 */
function postStaffSignIn(req, res, next) {
  res.json(staffSignIn);
}

module.exports = {
    getSolution: getSolution,
    createProject: createProject,
    getProject: getProject,
    getSolutions: getSolutions,
    getProjects: getProjects,
    getHeader: getHeader,
    getApplications: getApplications,
    getBundles: getBundles,
    getProjectQuestions: getProjectQuestions,
    getManageValues: getManageValues,
    getService: getService,
    getMarketplaceValues: getMarketplaceValues,
    getRecentSolutions: getRecentSolutions,
    getRecentUsers: getRecentUsers,
    getRecentOrders: getRecentOrders,
    getServices: getServices,
    getAlerts: getAlerts,
    getAlertPopup: getAlertPopup,
    postStaffSignIn: postStaffSignIn
};