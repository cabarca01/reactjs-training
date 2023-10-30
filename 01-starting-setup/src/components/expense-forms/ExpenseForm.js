import React from "react";

import "./ExpenseForm.css";

function getDateString(date) {
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  return date.getFullYear() + "-" + month + "-" + date.getDate();
}

function ExpenseForm() {
  const today = getDateString(new Date());

  const [dateEntered, setDateEntered] = React.useState("");
  const [titleEntered, setTitleEntered] = React.useState("");
  const [amountEntered, setAmountEntered] = React.useState("");

  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Don't send form and refresh
    const expenseData = {
      date: dateEntered,
      title: titleEntered,
      amount: amountEntered,
    };

    setAmountEntered('');
    setDateEntered('');
    setTitleEntered('');

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateEntered}
            min="1975-01-01"
            max={today}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEntered}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountEntered}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
