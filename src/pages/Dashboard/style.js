import styled from "styled-components";
import { Button, Card } from "@mui/material";

export const Title = styled.h2`
  font-size: 17px;
  margin-top: auto;
  color: #434343;
  line-height: 25.56px;
  margin: 0px;
  margin-bottom: 20px;
  font-weight: 500;
`;
export const TableCard = styled(Card)`
  padding: 14px;
  box-shadow: none;
  table {
    thead {
      th {
        color: #7c7c7c;
        font-size: 15px;
        font-weight: 400;
        line-height: 22.5px;
        vertical-align: top;
        border-bottom: none;
        text-align: center;
        padding-top: 0px;
        &:first-child {
          padding-left: 0px;
        }
        .Mui-active {
          color: #7c7c7c;
        }

        input {
          background: #f8f8f8;
          padding: 10px 19px !important;
          border-radius: 5px;
          &::before {
            border-bottom: none !important;
          }
        }
      }
    }
    tbody {
      td {
        font-size: 13px;
        color: #606060;
        border-bottom: none;
      }
      tr {
        &:nth-child(odd) {
          background: #f3f3f3;
        }
      }
    }
  }
`;

export const CustomButton = styled(Button)`
  color: #fff;
  background: linear-gradient(
    89.92deg,
    #064a99 1.95%,
    #01a3c5 49.54%
  ) !important;
  box-shadow: 0px 2.74px 2.74px 0px #00000040;
  font-size: 11px !important;
  height: 29px;
  font-weight: 500 !important;
  padding: 8px  !important;
  border-radius: 4px !important;
`;
