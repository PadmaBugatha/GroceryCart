import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [testMonth, setTestMonth] = useState("Mar");
  const [isTouchingBar, setIsTouchingBar] = useState(false);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const addSelectedMonth = (touchedMonth) => {
    // console.log(touchedMonth);
    setTestMonth(touchedMonth);
    setIsTouchingBar(true);
  };
  // console.log(testMonth);
  let filteredMonth;
  switch (testMonth) {
    case "Jan":
      filteredMonth = "0";
      break;
    case "Feb":
      filteredMonth = "1";
      break;
    case "Mar":
      filteredMonth = "2";
      break;
    case "Apr":
      filteredMonth = "3";
      break;
    case "May":
      filteredMonth = "4";
      break;
    case "Jun":
      filteredMonth = "5";
      break;
    case "Jul":
      filteredMonth = "6";
      break;
    case "Aug":
      filteredMonth = "7";
      break;
    case "Sep":
      filteredMonth = "8";
      break;
    case "oct":
      filteredMonth = "9";
      break;
    case "Nov":
      filteredMonth = "10";
      break;
    case "Dec":
      filteredMonth = "11";
      break;
    default:
      filteredMonth = "2";
  }
  // console.log(filteredMonth);

  let newObjArray = filteredExpenses;
  const filteredMonthExpenses = newObjArray.filter((expense) => {
    return expense.date.getMonth().toString() === filteredMonth;
  });
  // console.log(filteredMonthExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart
          expenses={filteredExpenses}
          onclickedMonth={addSelectedMonth}
        />
        {!isTouchingBar && <ExpensesList items={filteredExpenses} />}
        {isTouchingBar && (
          <div>
            <h2>Grocery List of {testMonth} Month </h2>
            <ExpensesList items={filteredMonthExpenses} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
