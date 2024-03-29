import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import RecommendList from "./components/RecommendedExpenses/RecommendList";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Vegitables",
    amount: 994.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 99.81,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const key = "title";

  const arrayUniqueByKey = [
    ...new Map(expenses.map((item) => [item[key], item])).values(),
  ];

  return (
    <div>
      <RecommendList
        onAddExpense={addExpenseHandler}
        RECOMMENDED_EXPENSES={arrayUniqueByKey}
      />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
