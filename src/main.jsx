import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/auth.jsx';
import { Routes } from './routes';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
);
