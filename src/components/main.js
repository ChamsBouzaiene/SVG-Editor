import "./styles.scss";
import Area from "./Editor/Components/Shape/Models/SVGArea";
import Editor from "./Editor/index";
import ShapeSelector from "./Editor/Components/Selector/ShapeSelector";
import EditorEventHandler from "./Editor/EventHandlers/EditorEventHandler";
import Rect from "./Editor/Components/Shape/Models/SVGRect";
import { sideBarDomNode } from "./SideBar";
import Store from "../core/store/";
const eventEngine = require("../core/store/eventEngine");

let main = document.getElementById("main");
const area = new Area({ id: "area" });
const selector = new ShapeSelector("outline");
const editorEventHandler = new EditorEventHandler();
const editor = new Editor({
  targetNode: main,
  playGround: area,
  selector,
  eventHandler: editorEventHandler,
});

// test phase

Store.state.shapes.forEach((shape) => {
  let newSVG = new Rect({ posX: shape.cords.x, posY: shape.cords.y });
  editor.addElement(newSVG);
});

eventEngine.subscribe("onAddSVG", (shape) => {
  let newSVG = new Rect({ posX: shape.cords.x, posY: shape.cords.y });
  editor.addElement(newSVG);
});

// const testRect = new Rect({});
// const testRect2 = new Rect({ posX: 150, posY: 200 });

// editor.addElement(testRect);
// editor.addElement(testRect2);

main.appendChild(editor.domNode);

console.log(Store.state.shapes);
