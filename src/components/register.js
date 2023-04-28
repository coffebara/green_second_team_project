import React from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { Link as RouterLink } from "react-router-dom";

export default function Register() {
  return (
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
          />
          {/* <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            이메일로 비밀번호 재설정 링크 보내기
          </Button> */}
          <Button
            // component={Link}
            to="/login"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
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
      </Box>
    </Container>
  );
}
