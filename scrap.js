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
  if (selector.isSameNode(editor.domNode) === false) {
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

// https://github.com/jakesgordon/javascript-state-machine

// https://codeincomplete.com/posts/javascript-game-foundations-state-management/

// https://medium.com/@thebabscraig/javascript-design-patterns-part-2-the-publisher-subscriber-pattern-8fe07e157213

//https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192 
var fsm = new StateMachine({
  init: 'solid',
  transitions: [
    { name: 'melt',     from: 'solid',  to: 'liquid' },
    { name: 'freeze',   from: 'liquid', to: 'solid'  },
    { name: 'vaporize', from: 'liquid', to: 'gas'    },
    { name: 'condense', from: 'gas',    to: 'liquid' }
  ],
  methods: {
    onMelt:     function() { console.log('I melted')    },
    onFreeze:   function() { console.log('I froze')     },
    onVaporize: function() { console.log('I vaporized') },
    onCondense: function() { console.log('I condensed') }
  }
});


pubsub: [
  { event: EVENT.MONSTER_DEATH,      action: function(monster, by, nuke) { this.onMonsterDeath(monster, by, nuke);     } },
  { event: EVENT.GENERATOR_DEATH,    action: function(generator, by)     { this.onGeneratorDeath(generator, by);       } },
  { event: EVENT.DOOR_OPENING,       action: function(door, speed)       { this.onDoorOpening(door, speed);            } },
  { event: EVENT.DOOR_OPEN,          action: function(door)              { this.onDoorOpen(door);                      } },
  { event: EVENT.TREASURE_COLLECTED, action: function(treasure, player)  { this.onTreasureCollected(treasure, player); } },
  { event: EVENT.WEAPON_COLLIDE,     action: function(weapon, entity)    { this.onWeaponCollide(weapon, entity);       } },
  { event: EVENT.PLAYER_COLLIDE,     action: function(player, entity)    { this.onPlayerCollide(player, entity);       } },
  { event: EVENT.MONSTER_COLLIDE,    action: function(monster, entity)   { this.onMonsterCollide(monster, entity);     } },
  { event: EVENT.PLAYER_NUKE,        action: function(player)            { this.onPlayerNuke(player);                  } },
  { event: EVENT.PLAYER_FIRE,        action: function(player)            { this.onPlayerFire(player);                  } },
  { event: EVENT.MONSTER_FIRE,       action: function(monster)           { this.onMonsterFire(monster);                } },
  { event: EVENT.PLAYER_EXITING,     action: function(player, exit)      { this.onPlayerExiting(player, exit);         } },
  { event: EVENT.PLAYER_EXIT,        action: function(player)            { this.onPlayerExit(player);                  } },
  { event: EVENT.FX_FINISHED,        action: function(fx)                { this.onFxFinished(fx);                      } },
  { event: EVENT.PLAYER_DEATH,       action: function(player)            { this.onPlayerDeath(player);                 } }
],