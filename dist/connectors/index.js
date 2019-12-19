(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./connectField", "./connectForm", "./withForm"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./connectField"), require("./connectForm"), require("./withForm"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.connectField, global.connectForm, global.withForm);
    global.index = mod.exports;
  }
})(this, function (exports, _connectField2, _connectForm2, _withForm2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.withForm = exports.connectForm = exports.connectField = undefined;

  var _connectField3 = _interopRequireDefault(_connectField2);

  var _connectForm3 = _interopRequireDefault(_connectForm2);

  var _withForm3 = _interopRequireDefault(_withForm2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.connectField = _connectField3.default;
  exports.connectForm = _connectForm3.default;
  exports.withForm = _withForm3.default;
});