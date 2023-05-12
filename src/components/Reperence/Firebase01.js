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
        Firebase 프로젝트 이해
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
      <h4 id="item-2-1" className="contents_subtitle">
        Firebase 프로젝트와 Google Cloud 간의 관계
      </h4>
      <p>
        새 Firebase 프로젝트를 만들면 내부적으로 Google Cloud 프로젝트가
        생성됩니다. Google Cloud 프로젝트부터 만들고 나중에 Firebase를
        프로젝트에 추가할 수도 있습니다. Google Cloud 프로젝트는 데이터, 코드,
        구성, 서비스의 가상 컨테이너라고 볼 수 있습니다.{" "}
      </p>

      <h4 id="item-2-2" className="contents_subtitle">
        Firebase 프로젝트와 상호작용
      </h4>
      <p>
        Firebase Console은 Firebase 제품, 앱, 프로젝트 수준 설정을 관리하는 가장
        유용한 환경을 제공합니다. Firebase Console - 프로젝트 개요 화면
        Console의 왼쪽 패널에는 Firebase 제품이 최상위 카테고리별로 나열됩니다.
        왼쪽 패널 상단에서 settings을 클릭하여 프로젝트 설정에 액세스합니다.
        프로젝트 설정에는 통합, 액세스 권한, 결제가 포함되어 있습니다. Console
        중앙에는 다양한 앱 유형을 등록할 수 있도록 설정 워크플로를 시작하는
        버튼이 표시됩니다. Firebase 사용을 시작하면 콘솔의 주 영역이 사용하는
        제품의 통계를 표시하는 대시보드로 바뀝니다. Firebase 프로젝트도 Google
        Cloud 프로젝트이므로 다양한 작업 또는 제품에 Firebase Console 대신
        Google Cloud Console을 사용해야 하는 경우가 있습니다.
      </p>
    </div>
  );
}

export default Firebase01;
