import Component from "./Component.js";
import ToggleButton from "./ToggleButton.js";

export default class Menu extends Component {
  #menuContainer;
  #isOpen = false;

  constructor(elementId) {
    super(elementId);

    const menuButton = new ToggleButton("#menu-button");

    menuButton.onClick((value) => {
      this.#isOpen = !this.#isOpen;
      this.#isOpen ? this.open() : this.close();

      menuButton.toggle();
    });
    menuButton.toggle();

    this.#menuContainer = this.element.querySelector("#menu-container");
  }

  open() {
    this.#menuContainer.style.transform = "scaleY(1)";
  }

  close() {
    this.#menuContainer.style.transform = "scaleY(0)";
  }
}
