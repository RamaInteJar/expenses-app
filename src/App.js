import React from "react";
import ExpenseItem from "./components/ExpenseItem";



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
      amount: 450,
      date: new Date(2020, 5, 12),
    },
  ];

  return (
    <div className="bg-gray-500 min-h-screen lg:w-3/4 w-full p-2 mx-auto items-center mt-6 overflow-x-hidden rounded-xl">
      <h2 className="text-4xl">Personal Expenses</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
