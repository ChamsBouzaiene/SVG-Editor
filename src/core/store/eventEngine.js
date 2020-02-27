let subscribers = {};

module.exports = {
  // call the event call back saved in subscribers
  publish(event, data) {
    // if no call back exist for this event return
    if (!subscribers[event]) return;
    // for each call back of this event excute the call back
    subscribers[event].forEach(subscriberCallback => subscriberCallback(data));
  },

  // save call back inside of the callback array of tha event
  subscribe(event, callback) {
    console.log(event, callback);
    // if event dosn't exist intialize it with an empty array
    if (!subscribers[event]) {
      subscribers[event] = [];
    }
    // push callback inside event
    subscribers[event].push(callback);
  }
};
