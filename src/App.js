
import './App.css';
import './styles/Nav.css'
import './styles/Banner.css'
import './styles/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './pages/Banner.js'
import Cart from './pages/cart.js'
import Reference from './pages/reference.js'
import { Routes, Route} from "react-router-dom"






function App() {
    return (
        <div className='App'>
            <Routes>
            <Route path='/' element={  <Banner />} />
                <Route path='/class' element={<Cart />} />
                <Route path='/reference' element={<Reference />} />
                <Route path='/login' element={<></>} />
            </Routes>
        </div>
    )
}
export default App;
