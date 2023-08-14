import Expenses from "./components/Expenses";
import React from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //<!-- Notice: custom components need to start with a Capital letter,
  //     to differentiate them from (lowercase) built-in elements,
  //     which must match the name of the imported elements
  // -->
  //return (
  //  <div>
  //    <h2>Let's get started!</h2>
  //    <Expenses data={expenses} />
  //  </div>
  //);

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { data: expenses })
  );
}

export default App;
