import {Navbar, Container, Nav, Badge, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
export default function Nav_Dark(){
    let navigate = useNavigate();
    return(<div className='main1'>
        <Navbar >
                <Container>
                    <Navbar.Brand href="/"className='sign1'>npm</Navbar.Brand>
                    <Nav>
                        <Nav.Link onClick={() => { navigate('/class') }} className='sign1'>강의</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/reference') }} className='sign1'>레퍼런스</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/login') }} className='sign1'>로그인</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/cart') }} className='sign1'>
                        장바구니<Badge className='ms-2' bg="secondary">0</Badge></Nav.Link>
                    </Nav>
                </Container>
            </Navbar></div>
    )
}