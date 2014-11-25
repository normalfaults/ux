/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */
/**
 * This module contains the configuration for API routes.
 *
 * @version 1.0
 * @author Sky_
 */
"use strict";

module.exports = {
    "GET /api/solutions": "Mocks#getSolutions",
    "GET /api/solutions/:id": "Mocks#getSolution",
    "GET /api/projectValues": "Mocks#getProjectValues",
    "GET /api/manageValues": "Mocks#getManageValues",
    "GET /api/marketplaceValues": "Mocks#getMarketplaceValues",
    "GET /api/solutions/recent": "Mocks#getRecentSolutions",
    "GET /api/users/recent": "Mocks#getRecentUsers",
    "GET /api/orders/recent": "Mocks#getRecentOrders",
    "GET /api/projects": "Mocks#getProjects",
    "GET /api/projects/:id": "Mocks#getProject",
    "GET /api/services/:id": "Mocks#getService",
    "GET /api/services": "Mocks#getServices",
    "GET /api/applications": "Mocks#getApplications",
    "GET /api/bundles": "Mocks#getBundles",
    "GET /api/header": "Mocks#getHeader",
    "GET /api/alerts": "Mocks#getAlerts",
    "GET /api/alertPopup": "Mocks#getAlertPopup",
    "POST /api/staff/sign_in": "Mocks#postStaffSignIn"
};