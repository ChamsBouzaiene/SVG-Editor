import "./styles.scss";
import Area from "./Area.js";
import Editor from "./Editor";
//import SVGElement from "./SVGElement";

let main = document.getElementById("main");
const { domNode } = new Area({});
const editor = new Editor({ targetNode: main, playGround: domNode });

main.appendChild(editor.domNode);
