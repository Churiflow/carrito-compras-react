import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarritoApp } from './CarritoApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoApp />
    </BrowserRouter>
  </React.StrictMode>
)
