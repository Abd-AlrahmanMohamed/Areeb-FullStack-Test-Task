import * as React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Card,
  CardContent,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import RegisteringHook from "../../Hooks/User/RegisteringHook";

const Registering = () => {
  const [
    firstName,
    lastName,
    userName,
    email,
    password,
    number,
    loading,
    onChangeFirstName,
    onChangeLastName,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    onChangeNumber,
    onSubmitRegister,
  ] = RegisteringHook();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <CssBaseline />
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Register
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            <TextField
              label="First Name"
              value={firstName}
              onChange={onChangeFirstName}
              fullWidth
              required
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={onChangeLastName}
              fullWidth
              required
            />
            <TextField
              label="UserName"
              value={userName}
              onChange={onChangeUserName}
              fullWidth
              required
              autoComplete="current-UserName"
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={onChangePassword}
              fullWidth
              required
            />
            <TextField
              label="Phone Number"
              value={`+20${number}`}
              onChange={onChangeNumber}
              fullWidth
              required
            />

            <Button
              variant="contained"
              onClick={onSubmitRegister}
              disabled={loading}
              fullWidth
              sx={{ mt: 2 }}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Sign in
            </Link>
          </Typography>
        </CardContent>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default Registering;
