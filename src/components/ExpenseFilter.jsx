import React from "react";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="mt-12 justify-between">
      <div className="flex flex-wrap justify-between">
        <div>
          <label className="text-xl text-white ml-4">Filter by year</label>
        </div>
        <div className="mr-4">
          <select
            className="h-8 w-20 rounded-lg bg-orange-400"
            value={props.selected}
            onChange={dropDownChangeHandler}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
