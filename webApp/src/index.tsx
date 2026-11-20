import React from 'react';
import ReactDOM from 'react-dom/client';
import { SharedProvider } from './di/SharedProvider.tsx';
import { App } from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SharedProvider>
      <App />
    </SharedProvider>
  </React.StrictMode>
);
