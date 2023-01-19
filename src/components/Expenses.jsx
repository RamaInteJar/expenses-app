import React, { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.spending.filter((spendings) => {
    return spendings.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesList spending={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
