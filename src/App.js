import './App.css';
import './styles/Nav.css'
import './styles/Banner.css'
import './styles/Footer.css'
import './styles/Sorry.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './pages/Banner.js'
import Cart from './pages/cart.js'
import Reference from './pages/reference.js'
import Checkout from "./pages/checkout.js";
import Sorry from './pages/Sorry';

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Routes>
            <Route path='/' element={  <Banner />} />
                <Route path="/class" element={<>강의 페이지</>} ></Route>
                <Route path="detail" element={<>상세 페이지</>} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path='/reference/*' element={<Reference />} />
                <Route path='/login' element={<></>} />
                <Route path="/*" element={<div>잘못된 경로임</div>} />
                <Route path="/sorry" element={<Sorry/>}/>
            </Routes>
        </div>
    )
}
export default App;
