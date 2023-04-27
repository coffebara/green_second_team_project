import { Button,Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
export default function Nav_Light(){
    let navigate = useNavigate();
    return(
        <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand href="/">npm</Navbar.Brand>
                    <Nav>
                        <Button variant='outline-dark'>다크모드 ★</Button>
                        <Nav.Link onClick={() => { navigate('/class') }} id="NavSet_Light">강의</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/reference') }} id="NavSet_Light">레퍼런스</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/login') }} id="NavSet_Light">로그인</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}