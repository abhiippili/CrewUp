import { Box, styled } from "@mui/material";
import React from "react";

const TasksContainer = styled(Box)({
  flexGrow: 4
});

const TasksList = () => {
  return <TasksContainer>TasksList</TasksContainer>;
};

export default TasksList;
