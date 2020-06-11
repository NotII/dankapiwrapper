const DankAPI = require("./lib/client");
const client = new DankAPI("token");

console.log(client.abandon("hello"));