import loginImg from "../../assets/loginImg.png";
import LoginForm from "./loginForm";
import { Container, LeftSection, RightSection, SubTitle, Title } from "./style";

function LoginPage() {
  return (
    <Container container spacing={0}>
      <LeftSection size={6}>
        <div className="titleWrapper">
          <Title>Login Account</Title>
          <SubTitle>Login to find your space.</SubTitle>
        </div>
        <div>
          <img src={loginImg} width={"100%"} />
        </div>
      </LeftSection>
      <RightSection size={6}>
        <LoginForm />
      </RightSection>
    </Container>
  );
}

export default LoginPage;
