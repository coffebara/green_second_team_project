<<<<<<< HEAD
import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
// import App from "./lectureApp";
import { BrowserRouter } from "react-router-dom";
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
=======
import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
>>>>>>> 573f75a0ca15f8bcbccf3da5e440c0108b0a3bcf
  </React.StrictMode>
);
