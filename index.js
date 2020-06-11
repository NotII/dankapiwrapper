    const DankJS = require('./lib/DankJSClient');

    function Dank(token) {
        return new dank(token);
    }

    Dank.Memer = DankJSClient;
    Dank.version = require('./package.json').version;

    module.exports = DankJSClient;
