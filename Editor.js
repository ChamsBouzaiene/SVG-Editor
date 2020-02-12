export default class Editor {
  constructor({ targetNode, playGround }) {
    this.targetNode = targetNode;
    this.playGround = playGround;
    this.domNode = this.createEditor();
  }

  setDimentions(node, width, height) {
    node.setAttribute("width", width);
    node.setAttribute("height", height);
    return node;
  }

  createEditor() {
    let editor = this.playGround;
    const { width, height } = this.getEditorParams();
    this.setDimentions(editor, width, height);
    return editor;
  }

  getEditorParams() {
    let width = this.targetNode.offsetWidth - 10;
    let height = this.targetNode.offsetHeight - 10;
    return { width, height };
  }
}
