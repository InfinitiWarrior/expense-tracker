import React from 'react';
import { TransactionListProps } from '../types';

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>{transaction}</li>
      ))}
    </ul>
  );
};

export default TransactionList;
