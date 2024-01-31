import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
    errorElement: <Error />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
