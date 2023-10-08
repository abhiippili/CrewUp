import {
  Box,
  Button,
  Grid,
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
import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../../api/locationsApi";
import { getCategories } from "../../api/categoriesApi";

const menuStyle = {
  maxHeight: "300px",
  overflowY: "auto"
};

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  padding: "10px"
});

const StyledTextField = styled(TextField)({
  borderRadius: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
  marginBottom: "1.5rem"
});

const TaskFilter = () => {
  const navigate = useNavigate();

  const {
    data: locationsData,
    isLoading: loading1,
    isError: error1
  } = useQuery({
    queryKey: ["locations"],
    queryFn: getLocations
  });

  const {
    data: categoriesData,
    isLoading: loading2,
    isError: error2
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories
  });

  const [filters, setFilters] = useState({
    location: "",
    category: "",
    address: ""
  });

  if (loading1 || loading2) {
    return <div>Loading...</div>;
  }
  if (error1 || error2) {
    return <div>Error</div>;
  }

  const categories = categoriesData.data.categories;
  const locations = locationsData.data.locations;

  console.log(categories);
  console.log(locations);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <StyledPaper elevation={4} component="form" onSubmit={handleFormSubmit}>
      <StyledTextField
        select
        fullWidth
        name="location"
        label="Location"
        value={filters.location}
        variant="outlined"
        margin="dense"
        color="secondary"
        onChange={handleInputChange}
      >
        {locations.map((el) => (
          <MenuItem value={el.location}>{el.location}</MenuItem>
        ))}
      </StyledTextField>

      <StyledTextField
        select
        fullWidth
        name="category"
        label="Categories And Skills"
        value={filters.category}
        variant="outlined"
        color="secondary"
        margin="dense"
        onChange={handleInputChange}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              style: menuStyle
            }
          }
        }}
      >
        {categories.map((el) => (
          <MenuItem value={el.category}>{el.category}</MenuItem>
        ))}
      </StyledTextField>

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
  );
};

export default TaskFilter;
