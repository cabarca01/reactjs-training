import React from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";

import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  const [yearFilter, setYearFilter] = React.useState("");

  const applyYearFilterHandler = (selectedYear) => {
    setYearFilter(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onApplyFilterByYear={applyYearFilterHandler} />

        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default ExpenseList;
