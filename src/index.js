import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </Provider>

   </React.StrictMode>
);
