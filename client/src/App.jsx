import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Home } from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
