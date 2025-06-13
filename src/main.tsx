import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './utils/context';
import { App } from './App';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);