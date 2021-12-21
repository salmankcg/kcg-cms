module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _jsxFileName = \"/Users/cemcelik/Documents/GitHub/kcg-cms/components/contact/contact-form.js\";\n\n\n\n\nfunction ContactForm() {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: requestStatus,\n    1: setRequestStatus\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(); // 'pending','success','error'\n\n  const {\n    0: requestError,\n    1: setRequestError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (requestStatus === \"success\" || requestStatus === \"error\") {\n      const timer = setTimeout(() => {\n        setRequestStatus(null);\n        setRequestError;\n      }, 3000);\n      return () => clearTimeout(timer);\n    }\n  }, [requestStatus]);\n\n  async function sendContactData(msg) {\n    const response = await fetch(\"/api/contact\", {\n      method: \"POST\",\n      body: JSON.stringify(msg),\n      header: {\n        \"Content-Type\": \"application/json\"\n      }\n    });\n    const data = await response.json();\n\n    if (!response.ok) {\n      throw new Error(data.message || \"Something went wrong!\");\n    }\n  }\n\n  async function sendMessageHandler(event) {\n    event.preventDefault();\n    setRequestStatus(\"pending\");\n\n    try {\n      await sendContactData({\n        email,\n        name,\n        message\n      });\n      setRequestStatus(\"success\");\n      setRequestError();\n      setEmail('');\n      setName('');\n      setMessage('');\n    } catch (error) {\n      setRequestError(error.message);\n      setRequestStatus(\"error\");\n    }\n  }\n\n  let notification;\n\n  switch (requestStatus) {\n    case \"success\":\n      notification = {\n        status: \"success\",\n        title: \"Success!\",\n        message: \"Message sent successfully!\"\n      };\n      break;\n\n    case \"error\":\n      notification = {\n        status: \"error\",\n        title: \"Error!\",\n        message: requestError\n      };\n      break;\n\n    case \"pending\":\n      notification = {\n        status: \"pending\",\n        title: \"Pending!\",\n        message: \"Sending...\"\n      };\n      break;\n\n    default:\n      notification = null;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"How can I help you?\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"email\",\n            children: \"Email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"email\",\n            name: \"email\",\n            id: \"email\",\n            required: true,\n            value: email,\n            onChange: e => setEmail(e.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"Your name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            name: \"name\",\n            id: \"name\",\n            required: true,\n            value: name,\n            onChange: e => setName(e.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"message\",\n          children: \"Your message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          name: \"message\",\n          id: \"message\",\n          rows: \"5\",\n          value: message,\n          onChange: e => setMessage(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Send Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this), notification && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      status: notification.status,\n      title: notification.title,\n      message: notification.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzP2FmOTQiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJyZXF1ZXN0RXJyb3IiLCJzZXRSZXF1ZXN0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZW5kQ29udGFjdERhdGEiLCJtc2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXIiLCJkYXRhIiwianNvbiIsIm9rIiwiRXJyb3IiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJub3RpZmljYXRpb24iLCJzdGF0dXMiLCJ0aXRsZSIsImNsYXNzZXMiLCJjb250YWN0IiwiZm9ybSIsImNvbnRyb2xzIiwiY29udHJvbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUNyQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ04sc0RBQVEs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LENBQVNDLEtBQVY7QUFMN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkYsZUFvQ0U7QUFBSyxpQkFBUyxFQUFFUCwrREFBTyxDQUFDUSxPQUF4QjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQTJDSVgsWUFBWSxpQkFDWixxRUFBQyx3REFBRDtBQUNFLFlBQU0sRUFBRUEsWUFBWSxDQUFDQyxNQUR2QjtBQUVFLFdBQUssRUFBRUQsWUFBWSxDQUFDRSxLQUZ0QjtBQUdFLGFBQU8sRUFBRUYsWUFBWSxDQUFDM0I7QUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFERDs7QUFFY04sMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jb250YWN0LWZvcm0ubW9kdWxlLmNzc1wiXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi91aS9ub3RpZmljYXRpb25cIlxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoKSAvLyAncGVuZGluZycsJ3N1Y2Nlc3MnLCdlcnJvcidcbiAgY29uc3QgW3JlcXVlc3RFcnJvciwgc2V0UmVxdWVzdEVycm9yXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSBcInN1Y2Nlc3NcIiB8fCByZXF1ZXN0U3RhdHVzID09PSBcImVycm9yXCIpIHtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMobnVsbClcbiAgICAgICAgc2V0UmVxdWVzdEVycm9yO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH1cbiAgfSwgW3JlcXVlc3RTdGF0dXNdKTtcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kQ29udGFjdERhdGEobXNnKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29udGFjdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobXNnKSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIilcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRSZXF1ZXN0U3RhdHVzKFwicGVuZGluZ1wiKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZW5kQ29udGFjdERhdGEoeyBlbWFpbCwgbmFtZSwgbWVzc2FnZSB9KVxuICAgICAgc2V0UmVxdWVzdFN0YXR1cyhcInN1Y2Nlc3NcIilcbiAgICAgIHNldFJlcXVlc3RFcnJvcigpXG4gICAgICBzZXRFbWFpbCgnJylcbiAgICAgIHNldE5hbWUoJycpXG4gICAgICBzZXRNZXNzYWdlKCcnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRSZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgIHNldFJlcXVlc3RTdGF0dXMoXCJlcnJvclwiKVxuICAgIH1cbiAgfVxuICBsZXQgbm90aWZpY2F0aW9uXG4gIHN3aXRjaCAocmVxdWVzdFN0YXR1cykge1xuICAgIGNhc2UgXCJzdWNjZXNzXCI6XG4gICAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIH07XG4gICAgICBicmVha1xuICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgbm90aWZpY2F0aW9uID0ge1xuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgdGl0bGU6IFwiRXJyb3IhXCIsXG4gICAgICAgIG1lc3NhZ2U6IHJlcXVlc3RFcnJvcixcbiAgICAgIH07XG4gICAgICBicmVha1xuICAgIGNhc2UgXCJwZW5kaW5nXCI6XG4gICAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHRpdGxlOiBcIlBlbmRpbmchXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2VuZGluZy4uLlwiLFxuICAgICAgfTtcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XG4gICAgICA8aDE+SG93IGNhbiBJIGhlbHAgeW91PzwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlSGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+WW91ciBtZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICByb3dzPVwiNVwiXG4gICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAge1xuICAgICAgICBub3RpZmljYXRpb24gJiZcbiAgICAgICAgPE5vdGlmaWNhdGlvblxuICAgICAgICAgIHN0YXR1cz17bm90aWZpY2F0aW9uLnN0YXR1c31cbiAgICAgICAgICB0aXRsZT17bm90aWZpY2F0aW9uLnRpdGxlfVxuICAgICAgICAgIG1lc3NhZ2U9e25vdGlmaWNhdGlvbi5tZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ }),

/***/ "./components/contact/contact-form.module.css":
/*!****************************************************!*\
  !*** ./components/contact/contact-form.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contact\": \"contact-form_contact__2DYss\",\n\t\"form\": \"contact-form_form__1RTmV\",\n\t\"controls\": \"contact-form_controls__3o80h\",\n\t\"control\": \"contact-form_control__1hqvU\",\n\t\"actions\": \"contact-form_actions__RzW-v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLm1vZHVsZS5jc3M/MGJjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzc1wiLFxuXHRcImZvcm1cIjogXCJjb250YWN0LWZvcm1fZm9ybV9fMVJUbVZcIixcblx0XCJjb250cm9sc1wiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGhcIixcblx0XCJjb250cm9sXCI6IFwiY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.module.css\n");

/***/ }),

/***/ "./components/ui/notification.js":
/*!***************************************!*\
  !*** ./components/ui/notification.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.module.css */ \"./components/ui/notification.module.css\");\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/cemcelik/Documents/GitHub/kcg-cms/components/ui/notification.js\";\n\n\n\nfunction Notification(props) {\n  const {\n    title,\n    message,\n    status\n  } = props;\n  let statusClasses = '';\n\n  if (status === 'success') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.success;\n  }\n\n  if (status === 'error') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error;\n  }\n\n  const cssClasses = `${_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notification} ${statusClasses}`;\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: cssClasses,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this), document.getElementById('notifications'));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcz8wZWExIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbiIsInByb3BzIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3NlcyIsImNsYXNzZXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJjc3NDbGFzc2VzIiwibm90aWZpY2F0aW9uIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixNQUE2QkgsS0FBbkM7QUFFQSxNQUFJSSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsTUFBSUQsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNDLE9BQXhCO0FBQ0Q7O0FBRUQsTUFBSUgsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDdEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNFLEtBQXhCO0FBQ0Q7O0FBRUQsUUFBTUMsVUFBVSxHQUFJLEdBQUVILCtEQUFPLENBQUNJLFlBQWEsSUFBR0wsYUFBYyxFQUE1RDtBQUVBLHNCQUFPTSxnREFBUSxDQUFDQyxZQUFULGVBQ0w7QUFBSyxhQUFTLEVBQUVILFVBQWhCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS1A7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESyxFQUtKVSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FMSSxDQUFQO0FBTUQ7O0FBRWNkLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cyB9ID0gcHJvcHM7XG5cbiAgbGV0IHN0YXR1c0NsYXNzZXMgPSAnJztcblxuICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5zdWNjZXNzO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xuICB9XG5cbiAgY29uc3QgY3NzQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcblxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3Nlc30+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgPC9kaXY+XG4gICksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zJykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/notification.js\n");

/***/ }),

/***/ "./components/ui/notification.module.css":
/*!***********************************************!*\
  !*** ./components/ui/notification.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"notification\": \"notification_notification__3oWBf\",\n\t\"success\": \"notification_success__3Hbna\",\n\t\"error\": \"notification_error__1LYKp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzPzQ3ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vdGlmaWNhdGlvblwiOiBcIm5vdGlmaWNhdGlvbl9ub3RpZmljYXRpb25fXzNvV0JmXCIsXG5cdFwic3VjY2Vzc1wiOiBcIm5vdGlmaWNhdGlvbl9zdWNjZXNzX18zSGJuYVwiLFxuXHRcImVycm9yXCI6IFwibm90aWZpY2F0aW9uX2Vycm9yX18xTFlLcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/notification.module.css\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_contact_contact_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/contact/contact-form */ \"./components/contact/contact-form.js\");\n\nvar _jsxFileName = \"/Users/cemcelik/Documents/GitHub/kcg-cms/pages/contact.js\";\n\n\nfunction Contact() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_contact_contact_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNmLHNCQUFPLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztBQUVjQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybSdcblxuZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgICByZXR1cm4gPENvbnRhY3RGb3JtIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });