'use strict';

var angular = require('angular');

var AuthenticationModule = angular.module('broker.cart', [])
  .controller('CartController', require('./cart_controller'))
  .service('Cart', require('./cart'))
  .config(require('./routes'));


module.exports = AuthenticationModule;
