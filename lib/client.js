const WebClient = require("./webclient")

const api = new WebClient();

const baseApiURL = "https://dankmemer.services/api";

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

    abandon = async (text) => {
        return api.request("GET", `${baseApiURL}/abandon?text=${text}`, this.token);
    }

}

module.exports = Dank;