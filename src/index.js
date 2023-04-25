import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.js'
import { BrowserRouter } from "react-router-dom"
// import App from './Class/06/redux/App';
// import App from './nico/practice.js';
// import App from './practice/MemoriesReminder/App.js';
// import App from './card';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)