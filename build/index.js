'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _assemblerPipeline = require('./assembler/Pipeline');

console.log('hello');

function fromSteps() {
  for (var _len = arguments.length, steps = Array(_len), _key = 0; _key < _len; _key++) {
    steps[_key] = arguments[_key];
  }

  return new _assemblerPipeline.Pipeline(steps);
}

function src() {
  for (var _len2 = arguments.length, globs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    globs[_key2] = arguments[_key2];
  }

  return new _assemblerPipeline.Step(null, {}, { toString: function toString() {
      return 'src ' + globs;
    } });
}

exports['default'] = {
  Step: _assemblerPipeline.Step,
  Pipeline: _assemblerPipeline.Pipeline,
  fromSteps: fromSteps,
  src: src
};
module.exports = exports['default'];