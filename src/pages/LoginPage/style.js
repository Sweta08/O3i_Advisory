import styled from "styled-components";
import { Button, Grid2 } from "@mui/material";

export const Container = styled(Grid2)`
  padding: 0px;
  max-height: 100vh;
  margin-bottom: 0px;
`;

export const LeftSection = styled(Grid2)`
  background: linear-gradient(180deg, #06417f 0%, #40cf8e 100%);
  padding: 0px 100px;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .titleWrapper {
    min-height: 28%;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  }
`;

export const RightSection = styled(Grid2)`
  .inputfield {
    margin-bottom: 17px;
    width: 100%;
    input {
      background: #f4f4f4;
      border: none !important;
      border-radius: 10px !important;
      padding: 23px 12px !important;
      &::before {
        border-bottom: none !important;
      }
    }
    .MuiFilledInput-root {
      border-radius: 10px !important;

      &::before {
        border-bottom: none !important;
      }
    }
    .formLable {
      font-size: 20px;
      line-height: 30px;
      font-weight: 500;
      color: #7c7c7c;
      span {
        color: red;
      }
    }
  }
`;

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
export const LoginTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  line-height: 45px;
  color: #171717;
  margin: 0;
  padding-bottom: 30px;
  border-bottom: 2px solid #f4f4f4;
  width: 100%;
  margin-bottom: 24px;
  text-align: center;
`;



export const CustomButton = styled(Button)`
  color: #fff;
  background-color: #08467f !important;
  font-size: 30px !important;
  line-height: 40px !important;
  font-weight: 400 !important;
  padding: 15px 0px !important;
  border-radius: 10px !important;
`;

export const ForgotPassText = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #08467f;
  margin: 0px;
    padding-bottom: 90px;
`;