import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <Router basename={process.env.PUBLIC_URL}> */}
                <Provider store={store}>
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                </Provider>
            {/* </Router> */}
        </BrowserRouter>
    </React.StrictMode>
);
