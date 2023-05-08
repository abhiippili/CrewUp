import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import TaskFilters from "./../components/TasksPage/TaskFilters";
import TasksList from "./../components/TasksPage/TasksList";

const FlexContainer = styled(Box)({
  display: "flex",
  flexDirection: "column"
});

const Tasks = () => {
  return (
    <FlexContainer>
      <TaskFilters />
      <TasksList />
    </FlexContainer>
  );
};

export default Tasks;
