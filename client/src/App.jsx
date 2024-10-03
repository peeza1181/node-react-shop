import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/auth/Login.jsx";
import { Register } from "./pages/auth/Register.jsx";
import { useSelector } from "react-redux";
import Checkout from "./pages/Checkout.jsx";

function App() {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route
            exact
            path="/login"
            element={userInfo ? <Navigate to="/"></Navigate> : <Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={userInfo ? <Navigate to="/"></Navigate> : <Register />}
          ></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
