import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import "typeface-inter";
import "typeface-poppins";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
