import styled from "styled-components";
import { Drawer } from "@mui/material";

export const DrawerContainer = styled(Drawer)`
  .MuiDrawer-docked{
    width: unset;
  }
  .MuiDrawer-paper {
    color: #bec9ec;
    padding: 0px 25px;
  }
  .MuiListItemButton-root {
    padding: 10px 0px !important;
  }
  .MuiTypography-root {
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px;
  }
  .MuiListItemIcon-root {
    min-width: unset;
    padding-right: 6px;
    img {
      width: 24px;
    }
  }
`;
