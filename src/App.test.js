import { Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';
import './styles/mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import Banner from './pages/Banner.js'
import Reference from './pages/reference.js'
import Pages from './pages/pages.js'
import Login from './pages/Login.js'
import { Routes, Route, Link, useNavigate } from "react-router-dom"


function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    

      <Routes>
        
        <Route path="/cart" element={<Login />
        } />
      </Routes>
    </div>
  )
}

export default App;
