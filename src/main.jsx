import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ColorModeScript, ChakraProvider, extendTheme } from '@chakra-ui/react';

// Define your theme if needed
const theme = extendTheme({
  // Your theme configurations
});

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      {/* If you have a ColorModeSwitcher component, import and use it here */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
