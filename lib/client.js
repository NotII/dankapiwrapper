const WebClient = require("./webclient")

const api = new WebClient();

const baseApiURL = "http://104.248.237.82:65535/api";

class Dank {
    /**
     * @constructor
     * @param {string} token Dank Memer API Token
     */

    constructor(token) {
        if (!token) throw new TypeError("No Authorization Token was provided.");
        this.token = token;
    }

    /**
     * abandon
     * @param {string} text
     */

    async abandon(text) {
        return api.request("GET", `${baseApiURL}/abandon?text=${text}`, this.token);
    }

}

module.exports = Dank;