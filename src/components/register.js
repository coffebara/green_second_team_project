import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { Link as RouterLink } from "react-router-dom";
import Nav_Light from "./Nav_Light";

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

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Nav_Light />
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
  );
}
