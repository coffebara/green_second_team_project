
import Footer from "./Footer"
import '../styles/TermsOfUse.css'


import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store";



export const ThemeContext = createContext(null);


export default function TermsOfUse() {
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
                <div className="container p-5">
                    <div className="pb-5">
                    <div className="Term_Set">
                    <p>제1조(목적)</p>
                    <p>표준약관 제10023호</p>
                    <p>이 약관은 사업자명 슈퍼로켓에듀케이션(전자거래 사업자)가 운영하는 코딩애플 사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                    <br />
                    <br />
                    ※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」
                    <br />
                    </p>
                    </div>
                    </div>
                    <div className="pb-5">
                    <div className="Term_Set">
                    <p>제2조(정의)</p>
                    <br />① "몰"이란 슈퍼로켓 에듀케이션 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                    <br />
                    <br />② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                    <br />
                    <br />③ ‘회원’이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                    <br />
                    <br />④ ‘비회원’이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.
                    <br />
                    <br />
                    </div>
                    </div>
                    <div className="pb-5">
                    <div className="Term_Set">
                    <p>제3조(약관등의 명시와 설명 및 개정)</p>
                    <br />① "몰"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호·모사전송번호·전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보 보호책임자등을 이용자가 쉽게 알 수 있도록 "몰"의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
                    <br />
                    <br />② "몰"은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회·배송책임·환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
                    <br />
                    <br />③ "몰"은 전자상거래등에서의소비자보호에관한법률, 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                    <br />
                    <br />④ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다.
                    다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰“은 개정전 내용과 개정후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
                    <br />
                    <br />⑤ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 "몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
                    <br />
                    <br />⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
                    <br />
                    <br />
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}
