const DankAPI = require("./lib/client");
const client = new DankAPI("token");
const fs = require("fs");

client.abandon("fuck you dad").then(img => {
    img.pipe(fs.createWriteStream("./img.jpg"))
})