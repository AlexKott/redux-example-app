import React from 'react';

const loaderStyles = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  textAlign: 'center',
  paddingTop: '240px',
  fontSize: '30px',
};

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div style={loaderStyles}>
        Loading....
      </div>
    );
  }

  return null;
};

export default Loader;
