import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Avatar,
  Box,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          label="Password"
          type="password"
          fullWidth
          name="password"
          autoComplete="current-password"
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {" "}
          sign in
        </Button>

        <Grid container>
          <Grid item xs>
            <Link>Forgot Password? </Link>
          </Grid>
          <Grid item>
            <Link>Sign up </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}