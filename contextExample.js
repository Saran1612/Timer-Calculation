import React, { useContext } from 'react';
import { Context } from './context';

function ContextExample() {
  const value = useContext(Context);

  return <h1>{value.state}</h1>;
}

export default ContextExample;
