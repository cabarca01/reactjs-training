import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

function counterReducer(currState = initialState, action) {
  let newCounter = currState.counter;
  let newShowCounter = currState.showCounter;
  
  if (action.type === "increment") {
    newCounter += 1;
  } else if (action.type === "decrement") {
    newCounter -= 1;
  } else if (action.type === "increaseBy") {
    newCounter += action.step;
  } else if (action.type === "toggleVisibility") {
    newShowCounter = !currState.showCounter;
  }
  return {
    counter: newCounter,
    showCounter: newShowCounter,
  };
}

const store = createStore(counterReducer);
export default store;
