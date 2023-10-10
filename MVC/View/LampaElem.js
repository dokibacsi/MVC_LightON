class LampaElem {
  #index;
  constructor(index) {
    this.#index = index;
    const esemeny = 'szinez';
    let lElem = $("article > .lampa:last-child");
    this.#setSzin(lElem);
    this.#sajatEsemenyKezelo(esemeny);
  }

  #setSzin(elem) {
    if (this.#index === true) {
      $(elem).css("background-color: 'red'");
    } else {
      $(elem).css("background-color: 'green'");
    }
    return elem;
  }

  getIndex() {
    return this.#index;
  }

  #sajatEsemenyKezelo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}

export default LampaElem;
