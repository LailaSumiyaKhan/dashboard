import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Login />
   },
   {
      path: "/home",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <Home />
         }
      ],
   }
]);


function App() {
   return (
      <RouterProvider router={router}></RouterProvider>
   );
}

export default App;
