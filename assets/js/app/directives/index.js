'use strict';

var angular = require('angular');

require('angucomplete');

var DirectivesModule = angular.module('broker.directives', [])
  .directive('dropDown', require('./drop_down'))
  .directive('expandArrow', require('./expand_arrow'))
  .directive('setWidth', require('./set_width'))
  .directive('toggleSidebar', require('./toggle_sidebar'))
  .directive('fixBoxesHeight', require('./fix_boxes_height'))
  .directive('formInput', require('./form_input'))
  .directive('switchViewButtons', require('./switch_view_buttons'));

module.exports = DirectivesModule;
