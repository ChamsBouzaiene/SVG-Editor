var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("id", "box");
svg.setAttribute("style", "border: 3px solid black");
svg.setAttribute("id", "mySVG");
svg.setAttribute("width", "600");
svg.setAttribute("height", "250");
svg.setAttributeNS(
  "http://www.w3.org/2000/xmlns/",
  "xmlns:xlink",
  "http://www.w3.org/1999/xlink"
);
document.body.appendChild(svg);

let svgElem = document.getElementById("mySVG");

var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//width="300" height="100"
rect.setAttribute("width", "100");
rect.setAttribute("height", "100");
rect.setAttribute("x", "100");
rect.setAttribute("y", "50");
rect.setAttribute("id", "srect");
svgElem.appendChild(rect);
console.log(svgElem);

rect.addEventListener("mouseover", function(event) {
  let target = event.target;
  updateSelection(target);
});

let selection = document.getElementById("selector");

function updateSelection(element) {
  var rect = element.getBoundingClientRect();

  selection.style.left = rect.left + "px";
  selection.style.top = rect.top + "px";
  selection.style.width = rect.width + "px";
  selection.style.height = rect.height + "px";

  selection.style.display = "block";
}

////////////////////

editor.domNode.addEventListener("mousedown", function(event) {
  var target = event.target;
  if (target.isSameNode(editor.domNode) === false) {
    offset.x = parseFloat(target.getAttribute("x")) - event.clientX;
    offset.y = parseFloat(target.getAttribute("y")) - event.clientY;
    selected = target;
  }
});

editor.domNode.addEventListener("mouseup", function(event) {
  selected = null;
});

editor.domNode.addEventListener("mousemove", function(event) {
  if (selected) {
    if (selected.tagName === "circle") {
      selected.setAttribute("cx", event.clientX + offset.x);
      selected.setAttribute("cy", event.clientY + offset.y);
    } else {
      selected.setAttribute("x", event.clientX + offset.x);
      selected.setAttribute("y", event.clientY + offset.y);
      selector.updateSelection(selected, editor.domNode);
    }
    updateSelection(selected);
  }
});

//

class EditorEventsHandler {
  constructor(editor, selector) {
    this.editor = editor;
    this.selector = selector;
    this.handleEditorEvents();
  }

  handleEditorEvents() {
    this.handleElementsHover();
  }

  handleElementsHover() {
    let {
      editor: { domNode },
      selector
    } = this;
    domNode.addEventListener("mouseover", function({ target }) {
      return selector.updateSelection(target, editor.domNode);
    });
  }

  handleElementSelect() {}

  handleElementDeselect() {}

  handleMoveElement() {}
}

let editorEventHandler = new EditorEventsHandler(editor, selector);
