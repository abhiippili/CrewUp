import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MaleIcon from "@mui/icons-material/Male";
import PlaceIcon from "@mui/icons-material/Place";

import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const StyledPaper = styled(Paper)({
  margin: "4rem  auto",
  marginBottom: "2rem",
  width: 400,
  padding: "12px 12px",
  borderRadius: "1rem",
  background: "#fff"
});

const Stack = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "justify-content"
});

const FlexText = styled(Box)({
  display: "flex",
  margin: "0px auto",
  marginTop: "10px",
  justifyContent: "center"
});

const LoginText = styled(Typography)({
  marginLeft: "5px",
  color: "#082567",
  fontWeight: 600,
  cursor: "pointer"
});

const AlternateText = styled(Typography)({
  fontFamily: "inherit",
  textAlign: "center",
  color: "#082567",
  cursor: "pointer"
});

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <div>
      <StyledPaper elevation={8}>
        <Stack component="form" onSubmit={handleFormSubmit} method="post">
          <FlexBox sx={{ margin: "1rem auto" }}>
            <AddCircleIcon sx={{ color: "#082567" }} fontSize="medium" />
            <Typography variant="h7" fontFamily="inherit" fontWeight={600}>
              User Sign In
            </Typography>
          </FlexBox>

          {/* email */}
          <FlexBox>
            <EmailIcon />
            <TextField
              sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
              label="Email"
              name="email"
              fullWidth
              required
              type="email"
              variant="standard"
              color="secondary"
              value={user.email}
              onChange={handleInputChange}
            />
          </FlexBox>

          {/* password */}
          <FlexBox>
            <PasswordIcon />
            <TextField
              sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              label="Password"
              name="password"
              color="secondary"
              type={showPassword ? "text" : "password"}
              variant="standard"
              value={user.password}
              onChange={handleInputChange}
            />
          </FlexBox>

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ textTransform: "unset", fontFamily: "inherit" }}
          >
            <b>Sign In</b>
          </Button>
          <FlexText>
            <Typography>Not registered yet? </Typography>
            <LoginText onClick={() => navigate("/login")}>Sign Up</LoginText>
          </FlexText>
        </Stack>
      </StyledPaper>
      <AlternateText sx={{ textDecoration: "none", cursor: "auto" }}>
        Or
      </AlternateText>
      <AlternateText sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Look for <b>Tasks</b> and <b>Portfolios</b> as a <b>Guest User</b>
      </AlternateText>
    </div>
  );
};

export default SignIn;
