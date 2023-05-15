/* eslint-disable */
import "../styles/lecture.css"; // css 불러오기
import Footer from "../components/Footer"; // Footer 불러오기
import data from "../assets/data.js"; // data 불러오기
import { useNavigate, useParams } from "react-router-dom"; // router-dom에서 useNavigate, useParams 가져오기
// useNavigate: 페이지 전환, URL 변경, 뒤로가기/앞으로가기 등을 처리
// useParams: 동적 경로 매개변수를 가져와서 컴포넌트에서 사용
import { Col } from "react-bootstrap"; // 부트스트랩에서 Col 컴포넌트 가져오기
// Col: 그리드 시스템에서 컬럼(테이블의 열)의 역할을 하는 컴포넌트
import ReactSwitch from "react-switch"; // 스위치 토글을 구현하기 위한 도구
import { Navbar, Container, Nav, Badge } from "react-bootstrap"; // 부트스트랩의 네비게이션 바와 관련된 요소를 구성하는 데 사용
import { createContext, useState } from "react"; // react에서 createContext와 useState를 가져옵니다
// createContext: React 컨텍스트를 생성하는 데 사용
// useState: 상태를 관리하기 위한 Hook
import { useSelector } from "react-redux"; // react-redux에서 useSelector을 가져옵니다
//  useSelector: Redux 상태(store)에서 원하는 데이터를 선택하기 위해 사용되는 Hook
import { Button } from "@mui/material"; // mui 패키지에서 Button을 가져옵니다 (라이브러리)
import { logout } from "../store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const ThemeContext = createContext(null);

function findObjectsBykey(objArray, key, value) {
  return objArray.filter((obj) => obj[key] === value);
}

const aliceObjects = findObjectsBykey(data, "all"); // 카테고리 초기 값
console.log(aliceObjects);

function Lecture() {
  let { id } = useParams();
  let [products] = useState(data);

  const [handButtonClick, sethandButtonClick] = useState(aliceObjects);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  let state = useSelector((state) => state);

  const [theme, setTheme] = useState("dark");

  function handleLogout() {
    dispatch(logout());
  }

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    setTheme((themeMode) => {
      const newTheme = themeMode === "dark" ? "light" : "dark";
      setMode(newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setTheme("light");
  }, []);
  const imageStyle = {
    width: 100,
    height: 25,
    filter: theme === "dark" ? "invert(100%)" : "none",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="Nav_Theme">
          <Navbar>
            <Container>
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="Nav_Toggletheme"
              >
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  style={imageStyle}
                />
              </Nav.Link>

              <Nav>
                <div className="Nav_Switch">
                  <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    className="mt-2"
                  />
                </div>
                <Nav.Link
                  onClick={() => {
                    navigate("/class");
                  }}
                  className="Nav_Toggletheme"
                >
                  강의
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    navigate("/reference");
                  }}
                  className="Nav_Toggletheme"
                >
                  레퍼런스
                </Nav.Link>
                {!state.login.isLogin ? (
                  <Nav.Link
                    onClick={() => navigate("/login")}
                    className="Nav_Toggletheme"
                  >
                    로그인
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    onClick={() => handleLogout()}
                    className="Nav_Toggletheme"
                  >
                    로그아웃
                  </Nav.Link>
                )}

                <Nav.Link
                  onClick={() => {
                    navigate("/cart");
                  }}
                  className="Nav_Toggletheme"
                >
                  장바구니
                  <Badge className="ms-2" bg="secondary">
                    0
                  </Badge>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div className="lecture-App">
          <div className="lecture-App-main">
            <div className="lecture-front">
              <h1>Front End</h1>
            </div>
            <div className="lte">
              <img src="https://ifh.cc/g/rzzZtv.png" width="800px" />
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
            <div className="lecture-btn">
              <Button
                id="lt-btn"
                variant="outlined"
                onClick={() => {
                  sethandButtonClick(findObjectsBykey(data, "all"));
                }}
              >
                전체
              </Button>
              <Button
                id="lt-btn"
                variant="outlined"
                onClick={() => {
                  sethandButtonClick(
                    findObjectsBykey(data, "category", "초급")
                  );
                }}
              >
                초급
              </Button>
              <Button
                id="lt-btn"
                variant="outlined"
                onClick={() => {
                  sethandButtonClick(
                    findObjectsBykey(data, "category", "중급")
                  );
                }}
              >
                중급
              </Button>
              <Button
                id="lt-btn"
                variant="outlined"
                onClick={() => {
                  sethandButtonClick(
                    findObjectsBykey(data, "category", "고급")
                  );
                }}
              >
                고급
              </Button>
            </div>
            <div className="App-lecture">
              {handButtonClick.map((product, index) => (
                <div key={index} className="lecture-container">
                  <Hhs key={index} products={product} i={index + 1} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

function Hhs(props) {
  let navigate = useNavigate();
  return (
    <>
      <Col>
        <img
          onClick={() => {
            navigate(`/lecture2/${props.products.id}`);
          }}
          src={props.products.image}
        />
        <p>{props.products.title}</p>
      </Col>
    </>
  );
}

export default Lecture;
