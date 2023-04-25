
import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import './App.css';
import './styles/mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner.js'
import Footer from './components/Footer';
import { Routes, Route, useNavigate} from "react-router-dom"
import Reference from './pages/reference';






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
            <Container>
                <Banner/>
                <Footer/>
            </Container>
            <Routes>
                <Route path='/class' element={<Footer/>}/>
                <Route path='/reference' element={<Banner />}>
                </Route>
            </Routes> 

        </div>
    )}
    export default App;