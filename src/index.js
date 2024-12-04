import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LearningProvider } from './contexts/LearningContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LearningProvider>
      <App />
    </LearningProvider>
  </React.StrictMode>
);