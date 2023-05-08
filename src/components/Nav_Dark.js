import {Navbar, Container, Nav, Badge, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
export default function Nav_Dark(){
    let navigate = useNavigate();
    let state = useSelector((state) => state);
    return(
        <Navbar id="Nav_bg_Dark">
                <Container>
                    <Navbar.Brand href="/" id="NavSet_brand_Dark">npm</Navbar.Brand>
                    <Nav>
                        <Button variant='outline-light'>라이트모드</Button>
                        <Nav.Link onClick={() => { navigate('/class') }} id="NavSet_Dark">강의</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/reference') }} id="NavSet_Dark">레퍼런스</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/login') }} id="NavSet_Dark">로그인</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/cart') }} id="NavSet_Dark">
                        장바구니<Badge className='ms-2' bg="secondary">{state.cart.length}</Badge></Nav.Link>
                        {/* 테스트용 */}
                        <Nav.Link onClick={() => { navigate('/list') }} id="NavSet_Dark">리스트</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}