import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    let element = document.getElementById("emojis");
    let p = document.createElement("p");
    p.innerText = emojis;
    element.appendChild(p);
  }

  addBananas() {
    let newArr = this.emojis.map(el => el+this.banana);
    this.setEmojis(newArr);
  }
}
