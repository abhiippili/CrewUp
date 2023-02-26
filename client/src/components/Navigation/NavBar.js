import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  styled,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import LocationBar from "./LocationBar";
import SearchBar from "./SearchBar";
import InterestButton from "./InterestButton";
import Profile from "./Profile";
import { theme } from "./../../theme";

//3 : 16 : 8 - above md
//3 : 4 : 20 - above sm and below md

const StyledToolbar = styled(Toolbar)({
  display: "flex"
});

const LogoBox = styled(Box)({
  flex: 3
});

const Logo = styled(Typography)({
  color: "black",
  fontWeight: "600",
  fontFamily: "Poppins"
});

const LocAndSearchBox = styled(Box)({
  flex: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
});

const AddAndProfile = styled(Box)({
  flex: 8,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
});

function NavBar() {
  const mdUpMatches = useMediaQuery(theme.breakpoints.up("md"));
  const smUpMatches = useMediaQuery(theme.breakpoints.up("sm"));

  const [worker, setWorker] = useState(false);
  const [user, setUser] = useState("abhishek");

  return (
    <AppBar position="static" color="primary">
      <Container>
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
      </Container>
    </AppBar>
  );
}

export default NavBar;
