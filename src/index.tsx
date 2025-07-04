import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './utils/context';
import { App } from './App';
import './styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);