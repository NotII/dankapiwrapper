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

    /**
     * aborted
     * @param {string} avatar1
     */

    async aborted(avatar1) {
        return api.request("GET", `${baseApiURL}/aborted?avatar1=${avatar1}`, this.token);
    }

    /**
     * affect
     * @param {string} avatar1
     */

    async affect(avatar1) {
        return api.request("GET", `${baseApiURL}/affect?avatar1=${avatar1}`, this.token);
    }

    /**
     * airpods
     * @param {string} avatar1
     */

    async airpods(avatar1) {
        return api.request("GET", `${baseApiURL}/airpods?avatar1=${avatar1}`, this.token);
    }

    /**
     * america
     * @param {string} avatar1
     */

    async america(avatar1) {
        return api.request("GET", `${baseApiURL}/america?avatar1=${avatar1}`, this.token);
    }

    /**
     * armor
     * @param {string} text
     */

    async armor(text) {
        return api.request("GET", `${baseApiURL}/armor?text=${text}`, this.token);
    }

    /**
     * balloon
     * @param {string} text
     */

    async balloon(text) {
        return api.request("GET", `${baseApiURL}/balloon?text=${text}`, this.token);
    }

    /**
     * bed
     * @param {string} avatar1
     * @param {string} avatar2
     */

    async bed(avatar1, avatar2) {
        return api.request("GET", `${baseApiURL}/bed?avatar1=${avatar1}&avatar2=${avatar2}`, this.token);
    }

    /**
     * bongocat
     * @param {string} avatar1
     */

    async bongocat(avatar1) {
        return api.request("GET", `${baseApiURL}/bongocat?avatar1=${avatar1}`, this.token);
    }

    /**
     * boo
     * @param {string} text
     */

    async boo(text) {
        return api.request("GET", `${baseApiURL}/boo?text=${text}`, this.token);
    }

    /**
     * brain
     * @param {string} text
     */

    async brain(text) {
        return api.request("GET", `${baseApiURL}/brain?text=${text}`, this.token);
    }

    /**
     * brazzers
     * @param {string} avatar1
     */

    async brazzers(avatar1) {
        return api.request("GET", `${baseApiURL}/brazzers?avatar1=${avatar1}`, this.token);
    }

    /**
     * brazzers
     * @param {string} avatar1
     * @param {string} username1
     * @param {string} text
     */

    async brazzers(avatar1, username1, text) {
        return api.request("GET", `${baseApiURL}/byemom?avatar1=${avatar1}&username1=${username1}&text=${text}`, this.token);
    }

    /**
     * cancer
     * @param {string} avatar1
     */

    async cancer(avatar1) {
        return api.request("GET", `${baseApiURL}/cancer?avatar1=${avatar1}`, this.token);
    }

    /**
     * changemymind
     * @param {string} text
     */

    async changemymind(text) {
        return api.request("GET", `${baseApiURL}/changemymind?text=${text}`, this.token);
    }

    /**
     * cheating
     * @param {string} text
     */

    async cheating(text) {
        return api.request("GET", `${baseApiURL}/cheating?text=${text}`, this.token);
    }

    /**
     * citation
     * @param {string} text
     */

    async citation(text) {
        return api.request("GET", `${baseApiURL}/citation?text=${text}`, this.token);
    }

    /**
     * communism
     * @param {string} avatar1
     */

    async communism(avatar1) {
        return api.request("GET", `${baseApiURL}/communism?avatar1=${avatar1}`, this.token);
    }


}

module.exports = Dank;