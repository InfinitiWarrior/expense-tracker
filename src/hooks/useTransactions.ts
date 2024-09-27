import { useState } from 'react';
import { Transaction } from '../types';

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

    return { transactions, addTransaction };
};

export default useTransactions;
