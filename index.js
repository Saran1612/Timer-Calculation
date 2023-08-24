import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Timer from './Timer';
import Calculator from './calculator';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Calculator />
    </StyledEngineProvider>
  </React.StrictMode>
);
