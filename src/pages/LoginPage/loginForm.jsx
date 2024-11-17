import React, { useState, useRef } from "react";
import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../../assets/logo.png";
import { CustomButton, LoginTitle, ForgotPassText } from "./style";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const errorRef = useRef(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRedirect = () => {
    debugger;
    if (email === "admin@admin.com" && password === "admin") {
      navigate("/dashbaord");
    } else {
      errorRef.current.style.display = "block";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 68px",
        minHeight: "100vh",
				maxHeight:"100vh",
				overflow:"auto"
      }}
    >
      <img src={Logo} />
      <LoginTitle>Login</LoginTitle>

      <form>
        <FormControl variant="standard" className="inputfield">
          <label className="formLable">
            Email Id
            <span>*</span>
          </label>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="filled"
            ref={emailRef}
          />
        </FormControl>
        <FormControl variant="standard" className="inputfield">
          <label className="formLable">
            Password
            <span>*</span>
          </label>
          <TextField
            ref={passwordRef}
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <ForgotPassText>Forget Password ?</ForgotPassText>
        <label style={{ color: "red", display: "none" }} ref={errorRef}>
          Invalid Username or Password
        </label>
        <CustomButton variant="contained" fullWidth onClick={handleRedirect}>
          Login
        </CustomButton>
      </form>
    </Box>
  );
}

export default LoginForm;
