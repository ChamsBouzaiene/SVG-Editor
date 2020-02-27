export default class SVGElementModifier {
  constructor() {}

  static moveSelectedElement({ handler, event }) {
    const { selected, selector, editor, offset } = handler;
    const { clientX, clientY } = event;
    if (selected) {
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
    handler.selected = null;
  }

  static toggelHoveredElement({ handler, target }) {
    return handler.selector.updateSelection(target, handler.editor);
  }

  static selectElement({ handler, event }) {
    let { target, clientX, clientY } = event;
    const { selector, editor } = handler;
    if (selector.isSelectable(target, editor)) {
      handler.offset.x = parseFloat(target.getAttribute("x")) - clientX;
      handler.offset.y = parseFloat(target.getAttribute("y")) - clientY;
      handler.selected = target;
    }
  }
}
