import React from "react";

function Firebase01() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    >
      <h3 id="item-2" className="contents_title">
        Firebase 프로젝트의 계층 구조 이해하기
      </h3>
      <p>
        Firebase 프로젝트는 Firebase의 최상위 항목입니다. 프로젝트에서 Apple,
        Android, 웹 앱을 등록할 수 있습니다. Firebase에 앱을 등록한 후
        애널리틱스, Cloud Firestore, Performance Monitoring, 원격 구성 등 여러
        가지 Firebase 제품에 Firebase SDK를 추가할 수 있습니다.
      </p>
      <h4 id="item-2-1" className="contents_subtitle">
        Firebase 프로젝트의 계층 구조 이해하기
      </h4>
      <p>
        Firebase 프로젝트는 모든 앱 및 프로젝트에 프로비저닝된 리소스와 서비스를
        위한 컨테이너와 같습니다. <br /> Firebase 프로젝트에는 하나 이상의
        Firebase 앱을 등록할 수 있습니다(예: 앱의 iOS 및 Android 버전 또는 앱의
        무료 버전과 유료 버전 모두). 동일한 Firebase 프로젝트에 등록된 모든
        Firebase 앱은 프로젝트에 프로비저닝된 모든 동일한 리소스와 서비스를
        공유하고 여기에 액세스할 수 있습니다.{" "}
      </p>
      <p>
        그리고 이 단방향 데이터 흐름은 컴포넌트가 컴포넌트 바깥에서 props를
        이용해 데이터를 마치 인자(arguments) 혹은 속성(attributes)처럼 전달받을
        때 영향을 줍니다.
      </p>
      <h4 id="item-2-2" className="contents_subtitle">
        Component 기반 구조
      </h4>
      <p>
        React는 UI(View)를 여러 컴포넌트(component)를 쪼개서 만듭니다. 한 페이지
        내에서도 여러 각 부분을 독립된 컴포넌트로 만들고, 이 컴포넌트를 조립해
        화면을 구성합니다.
      </p>
      <p>
        컴포넌트 단위로 쪼개져 있기 때문에, 전체 코드를 파악하기가 상대적으로
        쉽습니다. 이렇게 기능 단위, UI 단위로 캡슐화시켜 코드를 관리하기 때문에
        재사용성이 높습니다. 따라서 코드는 반복해 입력할 필요 없이, 컴포넌트만
        import해 사용하면 된다는 간편함이 있으며, 애플리케이션이 복잡해지더라도
        코드의 유지보수, 관리가 용이해지는 장점을 가집니다.
      </p>
      <h4 id="item-2-3" className="contents_subtitle">
        Virtual Dom
      </h4>
      <p>Virtual DOM은 가상의 Document Object Model을 말합니다</p>
      <p>
        이벤트가 발생할 때마다 Virtual DOM을 만들고, 다시 그릴 때마다 실제 DOM과
        비교하고 전후 상태를 비교해, 변경이 필요한 최소한의 변경사항만 실제
        DOM에 반영해, 앱의 효율성과 속도를 개선할 수 있다고 합니다.
      </p>
      <h4 id="item-2-4" className="contents_subtitle">
        Props and State
      </h4>
      <p>
        Props : Props란 부모 컴포넌트에서 자식 컴포넌트로 전달해 주는 데이터를
        말합니다. 쉽게 읽기 전용 데이터라고 생각하면 될 것 같습니다! 자식
        컴포넌트에서 전달받은 props는 변경이 불가능하고 props를 전달해준 최상위
        부모 컴포넌트만 props를 변경할 수 있습니다.
      </p>
      <p>
        State : State는 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수
        있습니다. state는 동적인 데이터를 다룰 때 사용하며, 사용자와의
        상호작용을 통해 데이터를 동적으로 변경할 때 사용합니다. 클래스형
        컴포넌트에서만 사용할 수 있고, 각각의 state는 독립적입니다.
      </p>
      <h4 id="item-2-5" className="contents_subtitle">
        JSX
      </h4>
      <p>JSX는 Javascript를 확장한 문법입니다.</p>
      <p>
        React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는
        대신, 둘 다 포함하는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로
        관심사를 분리합니다. 이후 섹션에서 다시 컴포넌트로 돌아오겠지만, JS에
        마크업을 넣는 게 익숙해지지 않는다면 이 이야기가 확신을 줄 것입니다.
      </p>
    </div>
  );
}

export default Firebase01;
