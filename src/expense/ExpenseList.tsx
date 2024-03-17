interface Expenses {
  id: number;
  desc: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>Description</td>
          <td>Amount</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.desc}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
