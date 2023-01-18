import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")
  
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)

  }
  return (
    <Card >
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
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