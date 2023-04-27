import "../styles/lecture.css";
function lecture() {
  return (
    <div className="lecture-App">
      <header className="lecture-App-header" />
      <div className="lecture-App-main">
        <p>Front End</p>
        <img
          className="lecture-img"
          src="https://ifh.cc/g/w1H4Fb.jpg"
          width="800px"
        />
        <h1>여태까지 경험하지 못한 강의</h1>
        <e>
          혁신적인 아이디어로 다시 돌아온 <br />
          it-da의 야심찬 프로젝트. 후회하지 않는 <br />
          프론트엔드 강의들을 만나보세요.
        </e>
        <div className="lecture-lecture">
          <div className="lecture-App-lecture"></div>
          <div className="lecture-App-lecture"></div>
          <div className="lecture-App-lecture"></div>
        </div>
        <div className="llecture-ecture">
          <div className="lecture-App-lecture"></div>
          <div className="lecture-App-lecture"></div>
          <div className="lecture-App-lecture"></div>
        </div>
      </div>
    </div>
  );
}

export default lecture;
