"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by codeforcoffee on 11/2/18.
 */
var SimpleState =
/*#__PURE__*/
function () {
  /**
   * constructor
   * @param {*} initialState
   */
  function SimpleState() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SimpleState);

    _defineProperty(this, "appStore", {
      state: undefined
    });

    this.appStore = {
      state: initialState
    };
    this.initialState = initialState;
  }
  /**
   * Returns initial state
   */


  _createClass(SimpleState, [{
    key: "getInitialState",
    value: function getInitialState() {
      return _objectSpread({}, this.initialState);
    }
    /**
     * Update the store. MergeArrays is true by default.
     * @param {*} newAttributes
     * @param {Boolean} mergeArrays
     */

  }, {
    key: "updateStore",
    value: function updateStore() {
      var _this = this;

      var newAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var mergeArrays = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var currentState = this.appStore;

      var existingArrays = function existingArrays() {
        var arraysInState = Object.keys(_this.appStore.state).map(function (key) {
          if (Array.isArray(_this.appStore.state[key])) return key;
        });
        var arraysInNextState = Object.keys(newAttributes).map(function (key) {
          if (Array.isArray(newAttributes[key])) return key;
        });
        var result = arraysInState.filter(function (key) {
          return arraysInNextState.includes(key);
        });
        var obj = {};
        result.forEach(function (key) {
          if (!key) return;
          var state = _this.appStore.state;
          obj[key] = state[key].concat(newAttributes[key]);
        });
        return obj;
      };

      var nextState = {
        state: _objectSpread({}, currentState.state, newAttributes, mergeArrays === true ? existingArrays() : {}),
        previousState: _objectSpread({}, currentState.state)
      };
      this.appStore = nextState;
      return currentState;
    }
    /**
     * Get current state
     */

  }, {
    key: "getState",
    value: function getState() {
      return this.appStore.state;
    }
    /**
     * Get prior state
     */

  }, {
    key: "getPreviousState",
    value: function getPreviousState() {
      return this.appStore.previousState;
    }
    /**
     * converts state to JSON
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return JSON.stringify(this.appStore);
    }
  }]);

  return SimpleState;
}();
/** @namespace SimpleState */


var _default = SimpleState;
exports.default = _default;