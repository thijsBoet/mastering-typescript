"use strict";
exports.__esModule = true;
var axios_1 = require("axios"); // comes with own typescript declaration file index.d.ts
// Can add type declaration with consumer npm install @types/lodash
var lodash_1 = require("lodash"); // without type declaration file
var baseUrl = "https://jsonplaceholder.typicode.com";
lodash_1["default"].sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Get request returns of type User
axios_1["default"]
    .get("".concat(baseUrl, "/users"))
    .then(function (res) { return res.data.forEach(printUser); })["catch"](function (err) { return console.log(err); });
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log('------------------------------');
}
