/* eslint-disable */
import "../styles/lecture.css";
import Footer from "../components/Footer";
import data from "../assets/data.js";
import { useNavigate, useParams } from "react-router-dom";
import { Col } from "react-bootstrap";
import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

export const ThemeContext = createContext(null);

function findObjectsBykey(objArray, key, value) {
  return objArray.filter((obj) => obj[key] === value);
}

const aliceObjects = findObjectsBykey(data, "all"); // 초기 값
console.log(aliceObjects);

function Lecture() {
  let { id } = useParams();
  let [products] = useState(data);
  let navigate = useNavigate();

  let state = useSelector((state) => state);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [handButtonClick, sethandButtonClick] = useState(aliceObjects);

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
                  {state.cart.length ? (
                    <Badge className="ms-2" bg="secondary">
                      {state.cart.length}
                    </Badge>
                  ) : null}
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
            <div>
              <Button
                variant="text"
                onClick={() => {
                  sethandButtonClick(findObjectsBykey(data, "all"));
                }}
              >
                전체
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  sethandButtonClick(
                    findObjectsBykey(data, "category", "초급")
                  );
                }}
              >
                초급
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  sethandButtonClick(
                    findObjectsBykey(data, "category", "중급")
                  );
                }}
              >
                중급
              </Button>
              <Button
                variant="text"
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
              <div className="lecture">
                {handButtonClick.map((product, index) => (
                  <Hhs key={index} products={product} i={index + 1} />
                ))}
              </div>
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
