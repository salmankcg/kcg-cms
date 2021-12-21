module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    // Validate received data\n    const {\n      email,\n      name,\n      message\n    } = JSON.parse(req.body);\n\n    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {\n      res.status(422).json({\n        message: 'Invalid input.'\n      });\n      return;\n    } // Connect to MongoDB\n\n\n    let client;\n\n    try {\n      client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb://localhost/next-course');\n    } catch (error) {\n      res.status(500).json({\n        message: 'Could not connect to database'\n      });\n      return;\n    } // Insert new message and close connection\n\n\n    const db = client.db();\n    const newMessage = {\n      email,\n      name,\n      message\n    };\n\n    try {\n      const result = await db.collection('messages').insertOne(newMessage);\n      newMessage.id = result.insertedId;\n    } catch (error) {\n      res.status(500).json({\n        message: 'Could not store data'\n      });\n      return;\n    }\n\n    client.close(); // Send response back\n\n    res.status(201).json({\n      message: 'Successfully saved!',\n      message: newMessage\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJlcnJvciIsImRiIiwibmV3TWVzc2FnZSIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJpZCIsImluc2VydGVkSWQiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzdCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCO0FBQ0EsVUFBTTtBQUFFQyxXQUFGO0FBQVNDLFVBQVQ7QUFBZUM7QUFBZixRQUEyQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdQLEdBQUcsQ0FBQ1EsSUFBZixDQUFqQzs7QUFDQSxRQUFJLENBQUNMLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNNLFFBQU4sQ0FBZSxHQUFmLENBQVgsSUFBa0MsQ0FBQ0wsSUFBbkMsSUFBMkNBLElBQUksQ0FBQ00sSUFBTCxPQUFnQixFQUEzRCxJQUFpRSxDQUFDTCxPQUFsRSxJQUE2RUEsT0FBTyxDQUFDSyxJQUFSLE9BQW1CLEVBQXBHLEVBQXdHO0FBQ3BHVCxTQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFUCxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0gsS0FOc0IsQ0FRdkI7OztBQUNBLFFBQUlRLE1BQUo7O0FBQ0EsUUFBSTtBQUNBQSxZQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQixpQ0FBcEIsQ0FBZjtBQUNILEtBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDWmYsU0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVAsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQUNILEtBZnNCLENBaUJ2Qjs7O0FBQ0EsVUFBTVksRUFBRSxHQUFHSixNQUFNLENBQUNJLEVBQVAsRUFBWDtBQUNBLFVBQU1DLFVBQVUsR0FBRztBQUFFZixXQUFGO0FBQVNDLFVBQVQ7QUFBZUM7QUFBZixLQUFuQjs7QUFDQSxRQUFJO0FBQ0EsWUFBTWMsTUFBTSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLFVBQWQsRUFBMEJDLFNBQTFCLENBQW9DSCxVQUFwQyxDQUFyQjtBQUNBQSxnQkFBVSxDQUFDSSxFQUFYLEdBQWdCSCxNQUFNLENBQUNJLFVBQXZCO0FBQ0gsS0FIRCxDQUdFLE9BQU9QLEtBQVAsRUFBYztBQUNaZixTQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFUCxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0g7O0FBQ0RRLFVBQU0sQ0FBQ1csS0FBUCxHQTNCdUIsQ0E2QnZCOztBQUNBdkIsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVAsYUFBTyxFQUFFLHFCQUFYO0FBQWtDQSxhQUFPLEVBQUVhO0FBQTNDLEtBQXJCO0FBQ0g7QUFDSjs7QUFDY25CLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAvLyBWYWxpZGF0ZSByZWNlaXZlZCBkYXRhXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UgfSA9IEpTT04ucGFyc2UocmVxLmJvZHkpIFxuICAgICAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC5pbmNsdWRlcygnQCcpIHx8ICFuYW1lIHx8IG5hbWUudHJpbSgpID09PSAnJyB8fCAhbWVzc2FnZSB8fCBtZXNzYWdlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgaW5wdXQuJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25uZWN0IHRvIE1vbmdvREJcbiAgICAgICAgbGV0IGNsaWVudFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9uZXh0LWNvdXJzZScpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdDb3VsZCBub3QgY29ubmVjdCB0byBkYXRhYmFzZScgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBtZXNzYWdlIGFuZCBjbG9zZSBjb25uZWN0aW9uXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignbWVzc2FnZXMnKS5pbnNlcnRPbmUobmV3TWVzc2FnZSlcbiAgICAgICAgICAgIG5ld01lc3NhZ2UuaWQgPSByZXN1bHQuaW5zZXJ0ZWRJZFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnQ291bGQgbm90IHN0b3JlIGRhdGEnIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjbGllbnQuY2xvc2UoKVxuXG4gICAgICAgIC8vIFNlbmQgcmVzcG9uc2UgYmFja1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgc2F2ZWQhJywgbWVzc2FnZTogbmV3TWVzc2FnZSB9KVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });