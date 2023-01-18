import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = (props) => {
  return (
      <Card >
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
      </Card>

  );
}

export default Expenses