import React from "react";
import categories from "./lib";
interface Props {
  onSelectItem: (item: string) => void;
}

const ExpenseFilter = ({ onSelectItem }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectItem(event.target.value)}
      >
        <option value="">All Category</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
