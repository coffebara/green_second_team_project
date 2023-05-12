import React from "react";

function Firebase02() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    >
      <h3 id="item-2" className="contents_title">
        Firebase 실시간 데이터베이스
      </h3>
      <p>
        NoSQL 클라우드 데이터베이스로 데이터를 저장하고 동기화하세요. 모든
        클라이언트에서 실시간으로 데이터가 동기화되고 앱이 오프라인일 때도
        데이터를 사용할 수 있습니다.
      </p>
      <h4 id="item-2-1" className="contents_subtitle">
        기본 원리
      </h4>
      <p>
        Firebase 실시간 데이터베이스로 클라이언트 측 코드에서 데이터베이스에
        직접 안전하게 액세스하여 다기능 협업 애플리케이션을 개발할 수 있습니다.{" "}
        <br />
        데이터가 로컬에 유지되고 오프라인일 때도 실시간 이벤트가 계속 발생하므로
        최종 사용자에게 원활한 환경이 제공됩니다. <br /> 기기가 다시 연결되면
        클라이언트가 오프라인일 때 발생한 원격 업데이트와 로컬 데이터 변경이
        동기화되고 모든 충돌이 자동으로 해결됩니다. <br /> 실시간 데이터베이스가
        제공하는 유연한 표현식 기반 규칙 언어인 Firebase 실시간 데이터베이스
        보안 규칙을 통해 데이터의 구조 및 데이터를 읽거나 쓸 수 있는 조건을
        정의할 수 있습니다. <br /> 개발자는 Firebase 인증과 통합하여 사용자의
        데이터 액세스 권한 및 액세스 방법을 정의할 수 있습니다. 실시간
        데이터베이스는 NoSQL 데이터베이스로서 최적화 방식과 기능성이 관계형
        데이터베이스와 다릅니다. <br /> Realtime Database API는 오로지 작업 실행
        속도를 위주로 설계되었으므로 수백만 사용자가 실시간으로 쾌적하고
        원활하게 이용할 수 있는 탁월한 실시간 환경을 구축할 수 있습니다. <br />{" "}
        따라서 사용자의 데이터 액세스 방법을 미리 계획하고 적절히 구조화하는
        것이 중요합니다.
      </p>
      <h4 id="item-2-1" className="contents_subtitle">
        구현경로
      </h4>
      <p>
        <li>1.Firebase 실시간 데이터베이스 SDK 통합</li>
        <li>2.실시간 데이터베이스 참조 만들기</li>
        <li>3.데이터 설정 및 변경 수신 대기</li>
        <li>4.오프라인 지속성 사용 설정</li>
        <li>5.데이터 보안</li>
      </p>
    </div>
  );
}

export default Firebase02;
