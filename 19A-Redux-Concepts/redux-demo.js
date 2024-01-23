const redux = require("redux");

// (2) defines reducer function to mutate current state
function counterReducer(currState = { counter: 0 }, action) {
  let newStateValue = currState.counter;
  if (action.type === "increment") {
    newStateValue += 1;
  } else if (action.type === "decrement") {
    newStateValue -= 1;
  }
  return {
    counter: newStateValue,
  };
}

// (1) creates Redux store
const store = redux.createStore(counterReducer);

// (3) defines subscription function
function counterSubscriber() {
  const currentState = store.getState();
  console.log(currentState);
}

// (4) subscribes subscription function to Redux store
store.subscribe(counterSubscriber);

// (5) dispatches action to store which calls reducer and then executes (notifies) subscribed function
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
