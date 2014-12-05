'use strict';

var angular = require('angular');

var DirectivesModule = angular.module('broker.directives', [])
  .directive('dropDown', require('./drop_down'))
  .directive('expandArrow', require('./expand_arrow'))
  .directive('fixSidebar', require('./fix_sidebar'))
  .directive('setWidth', require('./set_width'))
  .directive('toggleSidebar', require('./toggle_sidebar'))
  .directive('fixBoxesHeight', require('./fix_boxes_height'))
  .directive('ordersTable', require('./orders_table'))
  .directive('serviceBox', require('./service_box'))
  .directive('switchViewButtons', require('./switch_view_buttons'))
  .directive('marketplaceItems', require('./marketplace_items'))
  .directive('animateKnob', require('./animate_knob'));

module.exports = DirectivesModule;
