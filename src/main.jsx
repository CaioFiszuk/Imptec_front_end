import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/auth.jsx';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import GlobalStyles from './styles/global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>

  </React.StrictMode>,
);
