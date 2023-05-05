import React, { useState } from "react";
import Banner from "../components/HomePage/Banner";
import TaskCategories from "../components/HomePage/TaskCategories";
import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
import PortfolioCategories from "../components/HomePage/PortfolioCategories";

const StyledTabs = styled(Tabs)({
  "& .Mui-selected": {
    backgroundColor: "#ffc72c38"
  },
  marginTop: "0.5rem"
});

const StyledTab = styled(Tab)({
  flex: 1,
  fontWeight: 600,

  color: "black",
  fontSize: "1rem"
});

const tabComponents = [<TaskCategories />, <PortfolioCategories />];

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Banner />
      <StyledTabs
        variant="fullWidth"
        value={activeTab}
        onChange={handleTabChange}
        textColor="black"
        TabIndicatorProps={{ style: { height: 3 } }}
      >
        <StyledTab label="Tasks Around Me" />
        <StyledTab label="Portfolios Around Me" />
      </StyledTabs>
      {tabComponents[activeTab]}
    </>
  );
};

export default Home;
