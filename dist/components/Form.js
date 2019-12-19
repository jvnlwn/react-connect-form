(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../connectors"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../connectors"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.connectors);
    global.Form = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _connectors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Form = function (_PureComponent) {
    _inherits(Form, _PureComponent);

    function Form() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Form);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
        // Prevent default <form> onSubmit behavior. Use <Submit> instead.
        if (e && typeof e.preventDefault === "function") {
          e.preventDefault();
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Form, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            render = _props.render,
            component = _props.component,
            passProps = _objectWithoutProperties(_props, ["render", "component"]);

        var onSubmit = this.handleSubmit;
        if (typeof render === "function") {
          return render(_extends({}, passProps, { onSubmit: onSubmit }));
        } else if (typeof component === "string") {
          var submitSuccess = passProps.submitSuccess,
              submitFailure = passProps.submitFailure,
              submitting = passProps.submitting,
              pristine = passProps.pristine,
              focused = passProps.focused,
              touched = passProps.touched,
              errors = passProps.errors,
              valid = passProps.valid,
              value = passProps.value,
              fields = passProps.fields,
              nested = passProps.nested,
              count = passProps.count,
              validated = passProps.validated,
              validating = passProps.validating,
              htmlProps = _objectWithoutProperties(passProps, ["submitSuccess", "submitFailure", "submitting", "pristine", "focused", "touched", "errors", "valid", "value", "fields", "nested", "count", "validated", "validating"]);

          var element = nested ? "div" : component;
          return _react2.default.createElement(element, _extends({}, htmlProps, { onSubmit: onSubmit }));
        } else if (component) {
          return _react2.default.createElement(component, passProps);
        } else {
          return null;
        }
      }
    }]);

    return Form;
  }(_react.PureComponent);

  Form.displayName = "Form";
  Form.propTypes = {
    render: _propTypes2.default.func,
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    noValidate: _propTypes2.default.bool,
    autoComplete: _propTypes2.default.oneOf(["on", "off"])
  };
  Form.defaultProps = {
    component: "form",
    noValidate: true
  };
  exports.default = (0, _connectors.connectForm)(Form);
});