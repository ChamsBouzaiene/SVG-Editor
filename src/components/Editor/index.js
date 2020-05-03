export default class Editor {
  constructor({ targetNode, playGround, eventHandler, selector }) {
    this.targetNode = targetNode;
    this.playGround = playGround;
    this.domNode = this.createEditor();
    this.selector = selector;
    this.svgElements = [];
    this.EditorEventHandler = eventHandler.startListening({
      editor: this.domNode,
      selector: this.selector,
      selectables: this.svgElements
    });
  }
  // [TODO] move SetDimentions to lower Layer
  setDimentions(node, width, height) {
    node.setAttribute("width", width);
    node.setAttribute("height", height);
    return node;
  }

  createEditor() {
    // [TODO] move SetDimentions to lower Layer
    let editor = this.playGround.domNode;
    const { width, height } = this.getEditorParams();
    this.setDimentions(editor, width, height);
    return editor;
  }

  getEditorParams() {
    let width = this.targetNode.offsetWidth - 10;
    let height = this.targetNode.offsetHeight - 10;
    return { width, height };
  }

  addElement({ domNode }) {
    this.svgElements.push(domNode);
    this.playGround.appendElement(domNode);
  }
}
