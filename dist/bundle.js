/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyDr-yVR-bLkhsmGl30RQdXRx1VE6ilJ0zw\",\n  authDomain: \"fir-demo-7158d.firebaseapp.com\",\n  projectId: \"fir-demo-7158d\",\n  storageBucket: \"fir-demo-7158d.appspot.com\",\n  messagingSenderId: \"381712395784\",\n  appId: \"1:381712395784:web:7584aae932bee970bfabbd\",\n};\n\n// init app\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);\n\n// init db, auth\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nconst auth = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\n// collection ref\nconst colRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"books\");\n\n// query\nconst q = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colRef, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"createdAt\"));\n\n// get data\nconst unSubCol = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(q, (snapshot) => {\n  let books = [];\n  snapshot.docs.forEach((doc) => {\n    books.push({ ...doc.data(), id: doc.id });\n  });\n  console.log(books);\n});\n\nconst addBookForm = document.querySelector(\".add\");\naddBookForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colRef, {\n    name: addBookForm.name.value,\n    title: addBookForm.title.value,\n    year: addBookForm.year.value,\n    createdAt: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\n  }).then(() => addBookForm.reset());\n});\n\nconst deletedBookForm = document.querySelector(\".delete\");\ndeletedBookForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  const docRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"books\", deletedBookForm.id.value);\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(docRef).then(() => deletedBookForm.reset());\n});\n\n// get a single record\n\nconst docRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"books\", \"HSuC3j0sazl0kecxRK30\");\n\n// getDoc(docRef).then((doc) => {\n//   console.log(doc.data(), doc.id);\n// });\n\n// using snapshot\n\nconst unSubDoc = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(docRef, (doc) => {\n  console.log(doc.data(), doc.id);\n});\n\n// updating doc\n\nconst updateBookForm = document.querySelector(\".update\");\nupdateBookForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  const docRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"books\", updateBookForm.id.value);\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(docRef, {\n    title: \"New title\",\n  });\n});\n\n// signup user\n\nconst signup = document.querySelector(\".signup\");\nsignup.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  let email = signup.email.value;\n  let password = signup.email.value;\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, email, password)\n    .then((cred) => {\n      //   console.log(cred);\n      signup.reset();\n    })\n    .catch((err) => console.log(err.meesage));\n});\n\n// logout\nconst logout = document.querySelector(\".logout\");\nlogout.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth).catch((err) => console.log(err.message));\n});\n\n// login\nconst login = document.querySelector(\".login\");\nlogin.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  let email = login.email.value;\n  let password = login.email.value;\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, email, password)\n    .then((cred) => {\n      //   console.log(cred);\n      login.reset();\n    })\n    .catch((err) => console.log(err.message));\n});\n\n// suscribing to auth state change\n\nconst unSubAuth = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, (user) => {\n  console.log(\"state change:\", user);\n});\n\n\n//# sourceURL=webpack://firebase-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;