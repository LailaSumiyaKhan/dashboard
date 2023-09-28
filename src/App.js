import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Setup from "./pages/Setup";
import Define from "./pages/Define";
import Analyze from "./pages/Analyze";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Layout />}>
               <Route index={true} element={<ProtectedRoute> <Home /> </ProtectedRoute>}></Route>
               <Route path="/setup" element={<ProtectedRoute> <Setup /> </ProtectedRoute>}></Route>
               <Route path="/define" element={<ProtectedRoute> <Define />  </ProtectedRoute>}></Route>
               <Route path="/analyze" element={<ProtectedRoute> <Analyze /> </ProtectedRoute>}></Route>
               <Route path="/admin" element={<ProtectedRoute> <Admin /> </ProtectedRoute>}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
