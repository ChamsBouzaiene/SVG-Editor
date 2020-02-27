const eventEngine = require("./eventEngine");

let Store = {
  state: {
    shapes: [
      {
        type: "RECT",
        cords: {
          x: "100",
          y: "150"
        },
        color: "BLACK"
      },
      {
        type: "RECT",
        cords: {
          x: "200",
          y: "190"
        },
        color: "BLACK"
      }
    ]
  },

  setState(targetedState, newState) {
    this.state["targetedState"] = newState;
  },

  mutations: {
    addShape: shape => {
      Store.state.shapes.push(shape);
      eventEngine.publish("onAddSVG", shape);
      //   event.publish("shapeAdded", shape); // Publish event on the name of mutaion
    },
    removeShape() {}
  }
};

// Add event Emitions on Actions

// Encapsulate A Crud
export default Store;
