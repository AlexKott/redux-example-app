import React from 'react';

import Controls from './Controls';

import '@/styles/header.css';

const Header = () => (
  <header className='header'>
    <h1 className='header__title'>My VHS List</h1>
    <Controls />
  </header>
);

export default Header;
