import React, { useState } from "react";
import { logIn } from "../../apis/api";
import { StyledForm } from "./loginStyle";
import Button from "../utils/Button";
import Input from "../utils/Input";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn({ email, password });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div>
        <Input
          label="Email:"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Input
          label="Password:"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          // value={password.replaceAll(/./g, "*")}
          value={password}
        />
      </div>
      <Button type="submit" label="Sign In" />
    </StyledForm>
  );
};
export default SignInForm;
