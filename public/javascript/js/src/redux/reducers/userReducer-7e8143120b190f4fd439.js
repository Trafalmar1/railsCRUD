/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascript/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/client/javascript/src/redux/reducers/userReducer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/client/javascript/src/redux/reducers/userReducer.ts":
/*!*****************************************************************!*\
  !*** ./app/client/javascript/src/redux/reducers/userReducer.ts ***!
  \*****************************************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/userActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/authActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



var initialState = {
  loggedIn: false,
  token: "",
  user: null,
  users: [],
  loading: false,
  userId: "",
  profileOwner: null,
  dashboard: null
};
var userReducer = function userReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case !(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/userActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
      return __assign(__assign({}, state), {
        users: action.payload.users,
        loading: action.payload.loading
      });

    case !(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/userActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
      return __assign(__assign({}, state), {
        user: action.payload.user
      });

    case !(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/userActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
      return __assign(__assign({}, state), {
        profileOwner: action.payload.profileOwner
      });

    case !(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/userActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
      return __assign(__assign({}, state), {
        profileOwner: action.payload.profileOwner
      });

    case !(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/userActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
      return __assign(__assign({}, state), {
        dashboard: action.payload.dashboard
      });

    case !(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/authActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
      return __assign(__assign({}, state), {
        loggedIn: action.payload.loggedIn,
        token: action.payload.token,
        userId: action.payload.userId
      });

    case !(function webpackMissingModule() { var e = new Error("Cannot find module 'redux/actions/authActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
      return initialState;

    default:
      return state;
  }
};

/***/ })

/******/ });
//# sourceMappingURL=userReducer-7e8143120b190f4fd439.js.map