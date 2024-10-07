import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ProtectedRoute from './components/ProtectedRoute';
import { HeaderProps, TransactionFormProps, TransactionListProps } from './types';

interface MainAppProps {
  balance: number;
  addTransaction: (transaction: any) => void;
  transactions: any[];
}

const MainApp: React.FC<MainAppProps> = ({ balance, addTransaction, transactions }) => (
  <>
    <Header balance={balance} />
    <TransactionForm addTransaction={addTransaction} />
    <TransactionList transactions={transactions} />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute component={MainApp} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
