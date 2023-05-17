1. 프로젝트 소개
2. 팀 소개
3. 개발환경
4. 폴더구조
5. 프로젝트 설치하는 방법
6. 발표 순서
--------------------------------------------------


1. 웹 개발 2차 프로젝트 

 1-1) 프로젝트명 : it-da 와 함께하는 코딩공부
 1-2) 프로젝트 소개  : 프론트엔드 강의를 레퍼런스와 함께 제공하는 웹 사이트
 1-3) 개발 기간 : 2023.04.21 ~ 2023.05.16 (현재) 


2. 팀 소개

 2-1) 팀명 : it-da
 2-2) 팀장 : 김상준  	
 2-3) 팀원 : 김주홍 박철준 지성현 한현승 


3. 개발 환경

 3.1) 프론트엔드 개발 환경:
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


 3-2) 백엔드 개발 환경:
Node.js (Node.js가 설치되어 있다고 가정)
Express.js (express@4.18.2)
Firebase (firebase@9.21.0)
MongoDB (mongodb@5.5.0)
Mongoose (mongoose@7.1.0)


 3-3) 테스팅 및 개발 도구:
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

 4-1) 필수 프로그램 
	가) Visual Studio Code
	나) Nodejs		 
 4-2) vsCode 실행 -> 아무 폴더 열기 -> 터미널에 다음 코드 입력하여 리액트 설치 'npm react-create-app .'
 4-3) 해당 폴더에 첨부한 itda.zip 을 2번 압축해제 후 넣기 
 4-4) 터미널에 'npm install'을 입력하여 필요한 필요한 npm들을 설치
 4-5) 터미널에 'npm start' 를 입력하여 실행

5. 폴더 구조

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


6. 발표 순서

 2-1) 팀원소개 및 기획 동기 및 의도 - 김주홍
 2-3) 각자 개발 페이지 설명  - 김상준
 2-4) 기능 시연 및  후기 발표 - 각 담당자 
 2-5) 향후 계획 - 한현승
 2-6) QnA