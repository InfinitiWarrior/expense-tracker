import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Header from './components/Header';
import useTransactions from './hooks/useTransactions';

const App: React.FC = () => {
    const { transactions, addTransaction } = useTransactions();

    return (
        <div>
            <Header />
            <TransactionForm addTransaction={addTransaction} />
            <TransactionList transactions={transactions} />
        </div>
    );
};

export default App;
