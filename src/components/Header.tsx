import React from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ balance }) => {
  return (
    <header>
      <h1>Your Balance: {balance}</h1>
    </header>
  );
};

export default Header;
