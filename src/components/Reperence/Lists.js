import React, { useState } from 'react';
import '../../styles/reference.css'

const ReferenceList = () => {
  const [showNav, setShowNav] = useState(false);
  const [showNav2, setShowNav2] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };
  const toggleNav2 = () => {
    setShowNav2(!showNav2);
    console.log(showNav2);
  };

  let list = (<div><nav
    id="navbar-example3"
    className="navbar navbar-dark bg-dark flex-column align-items-stretch"
  >
    <a className="navbar-brand Reference_navbar_title" href="#" onClick={toggleNav}>
      React 이론
    </a>
    {showNav && (
      <nav className="nav nav-pills flex-column">
        <a className="nav-link Reference_navbar_list" href="#item-1">
          리액트란?
        </a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link Reference_navbar_list" href="#item-1-1">
            리액트의 필요성
          </a>
        </nav>
        <a className="nav-link Reference_navbar_list" href="#item-2">
          리액트의 특징
        </a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link Reference_navbar_list" href="#item-2-1">
          Data Flow
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-2">
          Component 기반 구조
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-3">
          Virtual Dom
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-4">
          Props and State
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-5">
          JSX
          </a>
        </nav>
      </nav>
    )}
  </nav></div>)
  let list2 = (<div><nav
    id="navbar-example3"
    className="navbar navbar-dark bg-dark flex-column align-items-stretch"
  >
    <a className="navbar-brand Reference_navbar_title" href="#" onClick={toggleNav2}>
      React 이론
    </a>
    {showNav2 && (
      <nav className="nav nav-pills flex-column">
        <a className="nav-link Reference_navbar_list" href="#item-1">
          리액트란?
        </a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link Reference_navbar_list" href="#item-1-1">
            리액트의 필요성
          </a>
        </nav>
        <a className="nav-link Reference_navbar_list" href="#item-2">
          리액트의 특징
        </a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link Reference_navbar_list" href="#item-2-1">
          Data Flow
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-2">
          Component 기반 구조
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-3">
          Virtual Dom
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-4">
          Props and State
          </a>
          <a className="nav-link Reference_navbar_list" href="#item-2-5">
          JSX
          </a>
        </nav>
      </nav>
    )}
  </nav></div>)

  return (
    <div className='Reference_nav'>
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
