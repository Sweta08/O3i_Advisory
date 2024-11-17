import * as React from "react";
import Box from "@mui/material/Box";
import DataTable from "./table";
import Sidebar from "../../shared/layout/Sidebar";
import Header from "../../shared/layout/Header";

const Dashboard = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Header />
        <Box sx={{ p: "24px", background: "#F7F7F9", marginTop: "5px" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
