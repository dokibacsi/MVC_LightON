import LampaElem from "./LampaElem.js";

class Lampak{
    #szuloElem;
    constructor(szuloElem){
        this.#szuloElem = szuloElem;
        const LAMPAELEM = this.#letrehoz(9)
        this.#megjenelit(LAMPAELEM);
        new LampaElem()
    }

    #letrehoz(x){
        let txt = "";
        for (let index = 0; index < x; index++) {
            txt += "<div class='lampa'></div>";
        }
        return txt;
    }

    #megjenelit(txt){
        this.#szuloElem.html(txt);
    }

}

export default Lampak;