import React from 'react';

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
        Next.js란?
      </h3>
      <p>
      nextjs는 React로 만드는 서버사이드 렌더링 프레인 워크입니다. 서버사이드 렌더링을 함으로 얻는 이득은 다음과 같습니다.
      </p>
      <p>클라이언트 렌더링의 경우 모든 js 파일을 로드하고 사용자는 웹을 보게됩니다. 이때까지 사용자는 많은 시간을 대기해야 합니다.</p>
      <p>seo 문제 - 클라이언트 사이드의 경우 자바스크립트가 로드 되지 않은 경우 아무런 정보를 보이지 않습니다. 구글의 검색엔진의 경우 자바스크립트가 로드되지 않은 페이지를 검색엔진으로 스캔함으로 결론적으로 검색에 아무 페이지도 걸리지 않게 됩니다.</p>
      <h4 id="item-1-1" className="contents_subtitle">
        서버사이드 렌더링
      </h4>
      <p>첫번째 문제는 서버에서 자바스크립트를 로딩함으로 클라이언트 측에서는 자바스크립트를 로딩하는 시간이 줄어들게 되고,</p>
      <p>두번째 문제는 검색엔진이 자바스크립트를 읽는 것이 아닌 서버 측에서 자바스크립트, html, css를 만들어 컨텐츠를 직접 업로드 함으로 검색엔진에 게시글이 걸리게 됩니다.</p>
      <p>또한 meta 태그를 자유롭게 추가함으로 seo를 용이하게 할수 있습니다.</p>
    </div>
  );
}

export default Next01;
