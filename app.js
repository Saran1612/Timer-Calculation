import React, { useState } from 'react';
import Timer from './Timer';
import Calculator from './calculator';
import Todo from './todo.js';
import Api from './api.js';
import { Context } from './context';
import ContextExample from './contextExample';

const App = () => {
  const [data, setData] = useState('Kirubha Hari');
  return (
    <Context.Provider value={{ state: data }}>
      <ContextExample />
    </Context.Provider>
  );
};

export default App;
