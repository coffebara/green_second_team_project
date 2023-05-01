import "./App.css";
import "./styles/Nav.css";
import "./styles/Banner.css";
import "./styles/Footer.css";
import "./styles/Sorry.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./pages/Banner.js";
import Cart from "./pages/cart.js";
import Reference from "./pages/reference.js";
import Checkout from "./pages/checkout.js";
import Sorry from "./pages/Sorry";
import Lecture from "./pages/lecture.js";
import Login from "./pages/login";
import Register from "./components/register";
import BT from "./pages/Banner_test1"


import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/class" element={<Lecture />}></Route>
        <Route path="detail" element={<>상세 페이지</>} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/reference/*" element={<Reference />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/*" element={<div>잘못된 경로임</div>} />
        <Route path="/sorry" element={<Sorry />} />
        <Route path="/bt" element={<BT />} />
      </Routes>
    </div>
  );
}
export default App;
