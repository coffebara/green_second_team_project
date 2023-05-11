import '../styles/reference.css';
import ReactSwitch from 'react-switch';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Reference from './reference';

export const ThemeContext = createContext(null);

export default function Test_ThemeDark() {

  let state = useSelector((state) => state);

  const [theme, setTheme] = useState("light");
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  
  const toggleTheme = () => {
    setTheme((themeMode) => {
      const newTheme = themeMode === "light" ? "dark" : "light";
      setMode(newTheme);
      return newTheme;
    });
  };
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setTheme("dark");
  }, []);
  
  let navigate = useNavigate();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="Nav_Theme">
          <Navbar>
            <Container>
              <Nav.Link
                onClick={() => {
                  navigate('/');
                }}
                className="Nav_Toggletheme"
              >
                npm
              </Nav.Link>
              <Nav>
                <div className="Nav_Switch">
                  <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                    className="mt-2"
                  />
                </div>
                <Nav.Link
                  onClick={() => {
                    navigate('/class');
                  }}
                  className="Nav_Toggletheme"
                >
                  강의
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate('/reference');
                  }}
                  className="Nav_Toggletheme"
                >
                  레퍼런스
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate(`${state.login.isLogin ? '/checkout' : '/login'}`);
                  }}
                  className="Nav_Toggletheme"
                >
                  {state.login.isLogin ? '로그아웃' : '로그인'}
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate('/cart');
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

        <Reference/>
      </div>
    </ThemeContext.Provider>
  );
}
