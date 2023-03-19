import React, { useState } from "react";
import EditForm from "./EditForm";
import ExpensesRecommended from "./ExpenseRecommended";
import "./RecommendList.css";

const RecommendList = (props) => {
  const [recommendedList, setRecommendedList] = useState(
    props.RECOMMENDED_EXPENSES
  );
  const [editedTitle, setEditedTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    checkUniqueItem(expenseData);
  };
  const checkUniqueItem = (expenseData) => {
    const userExists = recommendedList.some(
      (eachexpense) => eachexpense.title === expenseData.title
    );
    if (!userExists) {
      setRecommendedList((prevExpensesData) => {
        return [expenseData, ...prevExpensesData];
      });
    } else {
      return;
    }
  };

  const editExpenseHandler = (id) => {
    const editExpense = recommendedList.find((i) => i.id === id);
    setEditedTitle(editExpense.title);
  };
  const deleteExpenseHandler = (id) => {
    const updatedExpenses = recommendedList.filter((item) => item.id !== id);
    setRecommendedList([...updatedExpenses]);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className={`${isEditing ? "card expenses" : "new-expense"}`}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <div>
          <EditForm
            editedTitle={editedTitle}
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
          <h2 style={{ color: "white", paddingLeft: "6px" }}>
            Recommended List
          </h2>
          <ExpensesRecommended
            recommendedList={recommendedList}
            onEditExpense={editExpenseHandler}
            onDeleteExpense={deleteExpenseHandler}
          />
        </div>
      )}
    </div>
  );
};

export default RecommendList;
