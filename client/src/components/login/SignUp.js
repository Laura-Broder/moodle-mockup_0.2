import React, { useState } from "react";
import { StyledForm } from "./loginStyle";
import Button from "../utils/Button";
import Input from "../utils/Input";
import { createNewUser } from "../../apis/api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUser({ name, email, userId, password });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      {/* <Input
        label="User Name:"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      /> */}
      <Input
        label="Email:"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      {/* <Input
        label="ID:"
        name="userId"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
        value={userId}
      /> */}
      <Input
        label="Password:"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        // value={password.replaceAll(/./g, "*")}
        value={password}
      />
      {/* <Input label="Confirm Password:" name="confPassword" /> */}
      {/* TODO add picture upload */}
      <Button type="submit" label="Sign Up" />
    </StyledForm>
  );
};
export default SignUp;
