import React,{useState} from 'react';

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from  "../CarUi/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";





const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });



  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filterExpenses} />
        <ExpensesList item={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;