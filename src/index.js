// import React from "react";
// import "./index.css";
// import { createRoot } from "react-dom/client";
// import App from "./App.js";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
  </BrowserRouter>
);
