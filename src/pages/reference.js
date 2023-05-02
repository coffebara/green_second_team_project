import '../styles/reference.css';
import '../styles/Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_Dark from "../components/Nav_Dark.js";
import ReferenceList from '../components/Reperence/Lists';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Reperence/Home';
import React01 from '../components/Reperence/React01';
import React02 from '../components/Reperence/React02';
import Js01 from '../components/Reperence/Js01';
import Js02 from '../components/Reperence/Js02';
import Js03 from '../components/Reperence/Js03';
import Next01 from '../components/Reperence/Next01';
import Bootstrap01 from '../components/Reperence/Bootstrap01';

function Reference() {
  return (
    <div>
      <Nav_Dark />
      <div className="Reference_main">
        <ReferenceList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react01" element={<React01 />} />
          <Route path="/react02" element={<React02 />} />
          <Route path="/js01" element={<Js01 />} />
          <Route path="/js02" element={<Js02 />} />
          <Route path="/js03" element={<Js03 />} />
          <Route path="/next01" element={<Next01 />} />
          <Route path="/bootstrap01" element={<Bootstrap01 />} />
        </Routes>
      </div>
    </div>
  );
}

export default Reference;
