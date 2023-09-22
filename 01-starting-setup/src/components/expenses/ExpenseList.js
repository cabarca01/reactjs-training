import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./ExpenseList.css"

function ExpenseList({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;
