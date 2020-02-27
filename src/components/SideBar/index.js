import Store from "../../core/store";

export const sideBarDomNode = document.querySelector(".sidebar");

function appendSVGShapeToEditor(shape) {
  switch (shape) {
    case "rect":
      Store.mutations.addShape({
        type: "RECT",
        cords: {
          x: "310",
          y: "320"
        }
      });
    case "circle":
    case "line":
    case "arrow":
  }
}

function handleSideBarClicked(event) {
  if (event.target.dataset.name) {
    const type = appendSVGShapeToEditor(event.target.dataset.name);
  }
}

sideBarDomNode.addEventListener("click", function(event) {
  handleSideBarClicked(event);
  console.log(event.target.dataset.name);
  console.log(Store.state.shapes);
  console.log(Store);
});
