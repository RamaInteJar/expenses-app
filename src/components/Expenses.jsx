import React from 'react'
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
      <div className="bg-gray-900 min-h-screen lg:w-3/4 w-full p-2 mx-auto items-center mt-6 overflow-x-hidden rounded-xl ">
        <ExpenseItem
          date={props.spending[0].date}
          title={props.spending[0].title}
          amount={props.spending[0].amount}
        />
        <ExpenseItem
          date={props.spending[1].date}
          title={props.spending[1].title}
          amount={props.spending[1].amount}
        />
        <ExpenseItem
          date={props.spending[2].date}
          title={props.spending[2].title}
          amount={props.spending[2].amount}
        />
        <ExpenseItem
          date={props.spending[3].date}
          title={props.spending[3].title}
          amount={props.spending[3].amount}
        />
      </div>

  );
}

export default Expenses