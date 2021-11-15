(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.AliIconVue = factory());
}(this, (function () { 'use strict';

  function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e);}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h);}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments);}};var helper=mergeJsxProps;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames() {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				if (arg.length) {
  					var inner = classNames.apply(null, arg);
  					if (inner) {
  						classes.push(inner);
  					}
  				}
  			} else if (argType === 'object') {
  				if (arg.toString === Object.prototype.toString) {
  					for (var key in arg) {
  						if (hasOwn.call(arg, key) && arg[key]) {
  							classes.push(key);
  						}
  					}
  				} else {
  					classes.push(arg.toString());
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if ( module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function isIconDefinition(target) {
    return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
  }
  function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(attrs).reduce(function (acc, key) {
      var val = attrs[key];

      switch (key) {
        case "class":
          acc.className = val;
          delete acc["class"];
          break;

        default:
          acc[key] = val;
      }

      return acc;
    }, {});
  }
  var MiniMap = /*#__PURE__*/function () {
    function MiniMap() {
      _classCallCheck(this, MiniMap);

      this.collection = {};
    }

    _createClass(MiniMap, [{
      key: "size",
      get: function get() {
        return Object.keys(this.collection).length;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.collection = {};
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        return delete this.collection[key];
      }
    }, {
      key: "get",
      value: function get(key) {
        return this.collection[key];
      }
    }, {
      key: "has",
      value: function has(key) {
        return Boolean(this.collection[key]);
      }
    }, {
      key: "set",
      value: function set(key, value) {
        this.collection[key] = value;
        return this;
      }
    }]);

    return MiniMap;
  }();
  function generate(h, node, key, rootProps) {
    if (!rootProps) {
      return h(node.tag, {
        key: key,
        attrs: _objectSpread2({}, normalizeAttrs(node.attrs))
      }, (node.children || []).map(function (child, index) {
        return generate(h, child, "".concat(key, "-").concat(node.tag, "-").concat(index));
      }));
    }

    return h(node.tag, _objectSpread2(_objectSpread2({
      key: key
    }, rootProps), {}, {
      attrs: _objectSpread2(_objectSpread2({}, normalizeAttrs(node.attrs)), rootProps.attrs)
    }), (node.children || []).map(function (child, index) {
      return generate(h, child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  function withSuffix(name, theme) {
    switch (theme) {
      case "fill":
        return "".concat(name, "-fill");

      case "outline":
        return "".concat(name, "-o");

      case "twotone":
        return "".concat(name, "-twotone");

      default:
        throw new TypeError("Unknown theme type: ".concat(theme, ", name: ").concat(name));
    }
  }

  var Icon = {
    name: "AntdIcon",
    props: ["type", "primaryColor", "secondaryColor"],
    displayName: "IconVue",
    definitions: new MiniMap(),
    add: function add() {
      for (var _len = arguments.length, icons = new Array(_len), _key = 0; _key < _len; _key++) {
        icons[_key] = arguments[_key];
      }

      icons.forEach(function (icon) {
        Icon.definitions.set(withSuffix(icon.name, icon.theme), icon);
      });
    },
    clear: function clear() {
      Icon.definitions.clear();
    },
    render: function render(h) {
      var type = this.$props.type;
      var target;

      if (isIconDefinition(type)) {
        target = type;
      }

      if (!target) {
        // log(`type should be string or icon definiton, but got ${type}`);
        return null;
      }

      return generate(h, target.icon, "svg-".concat(target.name), {
        attrs: {
          "data-icon": target.name,
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true"
        },
        on: this.$listeners
      });
    }
  };
  /* istanbul ignore next */

  Icon.install = function (Vue) {
    Vue.component(Icon.name, Icon);
  };

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) ||
        objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor == 'function' &&
      Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
  }

  var lodash_isplainobject = isPlainObject;

  var ObjProto = Object.prototype;
  var toString = ObjProto.toString;
  var hasOwn = ObjProto.hasOwnProperty;
  var FN_MATCH_REGEXP = /^\s*function (\w+)/; // https://github.com/vuejs/vue/blob/dev/src/core/util/props.js#L159

  var getType = function getType(fn) {
    var type = fn !== null && fn !== undefined ? fn.type ? fn.type : fn : null;
    var match = type && type.toString().match(FN_MATCH_REGEXP);
    return match && match[1];
  };
  var getNativeType = function getNativeType(value) {
    if (value === null || value === undefined) return null;
    var match = value.constructor.toString().match(FN_MATCH_REGEXP);
    return match && match[1];
  };
  /**
   * No-op function
   */

  var noop = function noop() {};
  /**
   * Determines whether the passed value is an integer. Uses `Number.isInteger` if available
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
   * @param {*} value - The value to be tested for being an integer.
   * @returns {boolean}
   */

  var isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  };
  /**
   * Determines whether the passed value is an Array.
   *
   * @param {*} value - The value to be tested for being an array.
   * @returns {boolean}
   */

  var isArray = Array.isArray || function (value) {
    return toString.call(value) === '[object Array]';
  };
  /**
   * Checks if a value is a function
   *
   * @param {any} value - Value to check
   * @returns {boolean}
   */

  var isFunction = function isFunction(value) {
    return toString.call(value) === '[object Function]';
  };
  /**
   * Adds a `def` method to the object returning a new object with passed in argument as `default` property
   *
   * @param {object} type - Object to enhance
   */

  var withDefault = function withDefault(type) {
    Object.defineProperty(type, 'def', {
      value: function value(def) {
        if (def === undefined && this["default"] === undefined) {
          this["default"] = undefined;
          return this;
        }

        if (!isFunction(def) && !validateType(this, def)) {
          warn("".concat(this._vueTypes_name, " - invalid default value: \"").concat(def, "\""));
          return this;
        }

        this["default"] = isArray(def) || lodash_isplainobject(def) ? function () {
          return def;
        } : def;
        return this;
      },
      enumerable: false,
      writable: false
    });
  };
  /**
   * Adds a `isRequired` getter returning a new object with `required: true` key-value
   *
   * @param {object} type - Object to enhance
   */

  var withRequired = function withRequired(type) {
    Object.defineProperty(type, 'isRequired', {
      get: function get() {
        this.required = true;
        return this;
      },
      enumerable: false
    });
  };
  /**
   * Adds `isRequired` and `def` modifiers to an object
   *
   * @param {string} name - Type internal name
   * @param {object} obj - Object to enhance
   * @returns {object}
   */

  var toType = function toType(name, obj) {
    Object.defineProperty(obj, '_vueTypes_name', {
      enumerable: false,
      writable: false,
      value: name
    });
    withRequired(obj);
    withDefault(obj);

    if (isFunction(obj.validator)) {
      obj.validator = obj.validator.bind(obj);
    }

    return obj;
  };
  /**
   * Validates a given value against a prop type object
   *
   * @param {Object|*} type - Type to use for validation. Either a type object or a constructor
   * @param {*} value - Value to check
   * @param {boolean} silent - Silence warnings
   * @returns {boolean}
   */

  var validateType = function validateType(type, value) {
    var typeToCheck = type;
    var valid = true;
    var expectedType;

    if (!lodash_isplainobject(type)) {
      typeToCheck = {
        type: type
      };
    }

    var namePrefix = typeToCheck._vueTypes_name ? typeToCheck._vueTypes_name + ' - ' : '';

    if (hasOwn.call(typeToCheck, 'type') && typeToCheck.type !== null) {
      if (isArray(typeToCheck.type)) {
        valid = typeToCheck.type.some(function (type) {
          return validateType(type, value);
        });
        expectedType = typeToCheck.type.map(function (type) {
          return getType(type);
        }).join(' or ');
      } else {
        expectedType = getType(typeToCheck);

        if (expectedType === 'Array') {
          valid = isArray(value);
        } else if (expectedType === 'Object') {
          valid = lodash_isplainobject(value);
        } else if (expectedType === 'String' || expectedType === 'Number' || expectedType === 'Boolean' || expectedType === 'Function') {
          valid = getNativeType(value) === expectedType;
        } else {
          valid = value instanceof typeToCheck.type;
        }
      }
    }

    if (!valid) {
      return false;
    }

    if (hasOwn.call(typeToCheck, 'validator') && isFunction(typeToCheck.validator)) {
      valid = typeToCheck.validator(value);
      return valid;
    }

    return valid;
  };
  var warn = noop; // if (process.env.NODE_ENV !== 'production') {

  var VuePropTypes = {
    get any() {
      return toType('any', {
        type: null
      });
    },

    get func() {
      return toType('function', {
        type: Function
      }).def(currentDefaults.func);
    },

    get bool() {
      return toType('boolean', {
        type: Boolean
      }).def(currentDefaults.bool);
    },

    get string() {
      return toType('string', {
        type: String
      }).def(currentDefaults.string);
    },

    get number() {
      return toType('number', {
        type: Number
      }).def(currentDefaults.number);
    },

    get array() {
      return toType('array', {
        type: Array
      }).def(currentDefaults.array);
    },

    get object() {
      return toType('object', {
        type: Object
      }).def(currentDefaults.object);
    },

    get integer() {
      return toType('integer', {
        type: Number,
        validator: function validator(value) {
          return isInteger(value);
        }
      }).def(currentDefaults.integer);
    },

    get symbol() {
      return toType('symbol', {
        type: null,
        validator: function validator(value) {
          return _typeof(value) === 'symbol';
        }
      });
    },

    custom: function custom(validatorFn) {
      var warnMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'custom validation failed';

      if (typeof validatorFn !== 'function') {
        throw new TypeError('[VueTypes error]: You must provide a function as argument');
      }

      return toType(validatorFn.name || '<<anonymous function>>', {
        validator: function validator() {
          var valid = validatorFn.apply(void 0, arguments);
          if (!valid) warn("".concat(this._vueTypes_name, " - ").concat(warnMsg));
          return valid;
        }
      });
    },
    oneOf: function oneOf(arr) {
      if (!isArray(arr)) {
        throw new TypeError('[VueTypes error]: You must provide an array as argument');
      }

      var msg = "oneOf - value should be one of \"".concat(arr.join('", "'), "\"");
      var allowedTypes = arr.reduce(function (ret, v) {
        if (v !== null && v !== undefined) {
          ret.indexOf(v.constructor) === -1 && ret.push(v.constructor);
        }

        return ret;
      }, []);
      return toType('oneOf', {
        type: allowedTypes.length > 0 ? allowedTypes : null,
        validator: function validator(value) {
          var valid = arr.indexOf(value) !== -1;
          return valid;
        }
      });
    },
    instanceOf: function instanceOf(instanceConstructor) {
      return toType('instanceOf', {
        type: instanceConstructor
      });
    },
    oneOfType: function oneOfType(arr) {
      if (!isArray(arr)) {
        throw new TypeError('[VueTypes error]: You must provide an array as argument');
      }

      var hasCustomValidators = false;
      var nativeChecks = arr.reduce(function (ret, type) {
        if (lodash_isplainobject(type)) {
          if (type._vueTypes_name === 'oneOf') {
            return ret.concat(type.type || []);
          }

          if (type.type && !isFunction(type.validator)) {
            if (isArray(type.type)) return ret.concat(type.type);
            ret.push(type.type);
          } else if (isFunction(type.validator)) {
            hasCustomValidators = true;
          }

          return ret;
        }

        ret.push(type);
        return ret;
      }, []);

      if (!hasCustomValidators) {
        // we got just native objects (ie: Array, Object)
        // delegate to Vue native prop check
        return toType('oneOfType', {
          type: nativeChecks
        }).def(undefined);
      }

      var typesStr = arr.map(function (type) {
        if (type && isArray(type.type)) {
          return type.type.map(getType);
        }

        return getType(type);
      }).reduce(function (ret, type) {
        return ret.concat(isArray(type) ? type : [type]);
      }, []).join('", "');
      return this.custom(function oneOfType(value) {
        var valid = arr.some(function (type) {
          if (type._vueTypes_name === 'oneOf') {
            return type.type ? validateType(type.type, value) : true;
          }

          return validateType(type, value);
        });
        return valid;
      }).def(undefined);
    },
    arrayOf: function arrayOf(type) {
      return toType('arrayOf', {
        type: Array,
        validator: function validator(values) {
          var valid = values.every(function (value) {
            return validateType(type, value);
          });
          if (!valid) warn("arrayOf - value must be an array of \"".concat(getType(type), "\""));
          return valid;
        }
      });
    },
    objectOf: function objectOf(type) {
      return toType('objectOf', {
        type: Object,
        validator: function validator(obj) {
          var valid = Object.keys(obj).every(function (key) {
            return validateType(type, obj[key]);
          });
          if (!valid) warn("objectOf - value must be an object of \"".concat(getType(type), "\""));
          return valid;
        }
      });
    },
    shape: function shape(obj) {
      var keys = Object.keys(obj);
      var requiredKeys = keys.filter(function (key) {
        return obj[key] && obj[key].required === true;
      });
      var type = toType('shape', {
        type: Object,
        validator: function validator(value) {
          var _this = this;

          if (!lodash_isplainobject(value)) {
            return false;
          }

          var valueKeys = Object.keys(value); // check for required keys (if any)

          if (requiredKeys.length > 0 && requiredKeys.some(function (req) {
            return valueKeys.indexOf(req) === -1;
          })) {
            warn("shape - at least one of required properties \"".concat(requiredKeys.join('", "'), "\" is not present"));
            return false;
          }

          return valueKeys.every(function (key) {
            if (keys.indexOf(key) === -1) {
              if (_this._vueTypes_isLoose === true) return true;
              return false;
            }

            var type = obj[key];
            return validateType(type, value[key]);
          });
        }
      });
      Object.defineProperty(type, '_vueTypes_isLoose', {
        enumerable: false,
        writable: true,
        value: false
      });
      Object.defineProperty(type, 'loose', {
        get: function get() {
          this._vueTypes_isLoose = true;
          return this;
        },
        enumerable: false
      });
      return type;
    }
  };

  var typeDefaults = function typeDefaults() {
    return {
      func: undefined,
      bool: undefined,
      string: undefined,
      number: undefined,
      array: undefined,
      object: undefined,
      integer: undefined
    };
  };

  var currentDefaults = typeDefaults();
  Object.defineProperty(VuePropTypes, 'sensibleDefaults', {
    enumerable: false,
    set: function set(value) {
      if (value === false) {
        currentDefaults = {};
      } else if (value === true) {
        currentDefaults = typeDefaults();
      } else if (lodash_isplainobject(value)) {
        currentDefaults = value;
      }
    },
    get: function get() {
      return currentDefaults;
    }
  });

  // https://github.com/vueComponent/ant-design-vue/issues/1705

  function getListeners(context) {
    return (context.$vnode ? context.$vnode.componentOptions.listeners : context.$listeners) || {};
  }
  function isEmptyElement(c) {
    return !(c.tag || c.text && c.text.trim() !== '');
  }
  function filterEmpty() {
    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return children.filter(function (c) {
      return !isEmptyElement(c);
    });
  }

  function mergeProps() {
    var args = [].slice.call(arguments, 0);
    var props = {};
    args.forEach(function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      for (var _i2 = 0, _Object$entries2 = Object.entries(p); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            k = _Object$entries2$_i[0],
            v = _Object$entries2$_i[1];

        props[k] = props[k] || {};

        if (lodash_isplainobject(v)) {
          Object.assign(props[k], v);
        } else {
          props[k] = v;
        }
      }
    });
    return props;
  }

  var _excluded = ["type"];
  var customCache = new Set();

  function isValidCustomScriptUrl(scriptUrl) {
    return typeof scriptUrl === "string" && scriptUrl.length && !customCache.has(scriptUrl);
  }

  function createScriptUrlElements(scriptUrls) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var currentScriptUrl = scriptUrls[index];

    if (isValidCustomScriptUrl(currentScriptUrl)) {
      var script = document.createElement("script");
      script.setAttribute("src", currentScriptUrl);
      script.setAttribute("data-namespace", currentScriptUrl);

      if (scriptUrls.length > index + 1) {
        script.onload = function () {
          createScriptUrlElements(scriptUrls, index + 1);
        };

        script.onerror = function () {
          createScriptUrlElements(scriptUrls, index + 1);
        };
      }

      customCache.add(currentScriptUrl);
      document.body.appendChild(script);
    }
  }

  function create(options) {
    var scriptUrl = options.scriptUrl,
        _options$extraCommonP = options.extraCommonProps,
        extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */

    if (typeof document !== "undefined" && typeof window !== "undefined" && typeof document.createElement === "function") {
      if (Array.isArray(scriptUrl)) {
        // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
        createScriptUrlElements(scriptUrl.reverse());
      } else {
        createScriptUrlElements([scriptUrl]);
      }
    }

    var Iconfont = {
      functional: true,
      name: "AIconfont",
      props: Icon$1.props,
      render: function render(h, context) {
        var props = context.props,
            slots = context.slots,
            listeners = context.listeners,
            data = context.data;

        var type = props.type,
            restProps = _objectWithoutProperties(props, _excluded);

        var slotsMap = slots();
        var children = slotsMap["default"]; // component > children > type

        var content = null;

        if (type) {
          content = h("use", {
            "attrs": _objectSpread2({}, {
              "xlink:href": "#".concat(type)
            })
          });
        }

        if (children) {
          content = children;
        }

        var iconProps = mergeProps(extraCommonProps, data, {
          props: restProps,
          on: listeners
        });
        return h(Icon$1, helper([{}, iconProps]), [content]);
      }
    };
    return Iconfont;
  }

  // import warning from '../_util/warning';
  // These props make sure that the SVG behaviours like general text.
  // Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  var svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false'
  };
  var fillTester = /-fill$/;
  var outlineTester = /-o$/;
  var twoToneTester = /-twotone$/;
  function removeTypeTheme(type) {
    return type.replace(fillTester, '').replace(outlineTester, '').replace(twoToneTester, '');
  }
  function withThemeSuffix(type, theme) {
    var result = type;

    if (theme === 'filled') {
      result += '-fill';
    } else if (theme === 'outlined') {
      result += '-o';
    } else if (theme === 'twoTone') {
      result += '-twotone';
    }

    return result;
  } // For alias or compatibility

  function alias(type) {
    var newType = type;

    switch (type) {
      case 'cross':
        newType = 'close';
        break;
      // https://github.com/ant-design/ant-design/issues/13007

      case 'interation':
        newType = 'interaction';
        break;
      // https://github.com/ant-design/ant-design/issues/16810

      case 'canlendar':
        newType = 'calendar';
        break;
      // https://github.com/ant-design/ant-design/issues/17448

      case 'colum-height':
        newType = 'column-height';
        break;
    } // warning(
    //   newType === type,
    //   'Icon',
    //   `Icon '${type}' was a typo and is now deprecated, please use '${newType}' instead.`,
    // );


    return newType;
  }

  var defaultTheme = "outlined";

  function renderIcon(h, context) {
    var _classNames;

    var props = context.$props,
        $slots = context.$slots;
    var listeners = getListeners(context);
    var type = props.type,
        Component = props.component,
        viewBox = props.viewBox,
        spin = props.spin,
        theme = props.theme,
        twoToneColor = props.twoToneColor,
        rotate = props.rotate,
        tabIndex = props.tabIndex;
    var children = filterEmpty($slots["default"]);
    children = children.length === 0 ? undefined : children; // warning(
    //   Boolean(type || Component || children),
    //   "Icon",
    //   "Icon should have `type` prop or `component` prop or `children`."
    // );

    var classString = classnames((_classNames = {}, _defineProperty(_classNames, "anticon", true), _defineProperty(_classNames, "anticon-".concat(type), !!type), _classNames));
    var svgClassString = classnames(_defineProperty({}, "anticon-spin", !!spin || type === "loading"));
    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var innerSvgProps = {
      attrs: _objectSpread2(_objectSpread2({}, svgBaseProps), {}, {
        viewBox: viewBox
      }),
      "class": svgClassString,
      style: svgStyle
    };

    if (!viewBox) {
      delete innerSvgProps.attrs.viewBox;
    }

    var renderInnerNode = function renderInnerNode() {
      // component > children > type
      if (Component) {
        return h(Component, helper([{}, innerSvgProps]), [children]);
      }

      if (children) {
        // warning(
        //   Boolean(viewBox) || (children.length === 1 && children[0].tag === "use"),
        //   "Icon",
        //   "Make sure that you provide correct `viewBox`" + " prop (default `0 0 1024 1024`) to the icon."
        // );
        var _innerSvgProps = {
          attrs: _objectSpread2({}, svgBaseProps),
          "class": svgClassString,
          style: svgStyle
        };
        return h("svg", helper([{}, _innerSvgProps, {
          "attrs": {
            "viewBox": viewBox
          }
        }]), [children]);
      }

      if (typeof type === "string") {
        var computedType = type;

        computedType = withThemeSuffix(removeTypeTheme(alias(computedType)),  theme || defaultTheme);
        return h(Icon, {
          "attrs": {
            "focusable": "false",
            "type": computedType,
            "primaryColor": twoToneColor
          },
          "class": svgClassString,
          "style": svgStyle
        });
      }
    };

    var iconTabIndex = tabIndex;

    if (iconTabIndex === undefined && "click" in listeners) {
      iconTabIndex = -1;
    } // functional component not support nativeOn，https://github.com/vuejs/vue/issues/7526


    var iProps = {
      attrs: {
        "aria-label": type && "-: ".concat(type),
        tabIndex: iconTabIndex
      },
      on: listeners,
      "class": classString,
      staticClass: ""
    };
    return h("i", helper([{}, iProps]), [renderInnerNode()]);
  }

  var Icon$1 = {
    name: "AIcon",
    props: {
      tabIndex: VuePropTypes.number,
      type: VuePropTypes.string,
      component: VuePropTypes.any,
      viewBox: VuePropTypes.any,
      spin: VuePropTypes.bool.def(false),
      rotate: VuePropTypes.number,
      theme: VuePropTypes.oneOf(["filled", "outlined", "twoTone"]),
      twoToneColor: VuePropTypes.string,
      role: VuePropTypes.string
    },
    render: function render(h) {
      return renderIcon(h, this);
    }
  };
  Icon$1.createFromIconfontCN = create;
  /* istanbul ignore next */

  Icon$1.install = function (Vue) {
    // Vue.use(Base);
    Vue.component(Icon$1.name, Icon$1);
  };

  return Icon$1;

})));
