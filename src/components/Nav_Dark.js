import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
export default function Navi(){
    let navigate = useNavigate();
    return(
        <Navbar id="Nav_bg_Dark">
                <Container>
                    <Navbar.Brand href="/" id="NavSet_brand_Dark">npm</Navbar.Brand>
                    <Nav>
                        <Nav.Link onClick={() => { navigate('/class') }} id="NavSet_Dark">강의</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/reference') }} id="NavSet_Dark">레퍼런스</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/login') }} id="NavSet_Dark">로그인</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}