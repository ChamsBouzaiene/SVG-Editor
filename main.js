import "./styles.scss";
import Area from "./Area.js";
import Editor from "./Editor";
import ShapeSelector from "./ShapeSelector";
import EditorEventHandler from "./EditorEventHandler";
import Rect from "./Rect";
let main = document.getElementById("main");
const area = new Area({});
const selector = new ShapeSelector("outline");
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

const state = {};

const stateMachine = {};
