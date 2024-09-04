import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app'; // Adjust path if necessary
import { BrowserRouter } from 'react-router-dom';
import './styles.css'; // Adjust path if necessary

const rootElement = document.getElementById();
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
