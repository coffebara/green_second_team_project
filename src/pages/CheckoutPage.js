import "../test2/Test2.css";

import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import { logout } from "../store";

export const ThemeContext = createContext(null);

export default function CartPage() {
    let navigate = useNavigate();

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
    const dispatch = useDispatch();
    const imageStyle = {
        width: 100,
        height: 25,
        filter: theme === "dark" ? "invert(100%)" : "none",
    };
    function handleLogout() {
        dispatch(logout());
    }

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
                                        {state.cart.length}
                                    </Badge>
                                </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>

                <Checkout />

                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}
