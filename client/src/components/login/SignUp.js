import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createNewUser } from "../../apis/usersApi";
import { getLoggedInUserToken } from "../../apis/auth";
import { StyledForm } from "./loginStyle";
import Button from "../utils/Button";
import Input from "../utils/Input";

const SignUp = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewUser({ name, email, userId, password });
    history.push(`/${props.userType}/dashboard`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <Input
        required
        label="User Name:"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
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
        label="ID:"
        name="userId"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
        value={userId}
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
      {/* <Input label="Confirm Password:" name="confPassword" /> */}
      {/* TODO add picture upload */}
      <Button type="submit" label="Sign Up" />
    </StyledForm>
  );
};
export default SignUp;
