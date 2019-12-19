(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.utils);
    global.connectField = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = connectField;

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

  function connectField(ComposedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(Field, _Component);

      function Field() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Field);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
          var value = (0, _utils.getEventValue)(e, _this.props);
          if (typeof _this.props.onChange === "function") {
            _this.props.onChange(e);
          }
          _this.actions.changeField(_this.props.name, value);
        }, _this.handleFocus = function (e) {
          if (typeof _this.props.onFocus === "function") {
            _this.props.onFocus(e);
          }
          _this.actions.focusField(_this.props.name);
        }, _this.handleBlur = function (e) {
          if (typeof _this.props.onBlur === "function") {
            _this.props.onBlur(e);
          }
          _this.actions.blurField(_this.props.name);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Field, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          this.actions.registerField(this.props.name, this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.actions.unregisterField(this.props.name, this.props);
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.name !== this.props.name) {
            this.actions.unregisterField(this.props.name, this.props);
            this.actions.registerField(nextProps.name, nextProps);
          }
          if (!(0, _utils.isEqual)(nextProps.initialValue, this.props.initialValue) || nextProps.initialChecked !== this.props.initialChecked) {
            this.actions.resetField(nextProps.name, nextProps);
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
          var nextForm = nextContext._formState;
          var nextField = nextForm.fields[nextProps.name];
          if (!this.field) return true;
          return !(0, _utils.isEqual)(nextProps, this.props) || !(0, _utils.isEqual)(nextField, this.field) || !(0, _utils.isEqual)(nextForm, this.form);
        }
      }, {
        key: "render",
        value: function render() {
          if (!this.field) return null;

          var _props = this.props,
              initialValue = _props.initialValue,
              initialChecked = _props.initialChecked,
              validators = _props.validators,
              passProps = _objectWithoutProperties(_props, ["initialValue", "initialChecked", "validators"]);

          return _react2.default.createElement(ComposedComponent, _extends({}, passProps, this.field, {
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            checked: this.checked,
            value: this.value,
            form: this.form
          }));
        }
      }, {
        key: "actions",
        get: function get() {
          return this.context._formActions;
        }
      }, {
        key: "form",
        get: function get() {
          return this.context._formState;
        }
      }, {
        key: "field",
        get: function get() {
          return this.form.fields[this.props.name];
        }
      }, {
        key: "value",
        get: function get() {
          if (this.props.type === "radio" || this.props.type === "checkbox") {
            if (this.props.value === undefined) {
              return true;
            }
            return this.props.value;
          }
          if (this.props.type === "text" || this.props.type === "email" || this.props.type === "password") {
            return this.field.value || "";
          }
          return this.field.value;
        }
      }, {
        key: "checked",
        get: function get() {
          if (this.props.type === "radio" || this.props.type === "checkbox") {
            if (Array.isArray(this.field.value)) {
              return this.field.value.indexOf(this.value) > -1;
            } else {
              return this.field.value === this.value;
            }
          }
        }
      }]);

      return Field;
    }(_react.Component), _class.displayName = "connectField(" + (ComposedComponent.displayName || "") + ")", _class.contextTypes = {
      _formState: _propTypes2.default.object.isRequired,
      _formActions: _propTypes2.default.object.isRequired
    }, _class.propTypes = {
      name: _propTypes2.default.string.isRequired,
      type: _propTypes2.default.string.isRequired,
      validators: _propTypes2.default.array,
      onChange: _propTypes2.default.func,
      onFocus: _propTypes2.default.func,
      onBlur: _propTypes2.default.func
    }, _class.defaultProps = {
      validators: []
    }, _temp2;
  }
});