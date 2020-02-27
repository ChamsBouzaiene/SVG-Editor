class App {
  constructor() {
    this.editor = editor;
    this.store = store;
    this.rootNode = rootNode;
  }

  run() {
    main.appendChild(editor.domNode);
  }
}
