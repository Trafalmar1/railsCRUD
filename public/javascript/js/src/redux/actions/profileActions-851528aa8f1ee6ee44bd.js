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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/client/javascript/src/redux/actions/profileActions.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/client/javascript/src/redux/actions/profileActions.ts":
/*!*******************************************************************!*\
  !*** ./app/client/javascript/src/redux/actions/profileActions.ts ***!
  \*******************************************************************/
/*! exports provided: GET_PROFILES, getProfiles, createProfile, updateProfile, deleteProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILES", function() { return GET_PROFILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfiles", function() { return getProfiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfile", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProfile", function() { return deleteProfile; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};


var GET_PROFILES = "GET_PROFILES";

var getProfilesAction = function getProfilesAction(profiles) {
  return {
    type: GET_PROFILES,
    payload: {
      profiles: profiles
    }
  };
};

var getProfiles = function getProfiles() {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, profiles, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getProfiles()];

          case 1:
            res = _a.sent();
            profiles = res.data;
            dispatch(getProfilesAction(profiles));
            return [3
            /*break*/
            , 3];

          case 2:
            err_1 = _a.sent();
            console.error(err_1);
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var createProfile = function createProfile(data, callback) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, profiles, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createProfile(data)];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getProfiles()];

          case 2:
            res = _a.sent();
            profiles = res.data;

            if (callback) {
              callback("success");
            }

            dispatch(getProfilesAction(profiles));
            return [3
            /*break*/
            , 4];

          case 3:
            err_2 = _a.sent();
            console.error(err_2);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var updateProfile = function updateProfile(data, callback) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, profiles, err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).updateProfile(data)];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getProfiles()];

          case 2:
            res = _a.sent();
            profiles = res.data;

            if (callback) {
              callback("success");
            }

            dispatch(getProfilesAction(profiles));
            return [3
            /*break*/
            , 4];

          case 3:
            err_3 = _a.sent();
            console.error(err_3);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var deleteProfile = function deleteProfile(id) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, profiles, err_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).deleteProfile(id)];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getProfiles()];

          case 2:
            res = _a.sent();
            profiles = res.data;
            dispatch(getProfilesAction(profiles));
            return [3
            /*break*/
            , 4];

          case 3:
            err_4 = _a.sent();
            console.error(err_4);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

/***/ })

/******/ });
//# sourceMappingURL=profileActions-851528aa8f1ee6ee44bd.js.map