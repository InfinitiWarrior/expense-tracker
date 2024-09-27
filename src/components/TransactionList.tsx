import React from 'react';
import { Transaction } from '../types';

interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    return (
        <ul>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    {transaction.description}: {transaction.amount} ({transaction.type})
                </li>
            ))}
        </ul>
    );
};

export default TransactionList;
