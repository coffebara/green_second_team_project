import React, { useState } from 'react';
import '../../styles/reference.css'

const ReferenceList = () => {
  return (
    <div>
      <nav
        id="navbar-example3"
        class="navbar navbar-light bg-light flex-column align-items-stretch p-3"
      >
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#item-1">
            Item 1
          </a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-1-1">
              Item 1-1
            </a>
            <a class="nav-link ms-3 my-1" href="#item-1-2">
              Item 1-2
            </a>
          </nav>
          <a class="nav-link" href="#item-2">
            Item 2
          </a>
          <a class="nav-link" href="#item-3">
            Item 3
          </a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-3-1">
              Item 3-1
            </a>
            <a class="nav-link ms-3 my-1" href="#item-3-2">
              Item 3-2
            </a>
          </nav>
        </nav>
      </nav>
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
