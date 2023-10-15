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
import React, { useContext, useEffect, useState } from "react";
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

import { signUp } from "../api/authApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthContext } from "../contexts/AuthContext";
import { getLocations } from "../api/locationsApi";

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

const locations = [
  "Hyderabad",
  "Rajahmundry",
  "Bhimavaram",
  "Vijayawada",
  "Visakhapatnam"
];

const genders = ["Male", "Female", "Other"];

const SignUp = () => {
  const navigate = useNavigate();
  const { user: contextUser, setUser: setContextUser } =
    useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return navigate("/myprofile");
    }
  }, []);

  const {
    data: locationsData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["locations"],
    queryFn: getLocations
  });

  const [user, setUser] = useState({
    email: "",
    username: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const [showConfirmPasword, setConfirmPassword] = useState(false);
  const handleShowConfirm = () => {
    setConfirmPassword((showConfirmPasword) => !showConfirmPasword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [next, setNext] = useState(false);

  const [mutateMessage, setMutateMessage] = useState("");

  const signUpMutate = useMutation({
    mutationFn: (user) => signUp(user),
    onSuccess: (data) => {
      setMutateMessage("Sign Up Successfull");
      localStorage.setItem("token", data.token);
      setContextUser(user);
      navigate("/myprofile");
    },
    onError: (err) => {
      setMutateMessage("Error signing up : ");
      console.log(err);
    }
  });

  const handleFormSubmit = (e) => {
    if (!next) {
      setNext((next) => !next);
      e.preventDefault();
      return;
    }
    e.preventDefault();
    signUpMutate.mutate(user);
  };

  if (isLoading || isError) {
    return <div>Error Loading Locations...</div>;
  }

  const locations = locationsData.data.locations;
  return (
    <div>
      <div style={{ display: "flex", margin: "0.5rem auto" }}>
        {mutateMessage}
      </div>
      <StyledPaper elevation={8}>
        <Stack component="form" onSubmit={handleFormSubmit}>
          <FlexBox sx={{ margin: "1rem auto" }}>
            <AddCircleIcon sx={{ color: "#082567" }} fontSize="medium" />
            <Typography variant="h7" fontFamily="inherit" fontWeight={600}>
              User Sign Up
            </Typography>
          </FlexBox>
          {next ? null : (
            <>
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
              {/* username */}
              <FlexBox>
                <AccountCircleIcon />
                <TextField
                  sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
                  label="Username"
                  name="username"
                  fullWidth
                  required
                  type="text"
                  variant="standard"
                  color="secondary"
                  value={user.username}
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
              {/* confirm password */}
              <FlexBox>
                <PasswordIcon />
                <TextField
                  sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
                  fullWidth
                  required
                  label="Confirm Password"
                  name="confirmPassword"
                  color="secondary"
                  type={showConfirmPasword ? "text" : "password"}
                  variant="standard"
                  value={user.confirmPassword}
                  onChange={handleInputChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowConfirm}>
                          {showConfirmPasword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </FlexBox>
            </>
          )}
          {!next ? null : (
            <>
              <FlexBox sx={{ alignItems: "flex-end", marginBottom: "1rem" }}>
                <PhoneIcon />
                <TextField
                  sx={{ marginLeft: "0.5rem" }}
                  label="Phone Number"
                  name="phoneNumber"
                  fullWidth
                  type="text"
                  required
                  placeholder="Enter your +91 Phone Number"
                  variant="standard"
                  color="secondary"
                  inputProps={{ pattern: "[0-9]*" }}
                  value={user.phoneNumber}
                  onChange={handleInputChange}
                />
              </FlexBox>
              {/* date of birth */}
              <FlexBox sx={{ alignItems: "flex-end", marginBottom: "1rem" }}>
                <DateRangeIcon />
                <TextField
                  sx={{ marginLeft: "0.5rem" }}
                  type="date"
                  label="Date Of Birth"
                  name="dateOfBirth"
                  required
                  fullWidth
                  placeholder="dd-mm-yyyy"
                  variant="standard"
                  color="secondary"
                  value={user.dateOfBirth}
                  onChange={handleInputChange}
                />
              </FlexBox>
              {/* gender */}
              <FlexBox sx={{ alignItems: "flex-end", marginBottom: "1rem" }}>
                <MaleIcon />
                <TextField
                  select
                  fullWidth
                  sx={{ marginLeft: "0.5rem" }}
                  name="gender"
                  label="Gender"
                  value={user.gender}
                  variant="standard"
                  color="secondary"
                  onChange={handleInputChange}
                >
                  {genders.map((gender) => (
                    <MenuItem value={gender}>{gender}</MenuItem>
                  ))}
                </TextField>
              </FlexBox>

              {/* address */}
              <FlexBox sx={{ alignItems: "flex-end", marginBottom: "1rem" }}>
                <LocationCityIcon />
                <TextField
                  sx={{ marginLeft: "0.5rem" }}
                  label="Address"
                  name="address"
                  fullWidth
                  multiline
                  maxRows={4}
                  type="text"
                  variant="standard"
                  color="secondary"
                  value={user.address}
                  onChange={handleInputChange}
                />
              </FlexBox>
              {/* city */}
              <FlexBox sx={{ alignItems: "flex-end", marginBottom: "1rem" }}>
                <PlaceIcon />
                <TextField
                  select
                  required
                  fullWidth
                  sx={{ marginLeft: "0.5rem" }}
                  name="city"
                  label="City"
                  value={user.city}
                  variant="standard"
                  color="secondary"
                  onChange={handleInputChange}
                >
                  {locations.map((location) => (
                    <MenuItem value={location.location}>
                      {location.location}
                    </MenuItem>
                  ))}
                </TextField>
              </FlexBox>

              {/* address */}
            </>
          )}

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ textTransform: "unset", fontFamily: "inherit" }}
          >
            <b>{next ? "Submit" : "Next"}</b>
          </Button>
          <FlexText>
            <Typography>Already Signed Up? </Typography>
            <LoginText onClick={() => navigate("/login")}>Login</LoginText>
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

export default SignUp;
