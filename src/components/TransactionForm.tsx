import React, { useState } from 'react';

interface TransactionFormProps {
    addTransaction: (description: string, amount: number, type: 'income' | 'expense') => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ addTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<'income' | 'expense'>('income');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTransaction(description, amount, type);
        setDescription('');
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Amount"
                required
            />
            <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
