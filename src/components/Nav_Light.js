import { Navbar, Container, Nav, Badge, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import Darkmode from './Darkmode';
import React, { useState } from 'react';
import Dark_Icon from './Dark_Icon';
import Light_Icon from './Light_Icon';



export default function Nav_Light() {
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    return (
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
        
    )
}   