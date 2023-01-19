import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.spending.filter((spendings) => {
    return spendings.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {filteredExpenses.length === 0 &&
        <p className="text-xl text-white">No expenses found !</p>}
      
        {filteredExpenses.length > 0 &&
      
        filteredExpenses.map((spendings) => (
          <ExpenseItem
            key={spendings.id}
            title={spendings.title}
            amount={spendings.amount}
            date={spendings.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
