const fetch = require("node-fetch");

class WebClient {
    constructor() {}

    /**
     * request
     * @param {string} method
     * @param {string} url
     * @param {string} auth
     */

    async request(method, url, auth) {
        const res = await fetch(url, {
            headers: {
                "Authorization": auth
            },
            method: method
        });

        if (res.statusCode === 401) return new Error("Unauthorized. Make sure you pass an auth token!");

        const body = await res.body;

        return body;
    }
}

module.exports = WebClient;