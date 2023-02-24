import Component from "./Component.js";
import ListButton from "./ListButton.js";
import ToggleButton from "./ToggleButton.js";

export default class Menu extends Component {
  #menuData;
  #menuContainer;
  #menuListsContainer;
  #isOpen = false;

  constructor(elementId, data) {
    super(elementId);

    const menuButton = new ToggleButton("#menu-button");

    menuButton.onClick((value) => {
      this.#isOpen = !this.#isOpen;
      this.#isOpen ? this.open() : this.close();

      menuButton.toggle();
    });
    menuButton.toggle();

    this.#menuContainer = this.element.querySelector("#menu-container");
    this.#menuListsContainer =
      this.#menuContainer.querySelector(".lists-container");
    this.#menuData = data;
  }

  #createList(data) {
    const ul = document.createElement("ul");

    data.forEach((itemData) => {
      const listButton = new ListButton(itemData);

      listButton.onClick(() => {
        // PARA FAZER NA PROXIMA AULA
        if (itemData.type === "folder") {
          this.#createList(itemData.children);
        }
        console.log("clicked: ", itemData);
      });

      ul.appendChild(listButton.element);
    });

    this.#menuListsContainer.appendChild(ul);
  }

  #deleteList(index) {
    this.#menuListsContainer.innerHTML = "";
  }

  open() {
    this.#createList(this.#menuData);
    this.#menuContainer.style.transform = "scaleY(1)";
  }

  close() {
    this.#deleteList();
    this.#menuContainer.style.transform = "scaleY(0)";
  }
}
