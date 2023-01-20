import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.spending.length === 0) {
    return <h2 className="text-white text-xl text-center">found no expenses!</h2>;
  }

  return (
    <div>
      <ul>
        {props.spending.map((spendings) => (
          <ExpenseItem
            key={spendings.id}
            title={spendings.title}
            amount={spendings.amount}
            date={spendings.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
