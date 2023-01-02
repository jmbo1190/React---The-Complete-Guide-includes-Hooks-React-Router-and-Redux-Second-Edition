import React from 'react';  // previously needed, 
                            // but now automatically done under the hood and optional

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
