import '../styles/reference.css';
import '../styles/mainpage.css'
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import { Routes, Route, useNavigate} from "react-router-dom"
import ReferenceList from '../components/Reperence/Lists';
import ReferenceContents from '../components/Reperence/Contents';

function App() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">npm</Navbar.Brand>
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate('/class');
              }}
              id="NavSet"
            >
              강의
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/reference');
              }}
              id="NavSet"
            >
              레퍼런스
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/login');
              }}
              id="NavSet"
            >
              로그인
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="Reference_main">
        <ReferenceList />
        <ReferenceContents />
      </div>
    </>
  );
}

export default App;
