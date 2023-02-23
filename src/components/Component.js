export default class Component {
  element;

  constructor(elementID = null) {
    this.element = document.querySelector(elementID);
  }
}
