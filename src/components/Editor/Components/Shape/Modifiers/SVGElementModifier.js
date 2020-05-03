export default class SVGElementModifier {
  constructor() {}

  static moveSelectedElement({ handler, event }) {
    const { state, selected, selector, editor, offset } = handler;
    const { clientX, clientY } = event;
    if (selected && state === "toggled") {
      if (selected.tagName === "circle") {
        selected.setAttribute("cx", clientX + offset.x);
        selected.setAttribute("cy", clientY + offset.y);
      } else {
        selected.setAttribute("x", clientX + offset.x);
        selected.setAttribute("y", clientY + offset.y);
        selector.updateSelection(selected, editor);
      }
      selector.updateSelection(selected);
    }
  }
  static deselectElement({ handler }) {
    SVGElementModifier.changeElementColor(handler.selected, "black");
    handler.selected = null;
  }

  static toggelHoveredElement({ handler, target }) {
    return handler.selector.updateSelection(target, handler.editor);
  }

  static changeElementColor(element, color) {
    element.style.fill = color;
  }

  static selectElement({ handler, event }) {
    let { target, clientX, clientY } = event;
    const { selector, editor } = handler;
    if (selector.isSelectable(target, editor)) {
      handler.offset.x = parseFloat(target.getAttribute("x")) - clientX;
      handler.offset.y = parseFloat(target.getAttribute("y")) - clientY;
      SVGElementModifier.changeElementColor(target, "deepskyblue");
    }
  }
}
