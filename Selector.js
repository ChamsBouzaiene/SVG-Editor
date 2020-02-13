export default class Selector {
  constructor(id) {
    this.id = id;
    this.selectorElem = document.getElementById(this.id);
  }
  // check if selected element is an svg inside area not the entire area
  isSelectable(element, area) {
    if (element.isSameNode(area)) {
      return false;
    }
    return true;
  }

  toggleSelectionOverElement(element) {
    let bound = element.getBoundingClientRect();
    const { style } = this.selectorElem;
    style.left = bound.left + "px";
    style.top = bound.top + "px";
    style.width = bound.width + "px";
    style.height = bound.height + "px";
    style.display = "block";
  }

  updateSelection(element, area) {
    if (this.isSelectable(element, area)) {
      return this.toggleSelectionOverElement(element);
    }
    return this.hideSelection();
  }

  hideSelection() {
    this.selectorElem.style.display = "none";
  }
}
