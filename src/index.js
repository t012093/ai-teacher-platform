import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { LearningProvider } from './contexts/LearningContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <LearningProvider>
      <App />
    </LearningProvider>
  </React.StrictMode>
);