import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses";

const expenses_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
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
    title: "Wooden Desk",
    amount: 450.55,
    date: new Date(2019, 5, 12),
  },
];



function App() {

  const [expenses, setExpenses]=useState(expenses_data)

  

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
    
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
