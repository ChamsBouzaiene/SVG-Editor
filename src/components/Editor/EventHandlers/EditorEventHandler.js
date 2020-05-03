import SVGElementModifier from "../Components/Shape/Modifiers/SVGElementModifier";

var div = document.getElementById("div"),
  x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0;

function reCalc() {
  var x3 = Math.min(x1, x2);
  var x4 = Math.max(x1, x2);
  var y3 = Math.min(y1, y2);
  var y4 = Math.max(y1, y2);
  div.style.left = x3 + "px";
  div.style.top = y3 + "px";
  div.style.width = x4 - x3 + "px";
  div.style.height = y4 - y3 + "px";
  return {
    x: x3,
    y: x4,
    width: x4 - x3,
    height: y4 - y3,
  };
}

// DragSelect and Select Multiple elemenets and toggle them
// new DragSelect({
//   area: "",
//   exception: "selector class",
//   selected: e => console.log(selectedElements) // Array Of Selected Elements
// });

// // Select single Element
// new Selector({
//   area: "",
//   selectedElement: e => console.log(e)  // Selected Element
// });

// new Shape{(
//   sfd:  "",
//   sf:  ""
// )}

function isElementInsideSelectionArea(selectable, selectionRect) {
  const rect = selectable.getBoundingClientRect();
  const elementRect = {
    y: rect.top,
    x: rect.left,
    h: rect.height,
    w: rect.width,
  };
  if (
    selectionRect.x < elementRect.x + elementRect.w &&
    selectionRect.x + selectionRect.w > elementRect.x &&
    selectionRect.y < elementRect.y + elementRect.h &&
    selectionRect.h + selectionRect.y > elementRect.y
  ) {
    return true; // collision detected!
  } else {
    return false;
  }
}

function handleSelecttion(elemenet) {
  console.log(elemenet);
}

export default class EditorEventHandler {
  constructor(selectables) {
    this.editor;
    this.selector;
    this.selected;
    this.state;
    this.offset = { x: 0, y: 0 };
    this.setecting = "false";
  }

  startListening({ editor, selector, selectables }) {
    this.editor = editor;
    this.selector = selector;
    this.selectables = selectables;
    this.handleEditorEvents();
  }

  // call the eventListners
  handleEditorEvents() {
    this.handleElementsHover();
    this.handleEditorClick();
    this.handleMoveElement();
    this.handleElementDeselect();
  }

  // class Tools

  // check that the element is not the area
  isEditorSVGElement(element) {
    if (element.id !== "area") {
      return true;
    }
    return false;
  }

  // editor events handlers

  handleElementsHover() {
    this.editor.addEventListener("mouseover", ({ target }) => {
      console.log("mouseover");
      SVGElementModifier.toggelHoveredElement({ handler: this, target });
    });
  }

  getElementPositionRelativeToCursor() {}

  handleElementSelect(event) {
    SVGElementModifier.selectElement({ handler: this, event });
    this.selected = event.target;
  }

  handleEditorClick() {
    this.editor.addEventListener("mousedown", (event) => {
      let clickedElement = event.target;
      if (this.isEditorSVGElement(clickedElement)) {
        if (this.selected) {
          SVGElementModifier.deselectElement({ handler: this });
        }
        this.state = "toggled";
        this.handleElementSelect(event);
        console.log(clickedElement, "element selected ");
      } else {
        if (this.selected) {
          SVGElementModifier.deselectElement({ handler: this });
        }
        this.selecting = true;
        if (this.selecting) {
          div.style.display = "block";
          x1 = event.clientX;
          y1 = event.clientY;
          reCalc();
        }
      }
    });
  }

  handleElementDeselect() {
    document.addEventListener("mouseup", (event) => {
      if (this.selected) {
        this.state = "selected";
        //SVGElementModifier.deselectElement({ handler: this });
      }
      this.setecting = false;
      div.style.display = "none";
    });
  }

  handleMoveElement() {
    this.editor.addEventListener("mousemove", (event) => {
      console.log("mousemove");
      SVGElementModifier.moveSelectedElement({ handler: this, event });
      if (this.selecting && !this.selected) {
        let selectionArea = reCalc();
        this.selectables.forEach((selectable) => {
          if (isElementInsideSelectionArea(selectable, selectionArea)) {
            handleSelecttion(selectable);
          }
        });
        console.log(this.selecting);
        x2 = event.clientX;
        y2 = event.clientY;
      }
    });
  }
}
