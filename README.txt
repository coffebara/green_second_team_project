1. 프로젝트 소개
2. 팀 소개
3. 개발환경
4. 설치 방법
5. 백엔드와 프론트엔드 연동 과정
6. 프로젝트 설치하는 방법
7. 발표 순서
--------------------------------------------------


1. 웹 개발 2차 프로젝트 
  가. 프로젝트명 : it-da 와 함께하는 코딩공부
  나. 프로젝트 소개  : 프론트엔드 강의를 레퍼런스와 함께 제공하는 웹 사이트
  다. 개발 기간 : 2023.04.21 ~ 2023.05.16 (현재) 



2. 팀 소개
  가. 팀명 : it-da
  나. 팀장 : 김상준  	
  다. 팀원 : 김주홍 박철준 지성현 한현승 




3. 개발 환경
  가. 프론트엔드 개발 환경:
	React (react@18.2.0)
	React DOM (react-dom@18.2.0)
	React Router (react-router-dom@6.10.0)
	Redux (redux@4.2.1)
	React Redux (react-redux@8.0.5)
	Redux Toolkit (reduxjs/toolkit@1.9.5)
	Axios (axios@1.3.6)
	Emotion (emotion@11.10.6)
	Material-UI (mui@5.12.2)
	React Icons (react-icons@4.8.0)
	Bootstrap (bootstrap@5.2.3)
	Styled Components (styled-components@5.3.10)
	Sass (sass@1.62.1)

 나. 백엔드 개발 환경:
	Node.js
	Express.js (express@4.18.2)
	Firebase (firebase@9.21.0)
	MongoDB (mongodb@5.5.0)
	Mongoose (mongoose@7.1.0)

 다. 테스팅 및 개발 도구:
	Jest (테스트 프레임워크) (@testing-library/jest-dom@5.16.5, @testing-library/react@13.4.0, @testing-library/user-event@13.5.0)
	Nodemon (nodemon@2.0.22)
	React Scripts (react-scripts@5.0.1)
	Concurrently (concurrently@8.0.1)
	CORS (cors@2.8.5)
	Delete (delete@1.1.0)
	Lodash (lodash@4.17.21)
	Update (update@0.7.4)
	Web Vitals (web-vitals@2.1.4)






4. 설치 방법
  가. 필수 프로그램 
    1) Visual Studio Code
    2) Nodejs		 
  나. vsCode 실행 -> 아무 폴더 열기 -> 터미널에 다음 코드 입력하여 리액트 설치 'npm react-create-app .'
  다. 해당 폴더에 첨부한 itda.zip 을 2번 압축해제 후 넣기 
  라. 터미널에 'npm install'을 입력하여 필요한 필요한 npm들을 설치





5. 백엔드와 프론트엔드 연동 과정
  가. 실행 순서
    1) vscode 터미널에 'npm start'를 입력.
    2) 백엔드 mongo 서버가 5001 port로 실행되고,
    3) 프론트 서버가 3000 port로 실행됨.
   4) firebase는 포트가 필요없음.
 
  나. 백엔드와 프론트엔드의 연동
    1) 백엔드(mongo)와 프론트 서버의 실행 순서는 상관없음
    2)  백엔드(mongo)가 5001포트를 사용하는 이유 
		- 일반적인 개발 환경에서 주로 3000포트와 5000포트를 쓴다. 
		   3000은 이미 프론트가 점유한 상태이기 때문에 5000포트를 사용하려 했으나 
		  MacOS가 5000포트를 사용하기때문에 5001포트로 변경하였음
    3) 데이터는 필요한 컴포넌트에서 필요할 때 서버에서 가져옴

  다. 백엔드와 프론트엔드의 역할
	가) 백엔드
	    1) firebase : 프론트엔드에서 회원가입 시 사용자가 입력한 데이터를 서버에 생성하고,
			     생성된 데이터를 바탕으로 로그인 기능과 사용자의 정보를 가져와 프론트엔드에 전송
              2) mongo : 레퍼런스 페이지에서 댓글을 작성하면 해당 데이터를 서버에 생성하고, 해당 데이터를 프론트엔드에 전송함
	나) 프론트엔드 :웹 애플리케이션에서 사용자와 직접 상호작용하는 부분을 담당
	   1) React :  단일 페이지 애플리케이션(SPA)을 구축하여 웹 어플리케이션의 빠른 렌더링을 지원함



6. 폴더 구조

it-da
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  │  ├─ DefaultProfile.jpg
│  │  └─ google.png
│  ├─ CSS.png
│  ├─ favicon.ico
│  ├─ github.png
│  ├─ html&css.png
│  ├─ HTML.png
│  ├─ index.html
│  ├─ javascript.png
│  ├─ JS.png
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ NEXTjs.png
│  ├─ npm.png
│  ├─ react.png
│  └─ robots.txt
├─ README.md
├─ server
│  ├─ package.json
│  ├─ Router
│  │  └─ test.js
│  └─ server.js
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ assets
│  │  ├─ 1.txt
│  │  └─ data.js
│  ├─ components
│  │  ├─ 1.txt
│  │  ├─ Auth.js
│  │  ├─ AuthContext.js
│  │  ├─ Cart.js
│  │  ├─ CartRefresh.js
│  │  ├─ Checkout.js
│  │  ├─ checkoutForm
│  │  │  ├─ COFormInput.jsx
│  │  │  └─ COFormInput.scss
│  │  ├─ Footer.js
│  │  ├─ forget.js
│  │  ├─ formInput
│  │  │  ├─ FormInput.jsx
│  │  │  └─ formInput.scss
│  │  ├─ login.js
│  │  ├─ Nav_Dark.js
│  │  ├─ Nav_Light.js
│  │  ├─ Reperence
│  │  │  ├─ Bootstrap01.js
│  │  │  ├─ CodeTextarea.js
│  │  │  ├─ Comment.js
│  │  │  ├─ comment_test.js
│  │  │  ├─ Firebase01.js
│  │  │  ├─ Firebase02.js
│  │  │  ├─ Firebase03.js
│  │  │  ├─ Home.js
│  │  │  ├─ Js01.js
│  │  │  ├─ Js02.js
│  │  │  ├─ Js03.js
│  │  │  ├─ Lists.js
│  │  │  ├─ Next01.js
│  │  │  ├─ React01.js
│  │  │  ├─ React02.js
│  │  │  └─ ReduxToolkit01.js
│  │  ├─ Search_font.js
│  │  ├─ Search_setting.js
│  │  ├─ SignUp.js
│  │  ├─ Slices
│  │  │  ├─ itemSlice.js
│  │  │  └─ loginSlice.js
│  │  └─ TermsOfUse.js
│  ├─ constants
│  │  └─ 1.txt
│  ├─ context
│  │  ├─ AuthContext.js
│  │  └─ AuthReducer.js
│  ├─ contexts
│  │  └─ 1.txt
│  ├─ firebase.js
│  ├─ index.css
│  ├─ index.js
│  ├─ lectureApp.jsx
│  ├─ Login
│  │  ├─ login
│  │  │  ├─ Login.jsx
│  │  │  └─ login.scss
│  │  └─ register
│  │     ├─ Register.jsx
│  │     └─ register.scss
│  ├─ pages
│  │  ├─ 1.txt
│  │  ├─ Banner.js
│  │  ├─ Banner_setting1.js
│  │  ├─ Banner_setting2.js
│  │  ├─ Banner_setting3.js
│  │  ├─ CartPage.js
│  │  ├─ CheckoutPage.js
│  │  ├─ Detail.js
│  │  ├─ lecture.js
│  │  ├─ lecture2.js
│  │  ├─ List.js
│  │  ├─ login.js
│  │  ├─ pages.js
│  │  ├─ PrivacyPolicy.js
│  │  ├─ reference.js
│  │  └─ Referencepage.js
│  ├─ store.js
│  ├─ styles
│  │  ├─ 1.txt
│  │  ├─ Banner.css
│  │  ├─ cart.css
│  │  ├─ checkout.css
│  │  ├─ Darkmode.css
│  │  ├─ Footer.css
│  │  ├─ lecture.css
│  │  ├─ lecture2.css
│  │  ├─ Nav.css
│  │  ├─ page_lecture.css
│  │  ├─ privacyPolicy.css
│  │  ├─ reference.css
│  │  ├─ Sorry.css
│  │  └─ TermsOfUse.css
│  ├─ test2
│  │  ├─ Test2.css
│  │  ├─ Test2_ThemeDark.js
│  │  ├─ Test2_ThemeDark2.js
│  │  ├─ Test_cart.css
│  │  ├─ Test_cart.js
│  │  ├─ Test_lecture.css
│  │  ├─ Test_lecture.js
│  │  ├─ Test_Lists.js
│  │  ├─ Test_Login.jsx
│  │  ├─ Test_login.scss
│  │  ├─ Test_React01.js
│  │  ├─ Test_reference.css
│  │  ├─ Test_reference.js
│  │  ├─ Test_Register.jsx
│  │  └─ Test_register.scss
│  └─ 로그인토글 사용법.js
└─ 실행방법.txt






7. 발표 순서
  가. 팀원소개 - 김주홍
  나. 기획 동기 및 의도 - 박철준(부재 시 김주홍/한현승)
  다. 개발 일정 및 환경  - 김상준
  라. 기능 시연 - 지성현
  마. 코드 리뷰 - 각 담당자 
  바. 후기 및 계획 - 각 담당자
  사. QnA - 각 담당자