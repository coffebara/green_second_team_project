import { Navbar, Container, Nav, Badge, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import ReactSwitch from "react-switch";
import { useSelector } from 'react-redux';



export default function Nav_Light() {
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    let state = useSelector((state) => state);
    return (
        <Navbar className={darkMode ? 'light-mode' : 'dark-mode'}>
            <Container>
                <Navbar.Brand href="/" style={{ color: darkMode ? 'black' : 'white' }}>npm</Navbar.Brand>
             
                <Nav className='justify-content-center align-items-center ' >
                    
                    <Nav.Link onClick={() => { navigate('/class') }} style={{ color: darkMode ? 'black' : 'white' }}>강의</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/reference') }} style={{ color: darkMode ? 'black' : 'white' }}>레퍼런스</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/login') }} style={{ color: darkMode ? 'black' : 'white' }}>로그인</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/cart') }} style={{ color: darkMode ? 'black' : 'white' }}>
                        장바구니<Badge className='ms-2' bg="secondary">{state.cart.length}</Badge></Nav.Link>
                        {/* 테스트용 */}
                        <Nav.Link onClick={() => { navigate('/list') }} id="NavSet_Dark">리스트</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    )
}   