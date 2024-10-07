// src/hooks/useTransactions.ts
import { useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (description: string, amount: number, type: 'income' | 'expense') => {
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      description,
      amount,
      type,
    };
    setTransactions([...transactions, newTransaction]);
  };

  const getBalance = () => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);
  };

  return { transactions, addTransaction, getBalance };
};

export default useTransactions;
