export default class SVGElement {
  constructor({ width, height, posX, posY, id, type }) {
    this.width = width || 100;
    this.height = height || 100;
    this.posX = posX || 100;
    this.posY = posY || 100;
    this.id = id || "svgElement";
    this.type = type || "svg";
    this.domNode = this.createSVGDOMNode(type);
  }

  createSVGDOMNode() {
    let { height, width, posY, posX, id, type } = this;
    let svg = document.createElementNS("http://www.w3.org/2000/svg", type);
    svg.setAttribute("style", "border: 1px solid black;box-sizing: border-box");
    //svg.setAttribute("style", "box-sizing: border-box");
    svg.setAttribute("id", id);
    svg.setAttribute("x", posX);
    svg.setAttribute("y", posY);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      "xmlns:xlink",
      "http://www.w3.org/1999/xlink"
    );

    return svg;
  }
}
