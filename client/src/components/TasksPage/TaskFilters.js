import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { locations } from "./../../data/locations";
import { task_categories } from "./../../data/categories";

const StyledPaper = styled(Paper)({
  flex: 3,
  margin: "1rem",
  borderRadius: "1rem",
  background: "#fff",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  padding: "5px",
  height: "3rem"
});

const Stack = styled("form")({
  display: "flex",
  // flexDirection: "column",
  alignItems: "center"
});

//use a use-effect hook
const TaskFilter = () => {
  const [filters, setFilters] = useState({
    location: "",
    category: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <StyledPaper elevation={4}>
        {/* location */}
        <TextField
          select
          fullWidth
          sx={{ marginLeft: "1rem" }}
          name="location"
          label="Location"
          value={filters.location}
          variant="outlined"
          color="secondary"
          onChange={handleInputChange}
        >
          {locations.map((location) => (
            <MenuItem value={location.name}>{location.name}</MenuItem>
          ))}
        </TextField>

        {/* categories */}
        <TextField
          select
          fullWidth
          sx={{ marginLeft: "0.5rem" }}
          name="categories"
          label="Categories And Skills"
          value={filters.category}
          variant="outlined"
          color="secondary"
          onChange={handleInputChange}
        >
          {task_categories.map((category) => (
            <MenuItem value={category.name}>{category.name}</MenuItem>
          ))}
        </TextField>

        {/* address */}
        <TextField
          label="Address Keywords"
          name="address"
          fullWidth
          type="text"
          variant="outlined"
          color="secondary"
          value={filters.address}
          onChange={handleInputChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
          sx={{
            textTransform: "unset",
            fontFamily: "inherit",
            height: "2rem"
          }}
          size="small"
        >
          <b>Apply Filters</b>
        </Button>
      </StyledPaper>
      <Typography sx={{ flex: 1 }}>sort</Typography>
    </Box>
  );
};

export default TaskFilter;
