import React from "react";
import { StyledContainer, StyledLink } from "./loginStyle";
import SignInForm from "./SignInForm";
import SignUp from "./SignUp";

const LoginPage = (props) => {
  const userType = props.userType;
  const otherUserType = userType === "student" ? "teacher" : "student";
  return (
    <div>
      <h1>Log in as a {userType}</h1>
      <p>
        or change to{" "}
        <StyledLink
          to="/login"
          onClick={() => props.setUserType(otherUserType)}>
          {otherUserType}
        </StyledLink>
      </p>
      <StyledContainer>
        <SignInForm userType={userType} />
        <SignUp userType={userType} />
      </StyledContainer>
    </div>
  );
};
export default LoginPage;
