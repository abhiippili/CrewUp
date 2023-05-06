import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const CategoryCard = ({ name, src }) => {
  return (
    <Card
      sx={{
        maxWidth: "350px",
        cursor: "pointer",
        boxShadow: "0 2px 2px 0.5px rgba(0, 0, 0, .2)"
      }}
    >
      <CardMedia image={src} component="img" height="115" />
      <CardContent>
        <Typography sx={{ textAlign: "center" }}>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
