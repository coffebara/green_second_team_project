import React from 'react';

function Home() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    >
      <h3 id="item-1" className="contents_title">
      IT-da의 페이지에 오신 것을 환영합니다.
      </h3>
      <p>
        이 곳에서 프로그래밍 지식을 여러분께 공유하려 합니다.
        <br />
        오른쪽 메뉴를 클릭해 알고싶은 지식의 레퍼런스를 확인해주세요.
      </p>
    </div>
  );
}

export default Home;
