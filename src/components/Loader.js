import React from 'react';

import '@/styles/loader.css';

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className='loader'>
        Loading....
      </div>
    );
  }

  return null;
};

export default Loader;
