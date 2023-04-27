import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/reference.css';

const ReferenceList = () => {
  let navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [showNav2, setShowNav2] = useState(false);

  const toggleReact01 = () => {
    setShowNav(!showNav);
    // setShowNav2(false)
  };
  const toggleNav2 = () => {
    setShowNav2(!showNav2);
    // setShowNav(false)
  };
  let react01 = [{id:0, value:'리액트란?', url:'/reference/react01'}, {id:1, value:'리액트의 특징', url:'/reference/react02'}];
  let js01 = [{id:0, value:'JavaScript란?', url:'/reference/js01'}, {id:1, value:'JS변수', url:'/reference/js02'}, {id:2, value:'JS객체', url:'/reference/js03'}];

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

  return (
    <div className="Reference_nav">
      {list}
      {list2}
    </div>
  );
};

export default ReferenceList;

// import React from 'react';
// const ReferenceList = () => {
//   return (
//     <div>
//       <nav
//         id="navbar-example3"
//         className="navbar navbar-light bg-light flex-column align-items-stretch p-3"
//       >
//         <a className="navbar-brand" href="#" onClick={toggle}>
//           Navbar
//         </a>
//         <nav className="nav nav-pills flex-column Reference_hidden">
//           <a className="nav-link" href="#item-1">
//             Item 1
//           </a>
//           <nav className="nav nav-pills flex-column">
//             <a className="nav-link ms-3 my-1" href="#item-1-1">
//               Item 1-1
//             </a>
//             <a className="nav-link ms-3 my-1" href="#item-1-2">
//               Item 1-2
//             </a>
//           </nav>
//           <a className="nav-link" href="#item-2">
//             Item 2
//           </a>
//           <a className="nav-link" href="#item-3">
//             Item 3
//           </a>
//           <nav className="nav nav-pills flex-column">
//             <a className="nav-link ms-3 my-1" href="#item-3-1">
//               Item 3-1
//             </a>
//             <a className="nav-link ms-3 my-1" href="#item-3-2">
//               Item 3-2
//             </a>
//           </nav>
//         </nav>
//       </nav>
//     </div>
//   );
// };

// export default ReferenceList;
