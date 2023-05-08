import './Test2.css'
import Test2_Darkmode from './Test2_Darkmode';
import ReactSwitch from "react-switch";
import { createContext, useState } from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import Banner_setting1 from "../pages/Banner_setting1";
import Banner_setting2 from "../pages/Banner_setting2";
import Banner_setting3 from "../pages/Banner_setting3";




export const ThemeContext = createContext(null);

export default function Test_ThemeDark() {

  let navigate = useNavigate();

  const [theme, setTheme] = useState("dark");

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
                  <label className='me-2'> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                  <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className='mt-2'/>
                </div>
                <Nav.Link onClick={() => { navigate('/class') }} className='Nav_Toggletheme'>강의</Nav.Link>
                <Nav.Link onClick={() => { navigate('/reference') }} className='Nav_Toggletheme'>레퍼런스</Nav.Link>
                <Nav.Link onClick={() => { navigate('/login') }} className='Nav_Toggletheme'>로그인</Nav.Link>
                <Nav.Link onClick={() => { navigate('/cart') }} className='Nav_Toggletheme'>
                  장바구니<Badge className='ms-2' bg="secondary">0</Badge></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </div>

          
          <Banner_setting1/>
        <Banner_setting2/>
        <Banner_setting3/>


        <div className='Nav_Theme' >
      <div className="container">
        <div id="Footer_setting">
          <div id="Footer_ul_detail_setting">
            <ul id="Footer_list_style">
              <li><span id="Footer_span" className='Nav_Toggletheme'>ABOUT US</span></li>
              <li id="Cursor_left" className='Nav_Toggletheme'>팀이름</li>
              <li id="Cursor_left" className='Nav_Toggletheme'>팀장: </li>
              <li id="Cursor_left" className='Nav_Toggletheme'>팀원: </li>
              <li id="Cursor_left" className='Nav_Toggletheme'>이메일: 학원 이메일</li>
              <li id="Cursor_left" className='Nav_Toggletheme'>주소: 학원 주소</li>
              <li id="Cursor_left" className='Nav_Toggletheme'>전화번호: 학원 전화번호</li>
            </ul>
          </div>
          <div id="Footer_ul_setting">
            <ul id="Footer_list_style">
              <li><span id="Footer_span" className='Nav_Toggletheme'>NAVIGATION</span></li>
              <li onClick={() => { navigate('/class') }} id="Cursor" className='Nav_Toggletheme'>강의</li>
              <li onClick={() => { navigate('/reference') }} id="Cursor" className='Nav_Toggletheme'>레퍼런스</li>
              <li onClick={() => { navigate('/login') }} id="Cursor" className='Nav_Toggletheme'>로그인</li>
            </ul>
          </div>
          <div id="Footer_ul_setting">
            <ul id="Footer_list_style">
              <li><span id="Footer_span" className='Nav_Toggletheme'>LEGAL</span></li>
              <li id="Cursor" className='Nav_Toggletheme'>FAQ</li>
              <li id="Cursor" className='Nav_Toggletheme'>이용약관</li>
              <li id="Cursor" className='Nav_Toggletheme'>개인정보취급방침</li>
              <li id="Cursor" className='Nav_Toggletheme'>취소 및 환불정책</li>
            </ul>
          </div>
          <div id="Footer_ul_setting">
            <ul id="Footer_list_style">
              <li><img src={process.env.PUBLIC_URL + 'logo192.png'} id="Footer_img"></img></li>
              <li><img src={process.env.PUBLIC_URL + 'logo512.png'} id="Footer_img"></img></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
    </ThemeContext.Provider>


  );
}
