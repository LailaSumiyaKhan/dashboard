import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },
   {
      path: "/home",
      element: <Home />
   }
]);

root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <RouterProvider router={router} />
      </ThemeProvider>
   </React.StrictMode>
);
