'use strict';

require('core-js/features/array/for-each');

require('core-js/features/array/filter');

require('core-js/features/array/includes');

var _ci = require('./ci360.service');

var _ci2 = _interopRequireDefault(_ci);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var viewers = [];
  var view360Array = document.querySelectorAll('.cloudimage-360:not(.initialized)');

  [].slice.call(view360Array).forEach(function (container) {
    viewers.push(new _ci2.default(container));
  });

  window.CI360._viewers = viewers;
}

function destroy() {
  if (isNoViewers()) return;

  window.CI360._viewers.forEach(function (viewer) {
    viewer.destroy();
  });

  window.CI360._viewers = [];
}

function getActiveIndexByID(id) {
  if (isNoViewers()) return;

  var currentViewer = window.CI360._viewers.filter(function (viewer) {
    return viewer.id === id;
  })[0];

  return currentViewer && currentViewer.activeImage - 1;
}

function isNoViewers() {
  return !(window.CI360._viewers && window.CI360._viewers.length > 0);
}

window.CI360 = window.CI360 || {};
window.CI360.init = init;
window.CI360.destroy = destroy;
window.CI360.getActiveIndexByID = getActiveIndexByID;

if (!window.CI360.notInitOnLoad) {
  init();
}