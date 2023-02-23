import Component from "./Component.js";

export default class RangeBar extends Component {
  #rangeInput;
  #rangeBar;

  constructor(rangeID = null) {
    super(rangeID);

    this.#rangeInput = this.element.querySelector("input[type='range']");
    this.#rangeBar = this.element.querySelector(".range-bar");
  }

  onInput(callback) {
    this.#rangeInput.oninput = () => {
      const value = this.#rangeInput.value;

      this.#rangeBar.style.transform = `scaleX(${value / 100})`;
      callback(value);
    };
  }
}
