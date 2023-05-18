import React from 'react';
import '../../styles/reference.css';

function TextArea(props) {
  return (
    <center>
      <pre
        className="code_text_area"
        style={{ width: 'calc(50% + 30px)', height: 'auto' }}
      >
        {props.value}
      </pre>
    </center>
  );
}

export default TextArea;
