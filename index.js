const DankAPI = require("./lib/client");
const client = new DankAPI("token");
const fs = require("fs");

client.youtube("https://image.shutterstock.com/image-photo/white-ragdoll-cat-pink-coat-600w-1741372145.jpg", "mitch", "testing !!").then(img => {
    img.pipe(fs.createWriteStream("./img.jpg"))
})