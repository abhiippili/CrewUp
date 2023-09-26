import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationBar from "./LocationBar";
import SearchBar from "./SearchBar";
import InterestButton from "./InterestButton";
import Profile from "./Profile";
import { theme } from "./../../theme";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthContext";
import { getMyProfile } from "../../api/usersApi";
import { useQuery } from "@tanstack/react-query";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  fontFamily: "inherit"
});

const Logo = styled(Typography)({
  color: "black",
  fontWeight: "600",
  fontFamily: "Poppins"
});

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "self-end",
  flex: 3,
  [theme.breakpoints.between("sm", "md")]: {
    flex: 2.75
  }
});

const LocAndSearchBox = styled(Box)({
  flex: 16,
  [theme.breakpoints.between("sm", "md")]: {
    flex: 4
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
});

const AddAndProfile = styled(Box)({
  flex: 8,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    flex: 11,
    justifyContent: "end"
  }
});

function NavBar() {
  const mdUpMatches = useMediaQuery(theme.breakpoints.up("md"));
  const smUpMatches = useMediaQuery(theme.breakpoints.up("sm"));
  const smMdMatches = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const smDownMatches = !smUpMatches;

  const { user, setUser } = useContext(AuthContext);

  const [tokenExists, setTokenExists] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTokenExists(true);
    }
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getMyProfile,
    enabled: tokenExists
  });
  //if loading and if error, do not pass the context.
  if (!isLoading && !isError) {
    const userObj = data.data.user;
    setUser(userObj);
  }

  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Container>
        {smDownMatches ? (
          <StyledToolbar>
            <IconButton sx={{ position: "relative", right: "1.5rem" }}>
              <MenuIcon fontSize="medium" />
            </IconButton>
            <LocationBar />
            <InterestButton />
          </StyledToolbar>
        ) : (
          <StyledToolbar>
            {/* box1 */}
            <LogoBox>
              <Logo onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
                Crew Up
              </Logo>
            </LogoBox>

            {/* box2 */}
            <LocAndSearchBox>
              <LocationBar />
              {mdUpMatches && <SearchBar />}
            </LocAndSearchBox>
            {/* box3 */}
            <AddAndProfile>
              <InterestButton />
              {smUpMatches && <Profile />}
            </AddAndProfile>
          </StyledToolbar>
        )}
      </Container>
    </AppBar>
  );
}

export default NavBar;
