import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />

      {props.spending.map((spendings) => (
        <ExpenseItem
          title={spendings.title}
          amount={spendings.amount}
          date={spendings.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
