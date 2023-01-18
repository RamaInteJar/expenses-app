import React from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses";




function App() {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.12,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New wooden Desk",
      amount: 450.55,
      date: new Date(2020, 5, 12),
    },
  ];

  const addExpenseHandler = expenses => {
    console.log("in App.js");
    console.log(expenses)
    // setExpense(prevExpense => {
    //   return [expense, ...prevExpense]
    }

  return (
    <div className="bg-gray-500 min-h-screen lg:w-3/4 w-full p-2 mx-auto items-center mt-6 overflow-x-hidden rounded-xl">
      <h2 className="text-4xl mx-auto text-center my-6">Personal Expenses</h2>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses spending={expenses} />
    </div>
  );
}

export default App;
