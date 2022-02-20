import React from 'react';

function Icon({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Icon;
