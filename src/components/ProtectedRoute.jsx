import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
   const { username, password } = useSelector((store) => store.app);
   return username === "admin" && password === "admin" ? (
      children
   ) : (
      <Navigate to={"/login"} />
   );
}
