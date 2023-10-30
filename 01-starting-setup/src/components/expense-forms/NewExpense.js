import {v4 as uuidV4} from "uuid";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const enrichExpenseHandler = (expenseEntered) => {
    const expenseData = {
      ...expenseEntered,
      id: uuidV4()
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={enrichExpenseHandler}/>
    </div>
  );
}

export default NewExpense;
