import { Box, Grid, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import TaskFilters from "./../components/TasksPage/TaskFilters";
import TasksList from "./../components/TasksPage/TasksList";

const FlexBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between"
});

const Tasks = () => {
  return (
    <div>
      <FlexBox>
        <Typography>agkmskdmg</Typography>
        <Typography>ksgksmdgmlmsdg</Typography>
      </FlexBox>
      <Grid container spacing={2} sx={{ padding: "1rem 2rem" }}>
        <Grid item xs={2.5}>
          <TaskFilters />
        </Grid>
      </Grid>
    </div>
  );
};

export default Tasks;
