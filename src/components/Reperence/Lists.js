/* eslint-disable*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/reference.css';

const ReferenceList = () => {
  let navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [showNav2, setShowNav2] = useState(false);
  const [showNav3, setShowNav3] = useState(false);

  const toggleReact01 = () => {
    setShowNav(!showNav);
  };
  const toggleNav2 = () => {
    setShowNav2(!showNav2);
  };

  const toggleNav3 = () => {
    setShowNav3(!showNav3);
  };
  let react01 = [{id:0, value:'리액트란?', url:'/reference/react01'}, {id:1, value:'리액트의 특징', url:'/reference/react02'}];
  let js01 = [{id:0, value:'JavaScript란?', url:'/reference/js01'}, {id:1, value:'JS변수', url:'/reference/js02'}, {id:2, value:'JS객체', url:'/reference/js03'}];
  let next01 = [{id:0, value:'Next.js란?', url:'/reference/next01'}]

  let underlist01 = react01.map((list) => {
    return (
      <a className="nav-link Reference_navbar_list" key="id" onClick={
        ()=>{navigate(list.url)}}>
        {list.value}
      </a>
    );
  });
  let underlist02 = js01.map((list) => {
    return (
      <a className="nav-link Reference_navbar_list" key="id" onClick={
        ()=>{navigate(list.url)}}>
        {list.value}
      </a>
    );
  });
  let underlist03 = next01.map((list) => {
    return (
      <a className="nav-link Reference_navbar_list" key="id" onClick={
        ()=>{navigate(list.url)}}>
        {list.value}
      </a>
    );
  });

  let list = (
    <div>
      <nav
        id="navbar-example3"
        className="navbar navbar-dark bg-dark flex-column align-items-stretch"
      >
        <a
          className="navbar-brand Reference_navbar_title"
          href="#"
          onClick={toggleReact01}
        >
          React 이론
        </a>
        {showNav && (
          <nav className="nav nav-pills flex-column">
            {underlist01}
          </nav>
        )}
      </nav>
    </div>
  );
  let list2 = (
    <div>
      <nav
        id="navbar-example3"
        className="navbar navbar-dark bg-dark flex-column align-items-stretch"
      >
        <a
          className="navbar-brand Reference_navbar_title"
          href="#"
          onClick={toggleNav2}
        >
          JavaScript 이론
        </a>
        {showNav2 && (
          <nav className="nav nav-pills flex-column">
          {underlist02}
        </nav>
        )}
      </nav>
    </div>
  );
  let list3 = (
    <div>
      <nav
        id="navbar-example3"
        className="navbar navbar-dark bg-dark flex-column align-items-stretch"
      >
        <a
          className="navbar-brand Reference_navbar_title"
          href="#"
          onClick={toggleNav3}
        >
          Next.js 이론
        </a>
        {showNav3 && (
          <nav className="nav nav-pills flex-column">
          {underlist03}
        </nav>
        )}
      </nav>
    </div>
  );

  return (
    <div className="Reference_nav">
      {list}
      {list2}
      {list3}
    </div>
  );
};

export default ReferenceList;


// 레퍼런스 글 쓰는법
// 1. 페이지를 먼저 만든다 (React01, React02처럼 만들어서 component/Reperence 폴더에 넣기)
// 2. List.js 파일에서 추가할 내용
//  ㄱ. 소분류 오브젝트 작성 (react01, js01, Next01과 같은 Array)
//  ㄴ. 소분류 map으로 뿌려주기 (underlist01~)
//  ㄷ. div 대분류 태그 만들기 (list1~)
//  ㄹ. return에 만든 태그 붙이기 ({list1}~)
// 3. pages/reperence.js 파일에서 페이지 라우팅하기