

import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge} from "react-bootstrap";
import { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import Banner_setting1 from "../pages/Banner_setting1";
import Banner_setting3 from "../pages/Banner_setting3";
import Banner_setting2 from '../pages/Banner_setting2.js'
import Footer from '../components/Footer'
import { logout } from "../store";



export const ThemeContext = createContext(null);


export default function Test_ThemeDark() {

  //여기서부터 
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
  //여기까지

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
                {!state.login.isLogin ? <Nav.Link onClick={() => navigate('/login')} className="Nav_Toggletheme">로그인</Nav.Link> :
                  <Nav.Link onClick={() => handleLogout()} className="Nav_Toggletheme">로그아웃</Nav.Link>}

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


        <Banner_setting1 />
        <Banner_setting2 />
        <Banner_setting3 />

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
