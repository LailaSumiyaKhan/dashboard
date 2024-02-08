import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Inventory from "./pages/inventory/Inventory";
import Orders from "./pages/orders/Orders";
import Analytics from "./pages/Analytics";
import Customers from "./pages/customers/Customers";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Layout />}>
               <Route index={true} element={<ProtectedRoute> <Home /> </ProtectedRoute>}></Route>
               <Route path="/inventory" element={<ProtectedRoute> <Inventory /> </ProtectedRoute>}></Route>
               <Route path="/orders" element={<ProtectedRoute> <Orders />  </ProtectedRoute>}></Route>
               <Route path="/analytics" element={<ProtectedRoute> <Analytics /> </ProtectedRoute>}></Route>
               <Route path="/customers" element={<ProtectedRoute> <Customers /> </ProtectedRoute>}></Route>
               <Route path="/settings" element={<ProtectedRoute> <Settings /> </ProtectedRoute>}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
