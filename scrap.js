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
