import "./styles.scss";
import Area from "./Area.js";
import Editor from "./Editor";
import Selector from "./Selector";
import EditorEventHandler from "./EditorEventHandler";
// import SVGElement from "./SVGElement";
import Rect from "./Rect";
let main = document.getElementById("main");
const area = new Area({});
const selector = new Selector("outline");
const editorEventHandler = new EditorEventHandler();
const editor = new Editor({
  targetNode: main,
  playGround: area,
  selector,
  eventHandler: editorEventHandler
});

// test phase
const testRect = new Rect({});
const testRect2 = new Rect({ posX: 150, posY: 200 });
editor.addElement(testRect);
editor.addElement(testRect2);

main.appendChild(editor.domNode);
// impliment in editor

//editorEventHandler.handleEditorEvents();
