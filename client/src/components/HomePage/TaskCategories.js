import { Grid } from "@mui/material";
import React, { useState } from "react";
import { task_categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";

const cards = task_categories.slice(0, 8);

const TaskCategories = () => {
  const [selected, setSelected] = useState();
  const handleCardClick = (category) => {
    setSelected(category);
  };

  return (
    <Grid container spacing={2} sx={{ padding: "1rem" }}>
      {cards.map((card) => {
        return (
          <Grid item key={card.id} xs={3} className="card">
            <CategoryCard
              name={card.name}
              src={card.src}
              onClick={() => handleCardClick(card.name)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TaskCategories;
