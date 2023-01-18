import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div >
      <div className="flex flex-wrap items-center lg:justify-between bg-gray-700 w-full rounded-xl  mt-14 p-2">
        <ExpenseDate date={props.date} />
        <h2 className="text-white font-bold lg:text-3xl text-xl  ml-4">
          {props.title}
        </h2>
        <div className="bg-purple-900 w-32  text-white border-black border-2 text-center rounded-lg h-16 pr-4 pt-4 lg:text-3xl text-md ml-auto">
          ${props.amount}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
