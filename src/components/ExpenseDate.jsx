import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="bg-black  text-center text-orange-600 border-purple-800 border-2 rounded-lg w-32 h-24 p-2">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;