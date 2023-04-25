
import {Navbar,Container,Nav} from 'react-bootstrap'
import './App.css';
import './styles/mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './pages/Banner.js'
import Footer from './components/Footer';
import Reference from './pages/reference'
import { Routes, Route, useNavigate} from "react-router-dom"






function App(){
    let navigate = useNavigate();
    
    return(
        <div className='App'>
            <Navbar bg='light'>
                <Container>
                <Navbar.Brand href="/">npm</Navbar.Brand>
                    <Nav >
                        <Nav.Link onClick={()=>{ navigate('/class') }} id="NavSet">강의</Nav.Link>
                        <Nav.Link onClick={()=>{ navigate('/reference') }} id="NavSet">레퍼런스</Nav.Link>
                        <Nav.Link onClick={()=>{ navigate('/login') }} id="NavSet">로그인</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
                <Banner/>
                <Container>
                    <Footer/>
                    </Container>
           
            <Routes>
                {/* <Route path='/class' element={<Class/>}>
                <Route path='/reference' element={<Reference/>}> */}
                <Route path='/reference' element={<Reference/>}>
                </Route>
              
            </Routes> 

        </div>
    )}
    export default App;