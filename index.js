"use strict";
exports.__esModule = true;
// make a netwrok request to fetch some JSON and print the result
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
/*

1. Http GET request to URL to fetch JSON data
2. We get PROMISE in return
3. Run tsc index.ts in terminal to complie TS
4.

*/
