import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const PageNotFound = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click here</Button>
      <Menu open={open}>
        <MenuItem>abc</MenuItem>
        <MenuItem>abnfkja</MenuItem>
        <MenuItem>aiofn</MenuItem>
      </Menu>
    </div>
  );
};

export default PageNotFound;
