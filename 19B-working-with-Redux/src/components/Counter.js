import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  function incrementHandler() {
    dispatch({ type: "increment" });
  }

  function decrementHandler() {
    dispatch({ type: "decrement" });
  }

  function increaseHandler() {
    dispatch({ type: "increaseBy", step: 5 });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={increaseHandler}>
          Increase by 5
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
