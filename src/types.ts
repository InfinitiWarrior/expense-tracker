export interface HeaderProps {
    balance: number;
  }
  
  export interface TransactionFormProps {
    addTransaction: (transaction: any) => void;
  }
  
  export interface TransactionListProps {
    transactions: any[];
  }
  