import Model from "../Model/Model.js";
import Lampak from "../View/Lampak.js";

class Controller {
  constructor() {
    const LAMPATER = $("article");
    this.LAMP = new Lampak(LAMPATER);
    this.MODEL = new Model();
    this.#atFest();
  }

  #atFest() {
    $(window).on("szinez", (event)=>{
        this.MODEL.setAllapot(event.detail.getIndex());
        event.detail.setErtek(this.MODEL.getErtek());
    })
  }
}

export default Controller;
