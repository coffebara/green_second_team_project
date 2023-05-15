import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { Navbar, Nav, Badge, Container } from "react-bootstrap";
import { createContext } from "react";
import { useSelector } from "react-redux";

export const ThemeContext = createContext(null);
export default function Register() {
  const [email, setEmail] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendLinkClick = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력 해주세요.");
    } else {
      setOpenDialog(true);
    }
  };
  const navigate = useNavigate();
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  let state = useSelector((state) => state);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
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
        <div>
          <Container maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">비밀번호 찾기</Typography>
              <Avatar sx={{ m: 1, bgcolor: "black" }}>
                <LockOutlinedIcon />
              </Avatar>
              <form>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  id="email"
                  label="email@email.com"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSendLinkClick}
                >
                  이메일로 비밀번호 재설정 링크 보내기
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      component={RouterLink}
                      to="/login"
                      color="primary"
                      sx={{ mt: 1 }}
                    >
                      로그인 페이지로 돌아가기
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>이메일 확인</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    입력하신 이메일: {email} 에 임시비밀번호를 전송하였습니다
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose}>확인</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Container>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
