import React from "react";
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
            />
          </FlexBox>
          <FlexBox>
            <TextField
              select
              variant="standard"
              fullWidth
              required
              label="Select the category of the task"
            >
              <MenuItem>c1</MenuItem>
              <MenuItem>c2</MenuItem>
            </TextField>
          </FlexBox>
          <FlexBox>
            <Autocomplete
              fullWidth
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
              label="Enter the description of the task"
            />
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              multiline
              label="Enter the address or location of the task"
            />
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
              select
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
              label="Enter the money/wage you want to offer"
            />
          </FlexBox>
          <FlexBox>
            <TextField
              variant="standard"
              fullWidth
              required
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
