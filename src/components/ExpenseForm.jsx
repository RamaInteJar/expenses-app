import React, {useState} from 'react'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  

  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => { 
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  
  return (
    <form
      className="mt-4 bg-purple-400 p-3 rounded-xl lg:w-3/5 w-full mx-auto "
      onSubmit={submitHandler}
    >
      <div className="">
        <div className="flex flex-wrap w-full">
          <div className="">
            <label className="ml-1 block">title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              className="ml-1 lg:w-72 w-full h-8 rounded-md p-1"
            />
          </div>
          <div className="">
            <label className="ml-1 block">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
              className="ml-3 lg:w-72 w-full h-8 rounded-md p-1"
            />
          </div>
        </div>
        <div className="mt-4 w-full">
          <label className="ml-1 block">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-32"
            value={enteredDate}
            onChange={dateChangeHandler}
            className="ml-1 lg:w-72 w-full h-8 rounded-md p-1"
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          className=" w-32 h-10 bg-purple-900 xl:ml-96 ml-0 rounded-xl "
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm