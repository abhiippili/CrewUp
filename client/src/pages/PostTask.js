import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  MenuItem,
  Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categoriesApi";

const menuStyle = {
  maxHeight: "200px",
  overflowY: "auto"
};

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  background: "#fff",
  width: "800px",
  margin: "1rem auto"
});

const FlexBox = styled(Box)({
  display: "flex",
  margin: "8px",
  padding: "8px",
  alignItems: "center",
  justifyContent: "center"
});

const PostTask = () => {
  const [taskData, setTaskData] = useState({});
  const {
    data: categoriesData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error Loading the Categories</div>;
  }

  const categories = categoriesData.data.categories;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  return (
    <div>
      <StyledPaper elevation={3}>
        <Box component="form">
          <FlexBox sx={{ margin: "10px auto" }}>
            <AddCircleIcon sx={{ color: "#082567" }} fontSize="medium" />
            <Typography variant="h7" fontFamily="inherit" fontWeight={600}>
              Post a Task
            </Typography>
          </FlexBox>
          <FlexBox sx={{ marginTop: "0px", paddingTop: "0px" }}>
            <TextField
              variant="standard"
              fullWidth
              required
              label="Enter the title of the task"
              name="title"
              onChange={handleInputChange}
            />
          </FlexBox>
          <FlexBox>
            <TextField
              select
              variant="standard"
              fullWidth
              required
              name="category"
              label="Select the category of the task"
              onChange={handleInputChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: menuStyle
                  }
                }
              }}
            >
              {categories.map((el) => {
                return <MenuItem>{el.category}</MenuItem>;
              })}
            </TextField>
          </FlexBox>
          <FlexBox>
            <Autocomplete
              fullWidth
              name="subCategory"
              onChange={handleInputChange}
              options={subCategories}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select a sub-category"
                  variant="standard"
                />
              )}
            />
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              multiline
              name="description"
              onChange={handleInputChange}
              label="Enter the description of the task"
            />
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              multiline
              name="address"
              onChange={handleInputChange}
              label="Enter the address or location of the task"
            />
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              select
              name="city"
              onChange={handleInputChange}
              label="Select the city of the task"
            >
              <MenuItem>cfsdf</MenuItem>
              <MenuItem>cfsddgnkdfg</MenuItem>
            </TextField>
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              name="salary"
              onChange={handleInputChange}
              label="Enter the money/wage you want to offer"
            />
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              name="phoneNumber"
              onChange={handleInputChange}
              inputProps={{ pattern: "[0-9]*" }}
              label="Enter your phone number"
            />
          </FlexBox>
          <Button>Post Task</Button>
        </Box>
      </StyledPaper>
    </div>
  );
};

export default PostTask;

const subCategories = ["abc", "aindklnas"];
