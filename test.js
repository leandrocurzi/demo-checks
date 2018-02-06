let Check = require("./index");

let mockData = Check.get({type:"GET_BY_ID", param: "abc123"});
console.log(mockData);