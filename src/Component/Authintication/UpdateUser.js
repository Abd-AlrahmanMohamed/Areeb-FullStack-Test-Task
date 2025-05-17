import React from "react";

import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Card,
  Link,
  CardContent,
} from "@mui/material";
import UpdateUserHook from "../../Hooks/User/UpdateUserHook";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();
  const [
    onSubmitUpdate,
    firstName,
    lastName,
    userName,
    email,
    password,
    oldPassword,
    number,
    onChangeFirstName,
    onChangeLastName,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    onChangeOldPassword,
    onChangeNumber,
    isLoading
  ] = UpdateUserHook(id);
  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <CssBaseline />
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Update User
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
                label="Username"
                value={userName}
                onChange={onChangeUserName}
                fullWidth
                required
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
                label="Password"
                type="password"
                value={oldPassword}
                onChange={onChangeOldPassword}
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
                onClick={onSubmitUpdate}
                disabled={isLoading}
                fullWidth
                sx={{ mt: 2 }}
              >
                {isLoading ? "Submitting..." : "Submit"}
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
    </>
  );
};

export default UpdateUser;
