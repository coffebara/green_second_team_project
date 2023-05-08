import { Navbar, Container, Nav, Badge} from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import Dark_Icon from './Dark_Icon';
import Light_Icon from './Light_Icon';



export default function Nav_Light() {
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    return (
    <div>
        {/* 헤더 */}
        <Navbar className={darkMode ? 'light-mode' : 'dark-mode'}>
            <Container>
                <Navbar.Brand href="/" style={{ color: darkMode ? 'black' : 'white' }}>npm</Navbar.Brand>
                <Nav className='justify-content-center align-items-center ' >
                    <div className='Darkmode_container'>
                        <span className='mt-3' ><Light_Icon /></span>
                        <div className='switch-checkbox'>
                            <label className='switch mt-1'>
                                <input type='checkbox' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                                <span className='slider round'></span>
                            </label>
                        </div>
                        <span className='mt-3'  ><Dark_Icon /></span>
                    </div>
                    <Nav.Link onClick={() => { navigate('/class') }} style={{ color: darkMode ? 'black' : 'white' }}>강의</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/reference') }} style={{ color: darkMode ? 'black' : 'white' }}>레퍼런스</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/login') }} style={{ color: darkMode ? 'black' : 'white' }}>로그인</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/cart') }} style={{ color: darkMode ? 'black' : 'white' }}>
                        장바구니<Badge className='ms-2' bg="secondary">0</Badge></Nav.Link>
                </Nav>
            </Container>
        </Navbar>




        {/* 푸터 */}
        <div className={darkMode ? 'light-mode' : 'dark-mode'}>
        <div className="container">
            <div style={{ color: darkMode ? 'black' : 'white' }}  id="Footer_setting">
                <div id="Footer_ul_detail_setting">
                    <ul id="Footer_list_style">
                        <li><span id="Footer_span">ABOUT US</span></li>
                        <li id="Cursor_left">팀이름</li>
                        <li id="Cursor_left">팀장: </li>
                        <li id="Cursor_left">팀원: </li>
                        <li id="Cursor_left">이메일: 학원 이메일</li>
                        <li id="Cursor_left">주소: 학원 주소</li>
                        <li id="Cursor_left">전화번호: 학원 전화번호</li>
                    </ul>
                </div>
                <div id="Footer_ul_setting">
                    <ul id="Footer_list_style">
                        <li><span id="Footer_span">NAVIGATION</span></li>
                        <li onClick={() => { navigate('/class') }} id="Cursor">강의</li>
                        <li onClick={() => { navigate('/reference') }} id="Cursor">레퍼런스</li>
                        <li onClick={() => { navigate('/login') }} id="Cursor">로그인</li>
                    </ul>
                </div>
                <div id="Footer_ul_setting">
                    <ul id="Footer_list_style">
                        <li><span id="Footer_span">LEGAL</span></li>
                        <li onClick={() => { navigate('/faq') }} id="Cursor">FAQ</li>
                        <li id="Cursor">이용약관</li>
                        <li id="Cursor">개인정보취급방침</li>
                        <li id="Cursor">취소 및 환불정책</li>
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
    </div></div>
    )
}   