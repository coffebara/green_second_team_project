import { Navbar, Container, Nav, Badge, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useDarkMode from '../test/useDarkMode'
import Toggle from '../test/Toggle'
import { GlobalStyles, lightTheme, darkTheme } from '../test/GlobalStyles.js'




export default function Test_Darkmode() {

    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    let navigate = useNavigate();

    return (
        <ThemeProvider theme={themeMode}>
            <Navbar id="Nav_bg_Dark">
                <Container>
                <GlobalStyles/>
                    <Navbar.Brand href="/" id="NavSet_brand_Dark">npm</Navbar.Brand>
                    <Nav>
                        <Toggle toggle={theme} toggleTheme={toggleTheme} />
                        <Nav.Link onClick={() => { navigate('/class') }} id="NavSet_Dark">강의</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/reference') }} id="NavSet_Dark">레퍼런스</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/login') }} id="NavSet_Dark">로그인</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/cart') }} id="NavSet_Dark">
                            장바구니<Badge className='ms-2' bg="secondary">0</Badge></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </ThemeProvider>
    )
}