'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.Step = Step;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function Step(fn) {
  var _this = this;

  var deps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  if (!(this instanceof Step)) {
    return new Step(fn, deps, opts);
  }
  this.fn = fn;
  this.deps = deps;

  this.showSteps = function () {
    _this.log(_this.toString());
    _ramda2['default'].keys(_this.deps).forEach(function (key) {
      console.log(key);
      _this.deps[key].showSteps();
    });
  };

  this.log = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log.apply(console, ['step'].concat(args));
  };

  this.toString = opts.toString || function () {
    return 'step';
  };

  this.run = function () {};
}

var Pipeline = (function () {
  function Pipeline(steps) {
    _classCallCheck(this, Pipeline);

    this.steps = steps;
  }

  _createClass(Pipeline, [{
    key: 'add',
    value: function add(newSteps) {
      this.steps = _ramda2['default'].merge(this.steps, newSteps);
    }
  }, {
    key: 'log',
    value: function log() {
      for (var _len2 = arguments.length, message = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        message[_key2] = arguments[_key2];
      }

      console.log.apply(console, ['Inside a pipeline!'].concat(message));
    }
  }, {
    key: 'run',
    value: function run() {
      this.log('Running a pipeline', this.steps);
    }
  }, {
    key: 'showSteps',
    value: function showSteps() {
      this.log('Showing steps', _ramda2['default'].keys(this.steps));
    }
  }]);

  return Pipeline;
})();

exports.Pipeline = Pipeline;