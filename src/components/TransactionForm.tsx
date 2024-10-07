import React, { useState } from 'react';
import { TransactionFormProps } from '../types';

const TransactionForm: React.FC<TransactionFormProps> = ({ addTransaction }) => {
  const [transaction, setTransaction] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={transaction}
        onChange={(e) => setTransaction(e.target.value)}
        placeholder="Add transaction"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;
