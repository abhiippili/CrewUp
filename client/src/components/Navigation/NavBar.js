import React, { useState } from "react";
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

//3 : 16 : 8 - above md
//3 : 4 : 10 - above sm and below md
//1 : 2 : 4 -below sm

const StyledToolbar = styled(Toolbar)({
  display: "flex"
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

  const [worker, setWorker] = useState(false);
  const [user, setUser] = useState("ab");

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
              <Logo>Crew Up</Logo>
            </LogoBox>

            {/* box2 */}
            <LocAndSearchBox>
              <LocationBar />
              {mdUpMatches && <SearchBar />}
            </LocAndSearchBox>
            {/* box3 */}
            <AddAndProfile>
              <InterestButton />
              {smUpMatches && <Profile user={user} worker={worker} />}
            </AddAndProfile>
          </StyledToolbar>
        )}
      </Container>
    </AppBar>
  );
}

export default NavBar;
