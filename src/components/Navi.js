import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
export default function Navi(){
    let navigate = useNavigate();
    return(
        <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand href="/">npm</Navbar.Brand>
                    <Nav>
                        <Nav.Link onClick={() => { navigate('/class') }} id="NavSet">강의</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/reference') }} id="NavSet">레퍼런스</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/login') }} id="NavSet">로그인</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}