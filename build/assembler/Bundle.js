"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bundle = function Bundle(inputs) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  _classCallCheck(this, Bundle);

  this.inputs = inputs;
  this.opts = opts;
};

exports["default"] = Bundle;
module.exports = exports["default"];