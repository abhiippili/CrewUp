import { Box, Container, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { getAllTasks } from "./../../api/tasksApi";

const TasksContainer = styled(Box)({
  flexGrow: 4
});

const Task = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "1rem",
  padding: "1rem",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)"
});

const InnerText = styled(Typography)({
  marginLeft: "10px"
});

const TasksList = () => {
  return (
    <TasksContainer>
      {/* {tasksList.map((task) => {
        return (
          <Task>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <InnerText>
                <b>Title :</b> {task.title}
              </InnerText>
              <InnerText>
                {" "}
                <b>Category :</b>
                {task.category}
              </InnerText>
              <InnerText>
                <b>Wage : </b>
                {task.wage}
              </InnerText>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <InnerText>
                <b>Description :</b> {task.description}
              </InnerText>
              <InnerText>
                <b>Work Address :</b>
                {task.workAddress}
              </InnerText>
              <InnerText>
                <b>Work City : </b>
                {task.workCity}
              </InnerText>
              <InnerText>
                <b>Phone Number : </b>
                {task.phoneNumber}
              </InnerText>
            </Box>
          </Task>
        );
      })} */}
    </TasksContainer>
  );
};
export default TasksList;
