import './Test2.css'

import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { createContext, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"



import Banner_setting1 from "../pages/Banner_setting1";
import Banner_setting3 from "../pages/Banner_setting3";
import For_others1 from '../pages/For_others1.js'
import Footer from '../components/Footer'
import Test_Lecture from './Test_lecture';

// import Test_Reference from './Test_reference';
import Test_Cart from './Test_cart.js';
import Test_Login from './Test_Login';
import Test_Register from './Test_Register';







export const ThemeContext = createContext(null);

export default function Test_ThemeDark() {

  let navigate = useNavigate();

  let state = useSelector((state) => state);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>


        <div className='Nav_Theme'>
          <Navbar >
            <Container>
              <Navbar.Brand href="/" className='Nav_Toggletheme'>npm</Navbar.Brand>
              <Nav>
                <div className="Nav_Switch">
                  
                  <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className='mt-2' />
                </div>
                <Nav.Link onClick={() => { navigate('/class') }} className='Nav_Toggletheme'>강의</Nav.Link>
                <Nav.Link onClick={() => { navigate('/reference') }} className='Nav_Toggletheme'>레퍼런스</Nav.Link>
                <Nav.Link onClick={() => { navigate(`${state.login.isLogin ? '/checkout' : '/login'}`)}} className='Nav_Toggletheme'>
                  {state.login.isLogin ? '로그아웃' : '로그인'}</Nav.Link>
                <Nav.Link onClick={() => { navigate('/cart') }} className='Nav_Toggletheme'>
                  장바구니<Badge className='ms-2' bg="secondary">0</Badge></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

{/* <Test_Reference/> */}

        <Footer/>
        
      </div>
    </ThemeContext.Provider>


  );
}
