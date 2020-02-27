import "./styles.scss";
import Area from "./Shape/Models/SVGArea";
import Editor from "./Editor/index";
import ShapeSelector from "./Selector/ShapeSelector";
import EditorEventHandler from "./Editor/EventHandlers/EditorEventHandler";
import Rect from "./Shape/Models/SVGRect";

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
