import React from 'react';

export default function Bootstrap01() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    >
      <h3 id="item-1" className="contents_title">
        개요
      </h3>
      <p>
        부트스트랩은 동적인 웹 사이트 및 웹 응용 개발을 위한 프론트엔드 프레임워크로,
        입력 창, 버튼, 네비게이션 및 기타 구성물, 각종 레이아웃 등을 HTML 및 CSS 기반의 디자인 템플릿으로 제공하며
        추가적인 자바스크립트 확장들도 포함한다.
      </p>

      <h3 id="item-2" className="contents_title">
        특징
      </h3>
      <h4 id="item-2-1" className="contents_subtitle">
        다양한 페이지 요소 제공
      </h4>
      <p>부트스트랩 프레임워크는 글자, 인용문, 목록, 표, 입력폼, 버튼, 이미지, 아이콘 등의 자잘한 것뿐만 아니라,
        드롭다운 메뉴, 내비게이션 바, 버튼, 탭, 리스트, 페이지 이동 바, 알림 메시지, 썸네일, 진행 바 등의 웹 페이지에서 많이 쓰이는 요소를 거의 전부 내장하고 있다.</p>
      <h4 id="item-2-1" className="contents_subtitle">
        반응형 지원
      </h4>
      <p>PC용 디자인뿐 아니라 태블릿이나 스마트폰 같은 모바일용 디자인을 반응형으로 한번에 지원한다. 이 때문에 디자인 소요 시간이 크게 줄어들었다.</p>
      <h4 id="item-2-2" className="contents_subtitle">
        오픈 소스
      </h4>
      <p>오픈소스로 공개되어 있으므로 기존의 디자인을 재사용하는 것이 가능하며, 사용자가 자신의 디자인 목적에 따라 자유롭게 수정 및 재배포할 수 있다.</p>
    </div>
  );
}

