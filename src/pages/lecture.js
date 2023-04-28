import "../styles/lecture.css";
import Nav from "../components/Nav_Light";
import Footer from "../components/Footer_Light";

function App() {
  return (
    <div>
      <Nav />
      <div className="lecture-App">
        <header className="lecture-App-header" />
        <div className="lecture-App-main">
          <div className="lecture-front">
            <h1>Front End</h1>
          </div>
          <div>
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
              <div className="App-lecture"></div>
              <div className="App-lecture"></div>
              <div className="App-lecture"></div>
            </div>
            <div className="lecture">
              <div className="App-lecture"></div>
              <div className="App-lecture"></div>
              <div className="App-lecture"></div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
