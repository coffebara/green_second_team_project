/* eslint-disable*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Test_reference.css';
import Search_setting from '../Search_setting'

export default  function Test_ReferenceList (){
  let navigate = useNavigate();
  const [showNav, setShowNav] = useState(false); /* 추가부분 */
  const [showNav2, setShowNav2] = useState(false);
  const [showNav3, setShowNav3] = useState(false);
  const [showNav4, setShowNav4] = useState(false);

  const toggleReact01 = () => { /* 추가부분 */
    setShowNav(!showNav);
  };
  const toggleNav2 = () => {
    setShowNav2(!showNav2);
  };

  const toggleNav3 = () => {
    setShowNav3(!showNav3);
  };
  const toggleNav4 = () => {
    setShowNav4(!showNav4);
  };
  let react01 /* 추가부분 */ = [{id:0, value:'리액트 란?', url:'/reference/react01'}, {id:1, value:'리액트의 특징', url:'/reference/react02'}];
  let js01 = [{id:0, value:'JavaScript 란?', url:'/reference/js01'}, {id:1, value:'JS 변수', url:'/reference/js02'}, {id:2, value:'JS 객체', url:'/reference/js03'}];
  let next01 = [{id:0, value:'Next.js 란?', url:'/reference/next01'}]
  let bootstrap01 = [{id:0, value:'Bootstrap 이란?', url:'/reference/Bootstrap01'}]

  let underlist01 /* 수정부분 */ = react01/* 수정부분 */.map((list) => {
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
  let underlist04 = bootstrap01.map((list) => {
    return (
      <a className="nav-link Reference_navbar_list" key="id" onClick={
        ()=>{navigate(list.url)}}>
        {list.value}
      </a>
    );
  });

  let list = (  /* 수정부분 */
    <div>
      <nav
        id="navbar-example3"
        className="navbar navbar-primary bg-primary flex-column align-items-stretch"
      >
        <a
          className="navbar-brand Reference_navbar_title"
          href="#"
          onClick={toggleReact01} /* 수정부분 */
        >
          React 이론
        </a>
        {showNav /* 수정부분 */ && (
          <nav className="nav nav-pills flex-column">
            {underlist01} {/* 수정부분 */}
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
  let list4 = (
    <div>
      <nav
        id="navbar-example3"
        className="navbar navbar-dark bg-dark flex-column align-items-stretch"
      >
        <a
          className="navbar-brand Reference_navbar_title"
          href="#"
          onClick={toggleNav4}
        >
          Bootstrap 이론
        </a>
        {showNav4  && (
          <nav className="nav nav-pills flex-column">
          {underlist04} 
        </nav>
        )}
      </nav>
    </div>
    
    
  );

  return (
    <div className="Reference_nav">
      <Search_setting/>
      {list}
      {list2}
      {list3}
      {list4} {/* 추가부분 */}
    </div>
  );
};




// 레퍼런스 글 쓰는법
// 1. 페이지를 먼저 만든다 (React01, React02처럼 만들어서 component/Reperence 폴더에 넣기)
// 2. List.js 파일에서 추가할 내용
//  ㄱ. 소분류 오브젝트 작성 (react01, js01, Next01과 같은 Array)
//  ㄴ. 소분류 map으로 뿌려주기 (underlist01~)
//  ㄷ. div 대분류 태그 만들기 (list1~)
//  ㄹ. return에 만든 태그 붙이기 ({list1}~)
// 3. pages/reperence.js 파일에서 페이지 라우팅하기