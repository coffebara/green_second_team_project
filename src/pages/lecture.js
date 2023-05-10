/* eslint-disable */
import "../styles/lecture.css";
import Footer from "../components/Footer";
import data from "../assets/data.js";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const ThemeContext = createContext(null);

function Lecture() {
  let [products] = useState(data);
  let navigate = useNavigate();

  let state = useSelector((state) => state);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="Nav_Theme">
          <Navbar>
            <Container>
            <Nav.Link onClick={() => { navigate('/') }}  className='Nav_Toggletheme'>npm</Nav.Link>
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
                <Nav.Link
                  onClick={() => {
                    navigate(`${state.login.isLogin ? "/checkout" : "/login"}`);
                  }}
                  className="Nav_Toggletheme"
                >
                  {state.login.isLogin ? "로그아웃" : "로그인"}
                </Nav.Link>
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
            <div className="App-lecture">
              <div className="lecture">
                <Card products={products[0]} i={1} />
                <Card products={products[1]} i={2} />
                <Card products={products[2]} i={3} />
              </div>
              <div className="lecture">
                <Card products={products[3]} i={4} />
                <Card products={products[4]} i={5} />
                <Card products={products[5]} i={6} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

function Card(props) {
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
