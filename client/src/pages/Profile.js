import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMyProfile } from "../api/usersApi";

const Profile = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile
  });

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isLoading) {
    return <div>Error</div>;
  }
  return <div>{data}</div>;
};

export default Profile;
