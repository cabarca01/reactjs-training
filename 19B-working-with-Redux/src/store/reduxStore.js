import { createStore } from "redux";

function counterReducer(currState = { counter: 0 }, action) {
  let newStateValue = currState.counter;
  if (action.type === "increment") {
    newStateValue += 1;
  } else if (action.type === "decrement") {
    newStateValue -= 1;
  } else if (action.type === "increaseBy") {
    newStateValue += action.step
  } 
  return {
    counter: newStateValue,
  };
}

const store = createStore(counterReducer);
export default store;
