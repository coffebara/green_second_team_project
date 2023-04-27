import React from 'react';

function React01() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    >
      <h3 id="item-1" className="contents_title">
        리액트란?
      </h3>
      <p>
        React는 웹 프레임워크로, 자바스크립트 라이브러리의 하나로서 사용자
        인터페이스를 만들기 위해 사용됩니다.
      </p>
      <p>
        React는 facebook에서 제공해주는 프론트엔드 라이브러리라고 볼 수
        있습니다.
      </p>
      <p>
        싱글 페이지 애플리케이션이나 모바일 애플리케이션의 개발 시 토대로 사용될
        수 있습니다.
      </p>
      <p>
        즉, 현재 많이 활용되고 있는, 웹/앱의 View를 개발할 수 있도록 하는
        인기있는 라이브러리라고 볼 수 있습니다.
      </p>
      <h4 id="item-1-1" className="contents_subtitle">
        리액트의 필요성
      </h4>
      <p>
        react를 사용하지 않아도, html과 css, javascript를 이용해서 웹 페이지를
        만들 수 있지만, react를 이용해 사용자와 상호작용할 수 있는 동적인 UI를
        쉽게 만들 수 있기 때문에 많이 이용되는 것 같습니다.
      </p>
      <p>
        일례로, javascript만으로도 Virtual Dom을 만들고 화면에 렌더링 하는
        기술을 사용할 수 있지만 문법이 매우 번거롭고 반복되는 키워드가 많습니다.
      </p>
    </div>
  );
}

export default React01;
