import React from "react";

function Firebase03() {
  const codeBlock= 

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    > <pre>
      <h3 id="item-2" className="contents_title">
        JavaScript 프로젝트에 Firebase 추가
      </h3>
      <p>
        이 가이드에서는 웹 앱에서 또는 최종 사용자의 액세스를 위한
        클라이언트(예: Node.js 데스크톱 또는 IoT 애플리케이션)로 Firebase
        JavaScript SDK를 사용하는 방법을 설명합니다.
      </p>
      <h4 id="item-2-1" className="contents_subtitle">
        1단계: Firebase 프로젝트 만들기 및 앱 등록
      </h4>
      <p>
        JavaScript 앱에 Firebase를 추가하려면 우선 Firebase 프로젝트를 만들고
        해당 프로젝트에 앱을 등록해야 합니다. Firebase에 앱을 등록하면 Firebase
        프로젝트 리소스와 앱을 연결하는 데 사용할 Firebase 구성 객체를 얻게
        됩니다
      </p>
      <h4 id="item-2-1" className="contents_subtitle">
        2단계: SDK 설치 및 Firebase 초기화{" "}
      </h4>
      <p>
        <li>1. npm을 사용하여 Firebase를 설치합니다. npm install firebase </li>
        <li>
          2. 앱에서 Firebase를 초기화하고 Firebase 앱 객체를 만듭니다.
          <li>
            <pre>
              import {initializeApp} from 'firebase/app'; // TODO: Replace the
              following with your app's Firebase project configuration const
              firebaseConfig ={" "}
              {
                //...
              }
              ; const app = initializeApp(firebaseConfig);
                        </li>
                      </li>
                      <li>3단계: 앱에서 Firebase에 액세스
                        <li>
                        import { initializeApp } from 'firebase/app';
              import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
              // Follow this pattern to import other Firebase services
              // import { } from 'firebase/<service>';
              
              // TODO: Replace the following with your app's Firebase project configuration
              const firebaseConfig = {
                //...
              };
       </pre>
          </li>
        </li>
        <li>3단계: 앱에서 Firebase에 액세스
          <li>
          <pre>
            import { initializeApp } from 'firebase/app';
            import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
            // Follow this pattern to import other Firebase services
            // import { } from 'firebase/<service>';
            
            // TODO: Replace the following with your app's Firebase project configuration
            const firebaseConfig = {
              //...
            };
            
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);
            
            // Get a list of cities from your database
            async function getCities(db) {
              const citiesCol = collection(db, 'cities');
              const citySnapshot = await getDocs(citiesCol);
              const cityList = citySnapshot.docs.map(doc => doc.data());
              return cityList;
            }
          </pre>
          </li>
        </li>
        <li>4.크기 축소를 위해 모듈 번들러(webpack/Rollup) 사용
        <li>
        Firebase 웹 SDK는 사용하지 않는 코드를 삭제(트리 쉐이킹)하기 위해 모듈 번들러와 연동되도록 설계되었습니다. 
        프로덕션 앱에는 이 방식을 사용하는 것이 좋습니다. Angular CLI, Next.js, Vue CLI, Create React App과 같은 도구는 npm을 통해 설치하고 코드베이스로 가져온 라이브러리의 모듈 번들링을 자동으로 처리합니다.  </li></li>
        <li>웹에서 사용 가능한 Firebase 서비스
          <li>
          이제 Firebase를 사용하도록 설정했으므로 웹 앱에서 다음과 같은 사용 가능한 Firebase 서비스를 추가하고 사용할 수 있습니다. 
          </li>
        </li>
      </p>
  </pre>  
    </div>
  );
}

export default Firebase03;
