import '../styles/reference.css';
import '../styles/mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
import { useNavigate} from "react-router-dom"
import ReferenceList from '../components/Reperence/Lists';
import ReferenceContents from '../components/Reperence/Contents';

function Reference() {
  let navigate = useNavigate();
  return (
    <>
      <div className="Reference_main">
        <ReferenceList />
        <ReferenceContents />
      </div>
    </>
  );
}

export default Reference;
