import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Timer from './Timer';
import Calculator from './calculator';
import Todo from './todo.js';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Todo />
      <Timer />
      <Calculator />
    </StyledEngineProvider>
  </React.StrictMode>
);
