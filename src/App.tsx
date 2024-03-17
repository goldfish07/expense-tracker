import ExpenseList from "./expense/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./expense/ExpenseFilter";
import ExpenseForm from "./expense/ExpenseForm";

function App() {
  const itemHeading = ["Description", "Amount", "Category"];

  const [expense, setExpenses] = useState([
    { id: 0, desc: "DishWasher", amount: 59, category: "utilities" },
    { id: 1, desc: "Tomato", amount: 20, category: "groceries" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) => {
            setExpenses([...expense, { ...data, id: expense.length + 1 }]);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectItem={(item) => setSelectedCategory(item)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expense.filter((e) => e.id !== id));
        }}
      />
    </>
  );
}

export default App;
