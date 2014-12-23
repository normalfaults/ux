'use strict';

var angular = require('angular');

var AuthenticationModule = angular.module('broker.cart', [])
  .controller('CartController', require('./cart_controller'))
  .service('CartService', require('./cart_service'))
  .config(require('./routes'));


module.exports = AuthenticationModule;
