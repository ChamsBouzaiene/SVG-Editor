import SVGElementModifier from "./SVGElementModifier";

export default class EditorEventHandler {
  constructor() {
    this.editor;
    this.selector;
    this.selected;
    this.offset = { x: 0, y: 0 };
  }

  startListening({ editor, selector }) {
    this.editor = editor;
    this.selector = selector;
    this.handleEditorEvents();
  }

  handleEditorEvents() {
    this.handleElementsHover();
    this.handleElementSelect();
    this.handleMoveElement();
    this.handleElementDeselect();
  }

  handleElementsHover() {
    this.editor.addEventListener("mouseover", ({ target }) => {
      SVGElementModifier.toggelHoveredElement({ handler: this, target });
    });
  }

  getElementPositionRelativeToCursor() {}

  handleElementSelect() {
    this.editor.addEventListener("mousedown", event => {
      SVGElementModifier.selectElement({ handler: this, event });
    });
  }

  handleElementDeselect() {
    this.editor.addEventListener("mouseup", event => {
      SVGElementModifier.deselectElement({ handler: this });
    });
  }

  handleMoveElement() {
    this.editor.addEventListener("mousemove", event => {
      SVGElementModifier.moveSelectedElement({ handler: this, event });
    });
  }
}
