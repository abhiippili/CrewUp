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

const Logo = styled(Typography)({
  color: "black",
  fontWeight: "600",
  fontFamily: "Poppins"
});

const LogoBox = styled(Box)({
  flex: 3,
  [theme.breakpoints.between("sm", "md")]: {
    flex: 3
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
    flex: 10,
    justifyContent: "end"
  }
});

function NavBar() {
  const mdUpMatches = useMediaQuery(theme.breakpoints.up("md"));
  const smUpMatches = useMediaQuery(theme.breakpoints.up("sm"));
  const smMdMatches = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
          {/* {!mdUpMatches && <Box sx={{ flex: 2 }}></Box>} */}
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
