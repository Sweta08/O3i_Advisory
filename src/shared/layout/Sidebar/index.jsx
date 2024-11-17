import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../../assets/logo.png";
import DashboardIcon from "../../../assets/icon/dashbaord.svg";
import ComapnayIcon from "../../../assets/icon/comapnay_management.svg";
import Subscription from "../../../assets/icon/subscription.svg";
import { Stack } from "@mui/material";
import { DrawerContainer } from "./style";
import { Link } from "react-router-dom";

const drawerWidth = 272;

const Menu = [
  {
    title: "Dashboard",
    icon: <img src={DashboardIcon} />,
    link:"/dashbaord"
  },
  {
    title: "Company Management",
    icon: <img src={ComapnayIcon} />,
    link:"",
  },
  {
    title: "Subscription",
    icon: <img src={Subscription} />,
    link:"",
  },
  {
    title: "Sub Admin",
    icon: <img src={Subscription} />,
    link:"",
  },
];

function Sidebar() {
  return (
    <DrawerContainer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#2a2c37",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <img src={Logo} width={"124px"} />
      </Stack>

      <List>
        {Menu.map((item) => (
          <ListItem key={item.title} disablePadding>
            <Link to={item.link} style={{color:"unset", textDecoration:"none"}}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </DrawerContainer>
  );
}

export default Sidebar;
