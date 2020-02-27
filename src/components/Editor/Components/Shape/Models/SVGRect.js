import SVGElement from "./SVGElement";

export default class Rect extends SVGElement {
  constructor({ posX, posY }) {
    super({ type: "rect", posX, posY });
  }
}
