import {
  Box,
  Container,
  stepLabelClasses,
  styled,
  Typography
} from "@mui/material";

const StyledContainer = styled(Container)({
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  borderRadius: "10px",
  padding: "10px",
  margin: "10px 0"
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "5px 0"
});

const Value = styled(Typography)({
  marginLeft: "5px"
});

const TasksContainer = ({ task }) => {
  return (
    <StyledContainer>
      <FlexBox sx={{ justifyContent: "space-between" }}>
        <FlexBox>
          <Typography>
            <b>Title: </b>
          </Typography>
          <Value>{task.title}</Value>
        </FlexBox>
        <FlexBox>
          <Typography>
            <b>Category: </b>
          </Typography>
          <Value>{task.category.category}</Value>
        </FlexBox>
        <FlexBox>
          <Typography>
            <b>Sub-Category: </b>
          </Typography>
          <Value>{task.subCategory}</Value>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <Typography>
          <b>Description: </b>
        </Typography>
        <Value>{task.description}</Value>
      </FlexBox>
      <FlexBox>
        <Typography>
          <b>Address:</b>
        </Typography>
        <Value>{task.address}</Value>
      </FlexBox>
      <FlexBox>
        <Typography>
          <b>City:</b>
        </Typography>
        <Value>{task.location.location}</Value>
      </FlexBox>

      <FlexBox sx={{ justifyContent: "space-between" }}>
        <FlexBox>
          <Typography>
            <b>Offered/Wage: </b>
          </Typography>
          <Value>{task.salary}</Value>
        </FlexBox>
        <FlexBox>
          <Typography>
            <b>Date Posted : </b>
          </Typography>
          <Value>{task.datePosted.slice(0, 10)}</Value>
        </FlexBox>
        <FlexBox>
          <Typography>
            <b>Phone Number : </b>
          </Typography>
          <Value>{task.phoneNumber}</Value>
        </FlexBox>
      </FlexBox>
    </StyledContainer>
  );
};

export default TasksContainer;
