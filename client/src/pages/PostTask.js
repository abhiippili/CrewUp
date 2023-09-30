import React, { useEffect, useState } from "react";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categoriesApi";
import { getLocations } from "../api/locationsApi";
import { useNavigate } from "react-router-dom";
import { postTask } from "../api/tasksApi";

const menuStyle = {
  maxHeight: "200px",
  overflowY: "auto"
};

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  background: "#fff",
  width: "800px",
  margin: "1rem auto",
  paddingBottom: "8px"
});

const FlexBox = styled(Box)({
  display: "flex",
  margin: "8px",
  padding: "8px",
  alignItems: "center",
  justifyContent: "center"
});

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "center"
});

const PostTask = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const [taskData, setTaskData] = useState({
    title: "",
    category: "",
    subCategory: "",
    description: "",
    address: "",
    city: "",
    salary: "",
    phoneNumber: ""
  });

  const [subCategories, setSubCategories] = useState([]);
  const [mutateMessage, setMutateMessage] = useState("");

  const postTaskMutate = useMutation({
    mutationFn: (task) => postTask(task),
    onSuccess: (data) => {
      setMutateMessage(data.status);
    },
    onError: (err) => {
      setMutateMessage("error " + err.response.data.message);
    }
  });
  const {
    data: categoriesData,
    isLoading: loading1,
    isError: error1
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories
  });

  const {
    data: locationsData,
    isLoading: loading2,
    isError: error2
  } = useQuery({
    queryKey: ["locations"],
    queryFn: getLocations
  });

  if (loading1 || loading2) {
    return <div>Loading...</div>;
  }

  if (error1 || error2) {
    return <div>Error Loading the Categories</div>;
  }

  const categories = categoriesData.data.categories;
  const locations = locationsData.data.locations;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
    console.log(taskData);
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, category: value });
    const selectedCategory = categories.find((el) => el.category === value);
    const subCategoriesData = selectedCategory.subCategories;
    const arr = subCategoriesData.map((el) => {
      return el.subCategory;
    });
    if (arr.length === 0) {
      return setSubCategories([]);
    } else {
      return setSubCategories(arr);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTaskMutate.mutate(taskData);
  };

  return (
    <div>
      {mutateMessage}
      <StyledPaper elevation={3}>
        <Box component="form" onSubmit={handleSubmit}>
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
              value={taskData.title}
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
              value={taskData.category}
              label="Select the category of the task"
              onChange={handleCategoryChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: menuStyle
                  }
                }
              }}
            >
              {categories.map((el) => {
                return <MenuItem value={el.category}>{el.category}</MenuItem>;
              })}
            </TextField>
          </FlexBox>
          <FlexBox>
            <Autocomplete
              fullWidth
              freeSolo
              name="subCategory"
              options={subCategories}
              value={taskData.subCategory}
              onChange={(e, newValue) => {
                setTaskData({ ...taskData, subCategory: newValue });
              }}
              onInputChange={(e, newValue) => {
                setTaskData({ ...taskData, subCategory: newValue });
              }}
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
              value={taskData.description}
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
              value={taskData.address}
              onChange={handleInputChange}
              label="Enter the address or location of the task"
            />
          </FlexBox>
          <FlexBox>
            <TextField
              select
              type="text"
              variant="standard"
              fullWidth
              required
              name="city"
              value={taskData.city}
              onChange={handleInputChange}
              label="Select the city of the task"
            >
              {locations.map((el) => {
                return <MenuItem value={el.location}>{el.location}</MenuItem>;
              })}
            </TextField>
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              name="salary"
              value={taskData.salary}
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
              value={taskData.phoneNumber}
              onChange={handleInputChange}
              inputProps={{ pattern: "[0-9]*" }}
              label="Enter your phone number"
            />
          </FlexBox>
          <ButtonBox>
            <Button variant="contained" type="submit">
              Post Task
            </Button>
          </ButtonBox>
        </Box>
      </StyledPaper>
    </div>
  );
};

export default PostTask;

// const subCategories = ["abc", "aindklnas"];
