import React from 'react';
import '../../styles/reference.css';

function TextArea(props) {
  return (
    // <textarea
    //   className="code_text_area"
    //   placeholder={props.placeholder}
    //   value={props.value}
    //   onChange={props.onChange}
    //   style={{width:"calc(50% + 30px)", height:"auto"}}
    // />
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
