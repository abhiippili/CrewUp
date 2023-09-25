import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getMyProfile } from "../api/usersApi";
import { Paper, styled, Typography } from "@mui/material";
import { AuthContext } from "./../contexts/AuthContext";

const StyledPaper = styled(Paper)({
  margin: "4rem  auto",
  marginBottom: "2rem",
  width: 800,
  padding: "12px 12px",
  borderRadius: "1rem",
  background: "#fff"
});

const Profile = () => {
  const { setUser } = useContext(AuthContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile
  });

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const user = data.data.user;
  setUser(user);
  return (
    <div>
      <StyledPaper>
        <img sr></img>
      </StyledPaper>
    </div>
  );
};

export default Profile;
