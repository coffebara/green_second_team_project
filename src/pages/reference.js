import '../styles/reference.css';
import '../styles/mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_Dark from "../components/Nav_Dark.js";
import ReferenceList from '../components/Reperence/Lists';
import ReferenceContents from '../components/Reperence/Contents';

function Reference() {
  
  return (

     <div><Nav_Dark/>
      <div className="Reference_main">
        
        <ReferenceList />
        <ReferenceContents />
      </div>
      </div>

  );
}

export default Reference;
