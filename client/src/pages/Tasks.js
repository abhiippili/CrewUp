import {
  Autocomplete,
  Box,
  Grid,
  MenuItem,
  Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import TaskFilters from "./../components/TasksPage/TaskFilters";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTasks } from "../api/tasksApi";
import TasksContainer from "../components/TasksContainer";
import { useNavigate } from "react-router-dom";

const sortOptions = [
  { label: "Date Posted : Latest to Oldest", value: "-datePosted" },
  { label: "Date Posted : Oldest to Latest", value: "+datePosted" },
  {
    label: "Wage : Desc to Asc",
    value: "-salary"
  },
  {
    label: "Wage : Asc to Desc",
    value: "+salary"
  }
];

const TopGrid = styled(Grid)({
  marginBottom: "1rem"
});

const StyledSearchBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  height: "3rem"
});

const SortBox = styled(Box)({
  display: "flex",
  height: "3rem",
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  width: "240px",
  paddingTop: "1rem",
  alignItems: "center"
});

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  background: "#fff",
  padding: "1rem",
  maxHeight: "800px",
  overflowY: "scroll"
});

const Tasks = () => {
  const queryClient = useQueryClient();

  const [userInput, setUserInput] = useState({
    search: "",
    sort: ""
  });
  const navigate = useNavigate();
  const [inputSubmit, setInputSubmit] = useState(true);

  const {
    data: tasksData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["tasks", userInput],
    queryFn: () => getAllTasks(userInput),
    refetchOnWindowFocus: false
  });

  const handleSearchSubmit = () => {
    queryClient.invalidateQueries({ queryKey: ["tasks", userInput] });
  };

  const handleEnterKey = (e) => {
    if (e.key == "Enter") {
      queryClient.invalidateQueries({ queryKey: ["tasks", userInput] });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const tasks = tasksData.data.tasks;
  const taskTitles = tasks.map((task) => task.title);
  const shuffleArray = () => {
    taskTitles.sort(() => Math.random() - 0.5);
  };
  shuffleArray();

  return (
    <Box sx={{ padding: "1rem 2rem" }}>
      <TopGrid container spacing={2}>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={5}>
          <StyledSearchBox>
            <Autocomplete
              fullWidth
              freeSolo
              disablePortal
              id="combo-box-demo"
              options={taskTitles}
              onChange={(e, newValue) => {
                setUserInput({ ...userInput, search: newValue });
                console.log("Input change " + userInput);
              }}
              value={userInput.search}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onKeyDown={handleEnterKey}
                  placeholder="Search by title"
                />
              )}
            />
            <SearchIcon
              onClick={handleSearchSubmit}
              sx={{ cursor: "pointer" }}
            />
          </StyledSearchBox>
        </Grid>
        <Grid item xs={3.5}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box />
            <SortBox>
              <TextField
                select
                fullWidth
                name="sort"
                label="Sort"
                value={userInput.sort}
                variant="outlined"
                color="secondary"
                size="small"
                onChange={(e) => {
                  setUserInput({ ...userInput, sort: e.target.value });
                  console.log("Sort Box : " + userInput);
                }}
              >
                {sortOptions.map((el) => {
                  return <MenuItem value={el.value}>{el.label}</MenuItem>;
                })}
              </TextField>
            </SortBox>
          </Box>
        </Grid>
      </TopGrid>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <TaskFilters />
        </Grid>
        <Grid item xs={9.5}>
          <StyledPaper elevation={3}>
            {tasks.map((task) => {
              return <TasksContainer task={task} />;
            })}
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tasks;
