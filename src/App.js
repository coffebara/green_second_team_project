import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import "./styles/mainpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Banner from "./pages/Banner.js";
import Reference from "./pages/reference.js";
import Pages from "./pages/pages.js";

import { Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';
import './styles/mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import Banner from './pages/Banner.js'
import Reference from './pages/reference.js'
import Pages from './pages/pages.js'

import { Routes, Route, Link, useNavigate } from "react-router-dom"






function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">npm</Navbar.Brand>
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate("/class");
              }}
              id="NavSet"
            >
              강의
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/reference");
              }}
              id="NavSet"
            >
              레퍼런스
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/login");
              }}
              id="NavSet"
            >
              로그인
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

            <Routes>
            <Route path='/' element={  <Banner />} />
                <Route path='/class' element={<Cart />} />
                <Route path='/reference' element={<Reference />} />
                <Route path='/login' element={<></>} />
            </Routes>
            <Footer />
        </div>
    )
}
export default App;
