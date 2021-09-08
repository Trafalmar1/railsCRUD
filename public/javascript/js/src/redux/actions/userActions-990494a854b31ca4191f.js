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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/client/javascript/src/redux/actions/userActions.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/client/javascript/src/redux/actions/userActions.ts":
/*!****************************************************************!*\
  !*** ./app/client/javascript/src/redux/actions/userActions.ts ***!
  \****************************************************************/
/*! exports provided: GET_USERS, LOADING, GET_ONE_USER, GET_PROFILE_OWNER, DELETE_USER, GET_DASHBOARD, getUsers, getOneUser, getProfileOwner, updateUser, deleteUser, getDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS", function() { return GET_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_USER", function() { return GET_ONE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_OWNER", function() { return GET_PROFILE_OWNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER", function() { return DELETE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DASHBOARD", function() { return GET_DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOneUser", function() { return getOneUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileOwner", function() { return getProfileOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboard", function() { return getDashboard; });
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


var GET_USERS = "GET_USERS";
var LOADING = "LOADING";
var GET_ONE_USER = "GET_ONE_USER";
var GET_PROFILE_OWNER = "GET_PROFILE_OWNER";
var DELETE_USER = "DELETE_USER";
var GET_DASHBOARD = "GET_DASHBOARD";

var getUsersAction = function getUsersAction(res) {
  return {
    type: GET_USERS,
    payload: {
      users: res.data,
      loading: false
    }
  };
};

var getProfileOwnerAction = function getProfileOwnerAction(res) {
  return {
    type: GET_PROFILE_OWNER,
    payload: {
      profileOwner: res.data
    }
  };
};

var getLoggedInUserAction = function getLoggedInUserAction(res) {
  return {
    type: GET_ONE_USER,
    payload: {
      user: res.data
    }
  };
};

var deleteUserAction = function deleteUserAction() {
  return {
    type: DELETE_USER,
    payload: {
      profileOwner: null
    }
  };
};

var getDashboardAction = function getDashboardAction(res) {
  return {
    type: GET_DASHBOARD,
    payload: {
      dashboard: res.data
    }
  };
};

var getUsers = function getUsers() {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            dispatch({
              type: LOADING,
              payload: {
                loading: true
              }
            });
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getUsers()];

          case 2:
            res = _a.sent();
            dispatch(getUsersAction(res));
            return [3
            /*break*/
            , 4];

          case 3:
            err_1 = _a.sent();
            console.log(err_1);
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
var getOneUser = function getOneUser(id) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getOneUser(id)];

          case 1:
            res = _a.sent();
            dispatch(getLoggedInUserAction(res));
            return [3
            /*break*/
            , 3];

          case 2:
            err_2 = _a.sent();
            console.log(err_2);
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
var getProfileOwner = function getProfileOwner(id) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getOneUser(id)];

          case 1:
            res = _a.sent();
            dispatch(getProfileOwnerAction(res));
            return [3
            /*break*/
            , 3];

          case 2:
            err_3 = _a.sent();
            console.log(err_3);
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
var updateUser = function updateUser(data, options) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var isLoggedInUser, callBack, updated, error, res, err_4;

      var _a, _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            isLoggedInUser = options.isLoggedInUser, callBack = options.callBack;
            _c.label = 1;

          case 1:
            _c.trys.push([1, 4,, 5]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).updateUser(data)];

          case 2:
            updated = _c.sent();
            error = (_b = (_a = updated === null || updated === void 0 ? void 0 : updated.data) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;

            if (error) {
              if (callBack) callBack(error);
              return [2
              /*return*/
              ];
            }

            if (!data.id) return [2
            /*return*/
            ];
            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getOneUser(data.id)];

          case 3:
            res = _c.sent();
            dispatch(getProfileOwnerAction(res));
            if (callBack) callBack("success");

            if (isLoggedInUser) {
              dispatch(getLoggedInUserAction(res));
            }

            return [3
            /*break*/
            , 5];

          case 4:
            err_4 = _c.sent();
            console.error(err_4);
            return [3
            /*break*/
            , 5];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var deleteUser = function deleteUser(id) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var err_5;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).deleteUser(id)];

          case 1:
            _a.sent();

            dispatch(deleteUserAction());
            return [3
            /*break*/
            , 3];

          case 2:
            err_5 = _a.sent();
            console.error(err_5);
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
var getDashboard = function getDashboard() {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, err_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , !(function webpackMissingModule() { var e = new Error("Cannot find module 'api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getDashboard()];

          case 1:
            res = _a.sent();
            dispatch(getDashboardAction(res));
            return [3
            /*break*/
            , 3];

          case 2:
            err_6 = _a.sent();
            console.error(err_6);
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

/***/ })

/******/ });
//# sourceMappingURL=userActions-990494a854b31ca4191f.js.map