import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false)
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false)
  }
  return (
    <div>
      <div className="mt-4 bg-purple-400 p-3 rounded-xl lg:w-3/5 w-full mx-auto flex items-center">
        {!editing && 
          <button
            className=" w-40 h-16 bg-purple-900 xl:ml-96 rounded-xl"
            onClick={startEditingHandler}
          >
            Add New Expense
          </button>
        }
      </div>
      {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpenses;
