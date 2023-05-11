import '../styles/Nav.css';
import '../styles/reference.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_Dark from '../components/Nav_Dark.js';
import ReferenceList from '../components/Reperence/Lists';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Reperence/Home';
import React01 from '../components/Reperence/React01';
import React02 from '../components/Reperence/React02';
import Js01 from '../components/Reperence/Js01';
import Js02 from '../components/Reperence/Js02';
import Js03 from '../components/Reperence/Js03';
import Next01 from '../components/Reperence/Next01';
import Bootstrap01 from '../components/Reperence/Bootstrap01'; /* 추가부분 */
import Firebase01 from '../components/Reperence/Firebase01';
import Firebase02 from '../components/Reperence/Firebase02';
import Comment from '../components/Reperence/Comment';

function Reference({ comment }) {
  return (
    <div>
      <div className="Reference_main">
        <ReferenceList />
        <div className="Reference_rightside">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react01" element={<React01 />} />
            <Route path="/react02" element={<React02 />} />
            <Route path="/js01" element={<Js01 />} />
            <Route path="/js02" element={<Js02 />} />
            <Route path="/js03" element={<Js03 />} />
            <Route path="/next01" element={<Next01 />} />
            <Route path="/Firebase01" element={<Firebase01 />} />
            <Route path="/Firebase02" element={<Firebase02 />} />
            <Route path="/bootstrap01" element={<Bootstrap01 />} />
            {/* 추가부분 */}
          </Routes>
          <Comment/>
        </div>
      </div>
    </div>
  );
}

export default Reference;
