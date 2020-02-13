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
    console.log(this);
    this.editor.addEventListener("mouseover", ({ target }) => {
      return this.selector.updateSelection(target, this.editor);
    });
  }

  getElementPositionRelativeToCursor() {}

  handleElementSelect() {
    let {
      editor: { domNode },
      selector,
      offset
    } = this;

    this.editor.addEventListener("mousedown", event => {
      let { target, clientX, clientY } = event;
      if (this.selector.isSelectable(target, domNode)) {
        this.offset.x = parseFloat(target.getAttribute("x")) - clientX;
        this.offset.y = parseFloat(target.getAttribute("y")) - clientY;
        this.selected = target;
      }
    });
  }

  handleElementDeselect() {
    this.editor.addEventListener("mouseup", event => {
      this.selected = null;
    });
  }

  handleMoveElement() {
    let { offset, selector } = this;

    this.editor.addEventListener("mousemove", event => {
      const { clientX, clientY } = event;

      if (this.selected) {
        if (this.selected.tagName === "circle") {
          this.selected.setAttribute("cx", clientX + offset.x);
          this.selected.setAttribute("cy", clientY + offset.y);
        } else {
          this.selected.setAttribute("x", clientX + offset.x);
          this.selected.setAttribute("y", clientY + offset.y);
          selector.updateSelection(this.selected, this.editor);
        }
        selector.updateSelection(this.selected);
      }
    });
  }
}
