import "../styles/lecture.css";
import Nav from "../components/Nav_Light";
import Footer from "../components/Footer_Light";

function App() {
  return (
    <div>
      <Nav />
      <div className="lecture-App">
        <div className="lecture-App-main">
          <div className="lecture-front">
            <h1>Front End</h1>
          </div>
          <div className="lte">
            <img src="https://ifh.cc/g/6AW38r.png" width="800px" />
          </div>
          <div className="lecture-mlyon">
            <div className="lecture-varil">
              <h2>여태까지 경험하지 못한 강의</h2>
              <p>
                새롭게 선보이는 it da의 강의 컨텐츠
                <br />
                이 컨텐츠를 가지고, 우리는 다시 한번 도약합니다.
                <br />
                품질 좋은 강의를 유지하기 위해 끊임 없이 노력하는
                <br />
                그야말로 it da의 최고의 콘텐츠 입니다.
              </p>
            </div>
          </div>
          <div className="lecture-App-1">
            <div className="lecture">
              <div className="App-lecture">
                <img src="https://ifh.cc/g/13f2HM.png" alt="html/css" />
                <p>
                  HTML/CSS All-in-one : 기초부터 Bootstrap, SASS, 고급 animation
                  까지
                </p>
              </div>
              <div className="App-lecture">
                <img src="https://ifh.cc/g/ssAmtL.png" alt="js 기초" />
                <p>JavaScript 입문과 웹 UI개발</p>
              </div>
              <div className="App-lecture">
                <img src="https://ifh.cc/g/Snlkd5.png" alt="js ES6" />
                <p>쉽게 이해하는 JavaScript 객체지향 & ES6 신문법</p>
              </div>
            </div>
            <div className="lecture">
              <div className="App-lecture">
                <img src="https://ifh.cc/g/MLthrr.png" alt="react" />
                <p>React 리액트 기초부터 쇼핑몰 프로젝트까지!</p>
              </div>
              <div className="App-lecture">
                <img src="https://ifh.cc/g/GzWvjM.png" alt="node.js" />
                <p>Node.js, MongoDB로 2시간 만에 빠르게 웹서비스 만들기</p>
              </div>
              <div className="App-lecture">
                <img src="https://ifh.cc/g/krLoqY.png" alt="next.js" />
                <p>Next.js로 웹서비스 만들기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
