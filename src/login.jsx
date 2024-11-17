import { Grid2 } from "@mui/material";
import loginImg from "./loginImg.png";
import { Container, LeftSection, RightSection, SubTitle, Title } from "./style";

function Login() {
  return (
    <Container container spacing={0}>
      <LeftSection size={6}>
        <Title>Login</Title>
        <SubTitle>Login to find your space.</SubTitle>
        <img src={loginImg} width={"100%"} />
      </LeftSection>
      <RightSection size={6}>text</RightSection>
    </Container>
  );
}

export default Login;
