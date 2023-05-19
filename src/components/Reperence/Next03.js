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
        다이내믹 라우트란? (Dynamic loute)
      </h3>
      <p>
        다이내믹 라우트란 미리 정의된 URL 주소로만 라우팅하는 것이 아니라
        사용자가 접근한 경로 혹은 상황에 따라 동적인 라우팅을 제공하고 싶을 때
        사용할 수 있는 방식입니다. '동적 라우팅'이라고도 불리죠.
      </p>
      <p>
        이를테면, /my-profile/ 뒤에 이름을 주어서 회원들의 프로필을 표현하고
        싶다면? /my-profile/ray-kim 페이지에서는 ray-kim 의 프로필을 제공하고,
        /my-profile/jake-seo 페이지에서는 jake-seo 의 프로필을 제공하고 싶을 때
        사용할 수 있습니다.
      </p>
      <h4 id="item-1-1" className="contents_subtitle">
        Next.js 에서 다이내믹 라우팅 하기
      </h4>
      <p>
        다이내믹 라우트를 알아보기 이전에 반드시 Next.js 에서 자동으로 라우팅
        되는 시스템을 알고 있어야 합니다.{' '}
      </p>
      <p>
        예를 들면 이전 '자동 라우팅' 글에서 썼듯이, 다음과 같은 폴더구조를
        만들어 페이지를 라우팅 할 수 있습니다.
      </p>
      <TextArea
        value={
          'app\n┗\0my-profile\n\0\0┗\0ray-kim\n\0\0\0\0┗\0 page.js \n\0\0┗\0jake-seo\n\0\0\0\0┗\0 page.js '
        }
      />
      <p>
        그러면 url뒤에 /my-profile/ray-kim과 /my-profile/jake-seo 총 두개의 페이지를 라우팅하게 되겠군요!
      </p>
      <p>
        하지만 이런식으로 회원 프로필 페이지가 백개, 천개 필요하다면 어떤가요? 100개의
        폴더를 다 만드실 생각이신가요?
      </p>
      <p>
        가능은 하겠지만, 불필요한 반복과 큰 프로젝트 사이즈를 갖게 되겠죠.
      </p>
      <p>
        그래서 Next.js 에서는 다음과 같이 폴더 이름을 설정하여 다이내믹 라우트를 할 수 있습니다.
      </p>
      <TextArea
        value={
          'app\n┗\0my-profile\n\0\0┗\0[name]\n\0\0\0\0┗\0 page.js'
        }
      />
      <p>
        위와 같이 폴더의 이름을 용도에 걸맞게 임의로 정하여 [대괄호] 안에 넣어주기만 하면 준비는 끝납니다.
      </p>
      <p>
        이는 이 대괄호 부분에 어떤 주소든 입력하면 page.js 화면을 라우팅시켜준다는 말과 같죠.
      </p>
      <p>
       /my-profile/ray-kim 을 입력하든, /my-profile/jake-seo 를 입력하든 이제 같은 페이지를 보여주게 됩니다.
      </p>
      <p>
       다만 무조건 같은 페이지를 보여주기만 하면 의미가 없겠죠? 이때 다이내믹 라우트로 연결된 page.js 페이지는 props로 그 대괄호 내용을 가져올 수 있게 됩니다.
      </p>
      <p>
       어려운가요? /my-profile/ray-kim 를 입력해서 적절한 lastName과 firstName에 대한 데이터가 존재한다면 page.js를 가져올 때 다음과 같이 표현될 수도 있다는 말이에요.
      </p>
      <TextArea
        value={
          "export default async function Detail(props) { \0\0// props = 'ray-kim'\n\0\0\0return(\n\0\0\0\0\0<div>\n\0\0\0\0\0\0\0<h3>{props.lastName}</h3>\0\0\0//props.lastName = 'kim'\n\0\0\0\0\0\0\0<h3>{props.firstName}</h3>\0\0\0//props.firstName = 'ray'\n\0\0\0\0\0</div>\n\0\0\0)\n}"
        }
      />
      <p>
       어떤가요? 이제 다이내믹 라우트에서 props를 자유자재로 사용할 수 있게 되었으니 적당한 데이터만 있다면 폴더 하나로 회원프로필을 백개든, 천개든 표현해 줄 수 있겠어요.
      </p>
    </div>
  );
}

export default Next01;
