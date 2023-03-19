import React from "react";
import "./ExpensesRecommended.css";

const ExpensesRecommended = ({
  recommendedList,
  onDeleteExpense,
  onEditExpense,
}) => {
  return (
    <>
      <ul className="expenses-list">
        {recommendedList.map((expense) => (
          <li key={expense.id}>
            <div className="card expense-item_ad">
              <div className="expense-item__description_ad">
                <h2>{expense.title}</h2>
                <button
                  className="expense-item__button_ad"
                  onClick={() => onEditExpense(expense.id)}
                >
                  Add
                </button>
                <button
                  className="expense-item__button_ad"
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExpensesRecommended;
