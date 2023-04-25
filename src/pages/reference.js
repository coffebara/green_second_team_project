import '../styles/reference.css';
import '../styles/mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReferenceList from '../components/Reperence/Lists';
import ReferenceContents from '../components/Reperence/Contents';

function Reference() {
  
  return (

     
      <div className="Reference_main">
        <ReferenceList />
        <ReferenceContents />
      </div>

  );
}

export default Reference;
