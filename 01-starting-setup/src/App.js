import React from "react";
import {v4 as uuidV4} from "uuid"

import "./App.css";

import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/expense-forms/NewExpense";

function App() {
  let expenses = [
    {
      id: uuidV4(),
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: uuidV4(), title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: uuidV4(),
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: uuidV4,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = React.useState(expenses);

  const addExpenseHandler = (expenseData) => {
    setExpenseList((prevList) => {
      return [
        ...prevList,
        expenseData
      ]
    });
    console.log(expenseData);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>  
      <ExpenseList expenses={expenseList} />
    </div>
  );
}

export default App;
