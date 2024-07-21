import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import Form from "./components/Form";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Groceries" },
    { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 40, category: "Transportation" },
    { id: 5, description: "eee", amount: 50, category: "Healthcare" },
    { id: 6, description: "eee", amount: 50, category: "Healthcare" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <div>
      {/* <FormRef />
      <FormState /> */}
      {/* <Form /> */}
      <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))} />
    </div>
  );
}
export default App;
