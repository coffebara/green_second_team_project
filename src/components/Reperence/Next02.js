import React from 'react';
import TextArea from './CodeTextarea';

function Next01() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    >
      <h3 id="item-1" className="contents_title">
        자동 라우팅이란?
      </h3>
      <p>
        Next.js는 자동라우팅을 지원합니다. 간단한 비교를 위해서 React에서는
        어떻게 라우팅을 해왔는지 생각해봅시다.
      </p>
      <p>
        먼저 React 개발 환경에서는 라우팅을 하기 위해서 다음과 같은 과정을
        거쳐야합니다.
      </p>
      <h4 id="item-1-1" className="contents_subtitle">
        React 에서의 라우팅 방식
      </h4>
      <p>
        기존에 React에서 라우팅을 하려면 먼저 파일을 임포트하고,
        &#60;Routes&#62; 태그 내에 &#60;Route&#62; 태그를 사용해서 하나하나
        주소를 설정해주고, 연결하고... 어쩌면 불필요한 반복을 해야한다 생각될
        만한 개발 방식이었습니다.
      </p>
      <TextArea
        value={
          "import Home from '/components/Reperence/Home'\nimport React01 from '/components/Reperence/React01'\nimport Js01 from '/components/Reperence/Js01'\n\n<Routes>\n\0\0<Route path='/' elemet={<Home />} />\n\0\0<Route path='/react01' elemet={<React01 />} />\n\0\0<Route path='/js01' elemet={<Js01 />} />\n</Routes>"
        }
      />
      <p>이것을 Next에서는 어떻게 간편하게 할 수 있는지 확인해볼까요?</p>
      <h4 id="item-1-1" className="contents_subtitle">
        Next.js에서의 라우팅 방식
      </h4>
      <p>
        Next에서는 폴더와 파일의 구조방식에 따라 자동으로 페이지를 라우팅
        시켜줍니다.
      </p>
      <p>
        1. app 폴더 안에 폴더 하나를 'folder1'이라 작명하여 생성합니다.
        <p>
          2. 그 안에 page.js 파일을 만들어 JSX 문법으로 페이지를 완성시켜주면
          '/folder1' url로 자동 라우팅이 됩니다.
        </p>
      </p>
      <p>
        너무 간단하고 쉽지 않나요? 하지만 이렇게 할 경우에 폴더가 많아지고
        구조가 언뜻 복잡해 질 수 있다는 단점 또한 존재합니다.
      </p>
      <p>
        하지만 익숙해지기만 한다면, 굉장히 매력적인 라우팅 시스템이 아닐 수
        없습니다.
      </p>
      <TextArea
        value={
          'app\n┗\0home\n\0┗\0page.js\n┗\0react01\n\0┗\0page.js\n┗\0js01\n\0┗\0page.js'
        }
      />
      <p>만약 위와 같은 폴더구조를 가진 Next.js 프로젝트라면</p>{' '}
      <p>
        1. '/home' url을 갖는 Home 페이지 <br /> 2. '/react01' url을 갖는 React 페이지
        <br /> 3. '/js01' url을 갖는 Js01 페이지
      </p>
      <p>이렇게 총 세개의 페이지를 자동으로 라우팅하게 되겠네요. </p>
    </div>
  );
}

export default Next01;
