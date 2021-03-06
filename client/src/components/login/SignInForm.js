import React, { useState } from "react";
import { logIn } from "../../apis/usersApi";
import { StyledForm } from "./loginStyle";
import Button from "../utils/Button";
import Input from "../utils/Input";
import { useHistory } from "react-router-dom";

const SignInForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn({ email, password });
    history.replace(`/${props.userType}/dashboard`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div>
        <Input
          required
          label="Email:"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Input
          required
          label="Password:"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          // value={password.replaceAll(/./g, "*")}
        />
      </div>
      <Button type="submit" label="Sign In" />
    </StyledForm>
  );
};
export default SignInForm;
