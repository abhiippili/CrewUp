import { useContext, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import {
  Box,
  Menu,
  MenuItem,
  styled,
  Typography,
  useMediaQuery
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProfileBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderBottom: "2px solid black",
  cursor: "pointer"
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center"
});

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const { user: contextUser, setUser: setContextUser } =
    useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      setContextUser(null);
      navigate("/signin");
    }
  };

  const mdUpMatches = useMediaQuery(theme.breakpoints.up("md"));
  const tipPosition = user && mdUpMatches ? 74 : 52;
  const tipProps = {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: tipPosition,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0
      }
    }
  };

  // const unsignedOptions = [Sign In, Sign Up];
  const unsignedOptions = [
    <FlexBox onClick={() => navigate("/signin")}>
      <LoginIcon fontSize="small" sx={{ marginRight: "10px" }} />
      Sign In
    </FlexBox>,
    <FlexBox onClick={() => navigate("/signup")}>
      <PersonAddIcon fontSize="small" sx={{ marginRight: "10px" }} />
      Sign Up
    </FlexBox>
  ];
  // const signedOptions = ["My Contracts", "Profile", "Logout"];
  const signedOptions = [
    <FlexBox onClick={() => navigate("/contracts")}>
      <ViewListIcon fontSize="small" sx={{ marginRight: "10px" }} />
      My Tasks
    </FlexBox>,
    <FlexBox onClick={() => navigate("/portfolio")}>
      <ContactPageIcon fontSize="small" sx={{ marginRight: "10px" }} />
      My Portfolio
    </FlexBox>,
    <FlexBox onClick={() => navigate("/myprofile")}>
      <PersonIcon fontSize="small" sx={{ marginRight: "10px" }} />
      Profile
    </FlexBox>,
    <FlexBox onClick={handleLogout}>
      <LogoutIcon fontSize="small" sx={{ marginRight: "10px" }} />
      Logout
    </FlexBox>
  ];

  return (
    <>
      <ProfileBox onMouseOver={handleMouseEnter}>
        <AccountCircleIcon fontSize="medium" />
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontFamily: "Inter",
            fontWeight: 600
          }}
        >
          {user ? "Hello " + user.username : "SignIn"}
        </Typography>
      </ProfileBox>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // onMouseLeave={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        PaperProps={tipProps}
      >
        {!user
          ? unsignedOptions.map((text) => (
              <MenuItem onClick={handleClose}>{text}</MenuItem>
            ))
          : signedOptions.map((text) => (
              <MenuItem onClick={handleClose}>{text}</MenuItem>
            ))}
      </Menu>
    </>
  );
};

export default Profile;
