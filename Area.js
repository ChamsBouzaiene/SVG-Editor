import SVGElement from "./SVGElement";

export default class Area extends SVGElement {
  appendElement(element) {
    this.domNode.appendChild(element);
  }

  setDimentions() {}
}

// let test = new Area();

// console.log(test.domNode);
