import { ToastContainer } from "react-toastify";
import LoginHook from "../../Hooks/User/LoginHook";
import {
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    isLoading,
    login,
    onSubmitLogin,
  ] = LoginHook();
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <CssBaseline />
      <Card variant="outlined" sx={{ p: 4 }}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={onSubmitLogin}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="email">email</FormLabel>
            <TextField
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              fullWidth
              required
              autoComplete="current-password"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">password </FormLabel>
            <TextField
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={onChangePassword}
              fullWidth
              required
              autoComplete="current-password"
            />
          </FormControl>

          <Button type="submit" variant="contained" fullWidth>
            login
          </Button>
        </Box>

        <Divider sx={{ my: 3 }}>or</Divider>

        <Typography align="center">
          don't have one
          <MuiLink component={Link} to="/register" variant="body2">
            click here
          </MuiLink>
        </Typography>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default LoginComponent;
