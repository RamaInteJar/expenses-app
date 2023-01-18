import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  console.log("ExpenseItem evaluated by react")

  const clickHandler = () => {
    setTitle("Updated!!")
    console.log(title)
  }
  return (
    <div>
      <div className="flex flex-wrap items-center lg:justify-between bg-gray-700 w-full rounded-xl  mt-14 p-2">
        <ExpenseDate date={props.date} />
        <h2 className="text-white font-bold lg:text-3xl text-xl  ml-4">
          {title}
        </h2>
        <div className="inline-flex">
          <div className="bg-purple-900 w-32  text-white border-black border-2 text-center rounded-lg h-16 pr-4 pt-4 lg:text-3xl text-md ml-auto">
            ${props.amount}
          </div>
          <button
            className="bg-white ml-3 mr-3  rounded-lg "
            onClick={clickHandler}
          >
            Change Title
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
