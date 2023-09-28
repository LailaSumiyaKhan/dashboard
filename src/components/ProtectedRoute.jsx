import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
   const username = localStorage.getItem("username");
   return username === "admin" ? children : <Navigate to={"/login"} />;
}
