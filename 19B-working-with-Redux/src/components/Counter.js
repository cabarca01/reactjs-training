import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const isVisible = useSelector((state) => state.counter.showCounter);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleVisibility());
  };

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function increaseHandler() {
    dispatch(counterActions.increaseBy({ step: 5 }));
  }

  return (
    <>
      {isAuthenticated && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {isVisible && <div className={classes.value}>{counter}</div>}
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

          <button type="button" onClick={toggleCounterHandler}>
            Toggle Counter
          </button>
        </main>
      )}
    </>
  );
};

export default Counter;
