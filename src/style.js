import styled from "styled-components";
import { Grid2, Typography } from "@mui/material";

export const Container = styled(Grid2)`
  padding: 0px;
  max-height: 100vh;
  margin-bottom: 0px;
`;

export const LeftSection = styled(Grid2)`
  background: linear-gradient(180deg, #06417f 0%, #40cf8e 100%);
  padding: 0px 100px;
  height: 100vh;
`;

export const RightSection = styled(Grid2)``;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 54.47px;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  margin: 0;
  padding-bottom: 24px;
`;
export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 27.47px;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  margin: 0;
  padding-bottom: 24px;
`;
