import React from 'react';
import Home from './Home';
import React01 from './React01';
const ReferenceContents = (props) => {
  let page = "HOME"
  let contents = null;
  if (page === 'HOME') {
    contents = (
      <Home/>
    );
  } else if (page === 'React01'){
    contents = (
      <React01/>
    );
  }
  return <>{contents}</>;
};

export default ReferenceContents;
