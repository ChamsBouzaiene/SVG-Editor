class component {
  constructor() {
    this.store = this.store || {};
    this.state = {}; // Local State can be accessd in the store throught incapsulation
    this.initState = initState;
    stateMachine = {
      state: this.initState,
      transitions: {},
      dispatch(actionName, ...payload) {
        const actions = this.transitions[this.state];
        const action = this.transitions[this.state][actionName];

        if (action) {
          action.apply(machine, ...payload);
        } else {
          //action is not valid for current state
        }
      },
      changeState(newState) {
        //validate that newState actually exists
        this.state = newState;
      }
    };
  }

  setState() {} // this events of state update triggere store publish

  // this.subscribe(event , fucntion() {}) {

  //}
  subscribeToStore(event, callback) {
    eventEngine.subscribe(event, callback);
  }

  publishToStore() {}

  publishEvent() {}

  stateMachine() {}

  eventHandler() {}

  modifiers() {}
}
