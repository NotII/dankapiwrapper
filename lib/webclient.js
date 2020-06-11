const fetch = require("node-fetch");

class WebClient {
    constructor() {}

    /**
     * request
     * @param {string} method
     * @param {string} url
     * @param {string} auth
     */

    request = async (method, url, auth) => {
        const data = await fetch(url, {
            headers: {
                "Authorization": auth
            },
            method: method
        });

        if (data.statusCode === 401) return new Error("Unauthorized. Make sure you pass auth token!");

        return data.json();
    }
}

module.exports = WebClient;