import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/HomePage/Banner";
import TaskCategories from "../components/HomePage/TaskCategories";
import { Box, styled, Tab, Tabs } from "@mui/material";
import PortfolioCategories from "../components/HomePage/PortfolioCategories";
import Tasks from "./Tasks";

const StyledTabs = styled(Tabs)({
  "& .Mui-selected": {
    backgroundColor: "#ffc72c38"
  }
});

const StyledTab = styled(Tab)({
  flex: 1,
  fontWeight: 600,
  textTransform: "unset",
  color: "black",
  fontSize: "1rem"
});

const tabComponents = [<TaskCategories />, <PortfolioCategories />];

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    return setActiveTab(newValue);
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
        <StyledTab label="Tasks Around Me (For Workers)" />
        <StyledTab label="Portfolios Around Me (For Users)" />
      </StyledTabs>
      {tabComponents[activeTab]}
    </>
  );
};

export default Home;
