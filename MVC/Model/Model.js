class Model {
  #allapot;
  #index;
  #lista;
  constructor(index) {
    this.#allapot = false;
    this.#index = index;
    this.#lista = [
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      true,
    ];
    this.setAllapot(this.#index);
  }

  setAllapot(index) {
    if (this.#allapot === false) {
      this.#allapot = true;
    } else {
      this.#allapot = false;
    }
    this.#lista[index] = this.#allapot;
    console.log(this.#lista);
  }
}

export default Model;
