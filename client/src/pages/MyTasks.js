import { Box, Container, Grid, Paper, styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllTasks } from "../api/tasksApi";
import { ProfileSideBox } from "../components/ProfileSideBox";
import TasksContainer from "../components/TasksContainer";

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  background: "#fff",
  padding: "1rem",
  maxHeight: "800px",
  overflowY: "scroll"
});

const MyTasks = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllTasks
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const tasks = data.data.tasks;

  return (
    <div>
      <Grid container spacing={5} sx={{ padding: "2rem 3rem" }}>
        <Grid item xs={2}>
          <ProfileSideBox />
        </Grid>
        <Grid item xs={10}>
          <StyledPaper elevation={3}>
            {tasks.map((task) => {
              return <TasksContainer task={task} />;
            })}
          </StyledPaper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyTasks;
