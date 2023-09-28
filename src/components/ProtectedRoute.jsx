import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
   const { isAuth } = useSelector((store) => store.app);
   return isAuth ? children : <Navigate to={"/login"} />;
}
