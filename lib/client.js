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

    /**
     * confusedcat
     * @param {string} text
     */

    async confusedcat(text) {
        return api.request("GET", `${baseApiURL}/confusedcat?text=${text}`, this.token);
    }

    /**
     * corporate
     * @param {string} avatar1
     */

    async corporate(avatar1) {
        return api.request("GET", `${baseApiURL}/corporate?avatar1=${avatar1}`, this.token);
    }

    /**
     * crab
     * @param {string} text
     */

    async crab(text) {
        return api.request("GET", `${baseApiURL}/crab?text=${text}`, this.token);
    }

    /**
     * cry
     * @param {string} text
     */

    async cry(text) {
        return api.request("GET", `${baseApiURL}/cry?text=${text}`, this.token);
    }

    /**
     * dab
     * @param {string} avatar1
     */

    async dab(avatar1) {
        return api.request("GET", `${baseApiURL}/dab?avatar1=${avatar1}`, this.token);
    }

    /**
     * dank
     * @param {string} avatar1
     */

    async dank(avatar1) {
        return api.request("GET", `${baseApiURL}/dank?avatar1=${avatar1}`, this.token);
    }

    /**
     * deepfry
     * @param {string} avatar1
     */

    async deepfry(avatar1) {
        return api.request("GET", `${baseApiURL}/deepfry?avatar1=${avatar1}`, this.token);
    }

    /**
     * delete
     * @param {string} avatar1
     */

    async delete(avatar1) {
        return api.request("GET", `${baseApiURL}/delete?avatar1=${avatar1}`, this.token);
    }

    /**
     * disability
     * @param {string} avatar1
     */

    async disability(avatar1) {
        return api.request("GET", `${baseApiURL}/disability?avatar1=${avatar1}`, this.token);
    }

    /**
     * doglemon
     * @param {string} text
     */

    async doglemon(text) {
        return api.request("GET", `${baseApiURL}/doglemon?text=${text}`, this.token);
    }

    /**
     * door
     * @param {string} avatar1
     */

    async door(avatar1) {
        return api.request("GET", `${baseApiURL}/door?avatar1=${avatar1}`, this.token);
    }

    /**
     * egg
     * @param {string} avatar1
     */

    async egg(avatar1) {
        return api.request("GET", `${baseApiURL}/egg?avatar1=${avatar1}`, this.token);
    }

    /**
     * excuseme
     * @param {string} text
     */

    async excuseme(text) {
        return api.request("GET", `${baseApiURL}/excuseme?text=${text}`, this.token);
    }

    /**
     * expanddong
     * @param {string} text
     */

    async expanddong(text) {
        return api.request("GET", `${baseApiURL}/expanddong?text=${text}`, this.token);
    }

    /**
     * facts
     * @param {string} text
     */

    async facts(text) {
        return api.request("GET", `${baseApiURL}/facts?text=${text}`, this.token);
    }

    /**
     * failure
     * @param {string} avatar1
     */

    async failure(avatar1) {
        return api.request("GET", `${baseApiURL}/failure?avatar1=${avatar1}`, this.token);
    }

    /**
     * fakenews
     * @param {string} avatar1
     */

    async fakenews(avatar1) {
        return api.request("GET", `${baseApiURL}/fakenews?avatar1=${avatar1}`, this.token);
    }

    /**
     * fedora
     * @param {string} avatar1
     */

    async fedora(avatar1) {
        return api.request("GET", `${baseApiURL}/fedora?avatar1=${avatar1}`, this.token);
    }

    /**
     * floor
     * @param {string} avatar1
     * @param {string} text
     */

    async floor(avatar1, text) {
        return api.request("GET", `${baseApiURL}/floor?avatar1=${avatar1}&text=${text}`, this.token);
    }

    /**
     * fuck
     * @param {string} text
     */

    async fuck(text) {
        return api.request("GET", `${baseApiURL}/fuck?text=${text}`, this.token);
    }

    /**
     * garfield
     * @param {string} avatar1
     * @param {string} text
     */

    async garfield(avatar1, text) {
        return api.request("GET", `${baseApiURL}/garfield?avatar1=${avatar1}&text=${text}`, this.token);
    }

    /**
     * gay
     * @param {string} avatar1
     */

    async gay(avatar1) {
        return api.request("GET", `${baseApiURL}/gay?avatar1=${avatar1}`, this.token);
    }

    /**
     * goggles
     * @param {string} avatar1
     */

    async goggles(avatar1) {
        return api.request("GET", `${baseApiURL}/goggles?avatar1=${avatar1}`, this.token);
    }

    /**
     * hitler
     * @param {string} avatar1
     */

    async hitler(avatar1) {
        return api.request("GET", `${baseApiURL}/hitler?avatar1=${avatar1}`, this.token);
    }

    /**
     * humansgood
     * @param {string} text
     */

    async humansgood(text) {
        return api.request("GET", `${baseApiURL}/humansgood?text=${text}`, this.token);
    }

    /**
     * inator
     * @param {string} text
     */

    async inator(text) {
        return api.request("GET", `${baseApiURL}/inator?text=${text}`, this.token);
    }

    /**
     * invert
     * @param {string} avatar1
     */

    async invert(avatar1) {
        return api.request("GET", `${baseApiURL}/invert?avatar1=${avatar1}`, this.token);
    }

    /**
     * ipad
     * @param {string} avatar1
     */

    async ipad(avatar1) {
        return api.request("GET", `${baseApiURL}/ipad?avatar1=${avatar1}`, this.token);
    }

    /**
     * jail
     * @param {string} avatar1
     */

    async jail(avatar1) {
        return api.request("GET", `${baseApiURL}/jail?avatar1=${avatar1}`, this.token);
    }

    /**
     * justpretending
     * @param {string} text
     */

    async justpretending(text) {
        return api.request("GET", `${baseApiURL}/justpretending?text=${text}`, this.token);
    }

    /**
     * kimborder
     * @param {string} avatar1
     */

    async kimborder(avatar1) {
        return api.request("GET", `${baseApiURL}/kimborder?avatar1=${avatar1}`, this.token);
    }

    /**
     * knowyourlocation
     * @param {string} text
     */

    async knowyourlocation(text) {
        return api.request("GET", `${baseApiURL}/knowyourlocation?text=${text}`, this.token);
    }

    /**
     * kowalski
     * @param {string} text
     */

    async kowalski(text) {
        return api.request("GET", `${baseApiURL}/kowalski?text=${text}`, this.token);
    }

    /**
     * laid
     * @param {string} avatar1
     */

    async laid(avatar1) {
        return api.request("GET", `${baseApiURL}/laid?avatar1=${avatar1}`, this.token);
    }

    /**
     * letmein
     * @param {string} text
     */

    async letmein(text) {
        return api.request("GET", `${baseApiURL}/letmein?text=${text}`, this.token);
    }

    /**
     * lick
     * @param {string} text
     */

    async lick(text) {
        return api.request("GET", `${baseApiURL}/lick?text=${text}`, this.token);
    }

    /**
     * madethis
     * @param {string} avatar1
     * @param {string} avatar2
     */

    async madethis(avatar1, avatar2) {
        return api.request("GET", `${baseApiURL}/madethis?avatar1=${avatar1}&avatar2=${avatar2}`, this.token);
    }

    /**
     * magik
     * @param {string} avatar1
     */

    async magik(avatar1) {
        return api.request("GET", `${baseApiURL}/magik?avatar1=${avatar1}`, this.token);
    }

    /**
     * master
     * @param {string} text
     */

    async master(text) {
        return api.request("GET", `${baseApiURL}/master?text=${text}`, this.token);
    }

    /**
     * meme
     * @param {string} avatar1
     * @param {string} top_text
     * @param {string} bottom_text
     * @param {string} color
     * @param {string} font
     */

    async meme(avatar1, top_text, bottom_text, color, font) {
        return api.request("GET", `${baseApiURL}/master?avatar1=${avatar1}&top_text=${top_text}&bottom_text=${bottom_text}&color=${color}&font=${font}`, this.token);
    }

    /**
     * note
     * @param {string} text
     */

    async note(text) {
        return api.request("GET", `${baseApiURL}/note?text=${text}`, this.token);
    }

    /**
     * nothing
     * @param {string} text
     */

    async nothing(text) {
        return api.request("GET", `${baseApiURL}/nothing?text=${text}`, this.token);
    }

    /**
     * ohno
     * @param {string} text
     */

    async ohno(text) {
        return api.request("GET", `${baseApiURL}/ohno?text=${text}`, this.token);
    }

    /**
     * piccolo
     * @param {string} text
     */

    async piccolo(text) {
        return api.request("GET", `${baseApiURL}/piccolo?text=${text}`, this.token);
    }

    /**
     * plan
     * @param {string} text
     */

    async plan(text) {
        return api.request("GET", `${baseApiURL}/plan?text=${text}`, this.token);
    }

    /**
     * presentation
     * @param {string} text
     */

    async presentation(text) {
        return api.request("GET", `${baseApiURL}/presentation?text=${text}`, this.token);
    }

    /**
     * quote
     * @param {string} avatar1
     * @param {string} avatar2
     * @param {string} text
     */

    async quote(text) {
        return api.request("GET", `${baseApiURL}/quote?avatar1=${avatar1}&avatar2=${avatar2}&text=${text}`, this.token);
    }

    /**
     * radialblur
     * @param {string} avatar1
     */

    async radialblur(avatar1) {
        return api.request("GET", `${baseApiURL}/radialblur?avatar1=${avatar1}`, this.token);
    }

    /**
     * rip
     * @param {string} avatar1
     */

    async rip(avatar1) {
        return api.request("GET", `${baseApiURL}/rip?avatar1=${avatar1}`, this.token);
    }

    /**
     * roblox
     * @param {string} avatar1
     */

    async roblox(avatar1) {
        return api.request("GET", `${baseApiURL}/roblox?avatar1=${avatar1}`, this.token);
    }

    /**
     * salty
     * @param {string} avatar1
     */

    async salty(avatar1) {
        return api.request("GET", `${baseApiURL}/salty?avatar1=${avatar1}`, this.token);
    }

    /**
     * satan
     * @param {string} avatar1
     */

    async satan(avatar1) {
        return api.request("GET", `${baseApiURL}/satan?avatar1=${avatar1}`, this.token);
    }

    /**
     * savehumanity
     * @param {string} text
     */

    async savehumanity(text) {
        return api.request("GET", `${baseApiURL}/savehumanity?text=${text}`, this.token);
    }

    /**
     * screams
     * @param {string} avatar1
     * @param {string} avatar2
     */

    async screams(avatar1, avatar2) {
        return api.request("GET", `${baseApiURL}/screams?avatar1=${avatar1}&avatar2=${avatar2}`, this.token);
    }

    /**
     * shit
     * @param {string} text
     */

    async shit(text) {
        return api.request("GET", `${baseApiURL}/shit?text=${text}`, this.token);
    }

    /**
     * sickban
     * @param {string} avatar1
     */

    async sickban(avatar1) {
        return api.request("GET", `${baseApiURL}/sickban?avatar1=${avatar1}`, this.token);
    }

    /**
     * slap
     * @param {string} avatar1
     * @param {string} avatar2
     */

    async slap(avatar1, avatar2) {
        return api.request("GET", `${baseApiURL}/slap?avatar1=${avatar1}&avatar2=${avatar2}`, this.token);
    }

    /**
     * slapsroof
     * @param {string} text
     */

    async slapsroof(text) {
        return api.request("GET", `${baseApiURL}/slapsroof?text=${text}`, this.token);
    }

    /**
     * sneakyfox
     * @param {string} text
     */

    async sneakyfox(text) {
        return api.request("GET", `${baseApiURL}/sneakyfox?text=${text}`, this.token);
    }

    /**
     * spank
     * @param {string} avatar1
     * @param {string} avatar2
     */

    async spank(avatar1, avatar2) {
        return api.request("GET", `${baseApiURL}/spank?avatar1=${avatar1}&avatar2=${avatar2}`, this.token);
    }

    /**
     * stroke
     * @param {string} text
     */

    async stroke(text) {
        return api.request("GET", `${baseApiURL}/stroke?text=${text}`, this.token);
    }

    /**
     * surprised
     * @param {string} text
     */

    async surprised(text) {
        return api.request("GET", `${baseApiURL}/surprised?text=${text}`, this.token);
    }

    /**
     * sword
     * @param {string} username1
     * @param {string} text
     */

    async sword(text, username1) {
        return api.request("GET", `${baseApiURL}/sword?text=${text}&username1=${username1}`, this.token);
    }

    /**
     * thesearch
     * @param {string} text
     */

    async thesearch(text) {
        return api.request("GET", `${baseApiURL}/thesearch?text=${text}`, this.token);
    }

    /**
     * trash
     * @param {string} avatar1
     */

    async trash(avatar1) {
        return api.request("GET", `${baseApiURL}/trash?avatar1=${avatar1}`, this.token);
    }

    /**
     * trigger
     * @param {string} avatar1
     */

    async trigger(avatar1) {
        return api.request("GET", `${baseApiURL}/trigger?avatar1=${avatar1}`, this.token);
    }

    /**
     * tweet
     * @param {string} avatar1
     * @param {string} username1
     * @param {string} text
     * @param {string} username2
     * @param {string} altstyle
     */

    async tweet(avatar1, username1, text, username2, altstyle) {
        return api.request("GET", `${baseApiURL}/tweet?avatar1=${avatar1}&username1=${username1}&text=${text}&username2=${username2 === "" ? username1 : username2}&altstyle=${altstyle === "" ? "" : altstyle}`, this.token);
    }

    /**
     * ugly
     * @param {string} avatar1
     */

    async ugly(avatar1) {
        return api.request("GET", `${baseApiURL}/ugly?avatar1=${avatar1}`, this.token);
    }

    /**
     * unpopular
     * @param {string} avatar1
     * @param {string} text
     */

    async unpopular(avatar1) {
        return api.request("GET", `${baseApiURL}/unpopular?avatar1=${avatar1}&text=${text}`, this.token);
    }

    /**
     * violence
     * @param {string} text
     */

    async violence(text) {
        return api.request("GET", `${baseApiURL}/violence?text=${text}`, this.token);
    }

    /**
     * violentsparks
     * @param {string} text
     */

    async violentsparks(text) {
        return api.request("GET", `${baseApiURL}/violentsparks?text=${text}`, this.token);
    }

    /**
     * vr
     * @param {string} text
     */

    async vr(text) {
        return api.request("GET", `${baseApiURL}/vr?text=${text}`, this.token);
    }

    /**
     * walking
     * @param {string} text
     */

    async walking(text) {
        return api.request("GET", `${baseApiURL}/walking?text=${text}`, this.token);
    }

    /**
     * wanted
     * @param {string} avatar1
     */

    async wanted(avatar1) {
        return api.request("GET", `${baseApiURL}/wanted?avatar1=${avatar1}`, this.token);
    }

    /**
     * warp
     * @param {string} avatar1
     */

    async warp(avatar1) {
        return api.request("GET", `${baseApiURL}/warp?avatar1=${avatar1}`, this.token);
    }

    /**
     * whodidthis
     * @param {string} avatar1
     */

    async whodidthis(avatar1) {
        return api.request("GET", `${baseApiURL}/whodidthis?avatar1=${avatar1}`, this.token);
    }

    /**
     * whothisis
     * @param {string} avatar1
     * @param {string} text
     */

    async whothisis(avatar1) {
        return api.request("GET", `${baseApiURL}/whothisis?avatar1=${avatar1}&text=${text}`, this.token);
    }

    /**
     * yomomma
     */

    async yomomma() {
        return api.request("GET", `${baseApiURL}/yomomma`, this.token);
    }

    /**
     * youtube
     * @param {string} avatar1
     * @param {string} username1
     * @param {string} text
     */

    async youtube(avatar1, username1, text) {
        return api.request("GET", `${baseApiURL}/youtube?avatar1=${avatar1}&username1=${username1}&text=${text}`, this.token);
    }
}

module.exports = Dank;