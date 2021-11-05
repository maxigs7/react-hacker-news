import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/montserrat/300.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  colors: {
    'hn-orange': {
      50: '#fff7f2',
      100: '#fff0e6',
      200: '#ffd9bf',
      300: '#ffc299',
      400: '#ff944d',
      500: '#ff6600',
      600: '#e65c00',
      700: '#bf4d00',
      800: '#993d00',
      900: '#7d3200',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
