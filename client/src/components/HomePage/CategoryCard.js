import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, src }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: "350px",
        cursor: "pointer",
        boxShadow: "0 2px 2px 0.5px rgba(0, 0, 0, .2)"
      }}
      onClick={() => navigate("/tasks")}
    >
      <CardMedia image={src} component="img" height="115" />
      <CardContent>
        <Typography sx={{ textAlign: "center" }}>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
