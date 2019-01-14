import React from 'react';

import UserControls from './UserControls';

const headerStyles = {
  display: 'flex',
  justifyContent: 'stretch',
  alignItems: 'center',
  height: '60px',
};

const titleStyles = {
  fontSize: '20px',
  flexBasis: '80%',
};


const PageHeader = () => (
  <header style={headerStyles}>
    <h1 style={titleStyles}>My VHS List</h1>
    <UserControls />
  </header>
);

export default PageHeader;
