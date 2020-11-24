import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLoggedInUser } from "../../apis/auth";
import { getUser } from "../../apis/usersApi";

import {
  StyledText,
  StyledContainer,
  StyledHeader,
  StyledH1,
  StyledLink,
} from "./headerStyle";
const Header = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");

  const getUserName = async () => {
    const userId = getLoggedInUser();
    const user = await getUser(userId);
    setUsername(user.name);
  };
  useEffect(() => {
    getUserName();
  });

  const renderLoggedUser = () => {
    if (location.pathname === "/" || location.pathname === "/login") {
      return null;
    }
    return (
      <StyledContainer>
        <StyledText>Logged in as {username}</StyledText>
        <StyledLink to="/">Log out</StyledLink>
      </StyledContainer>
    );
  };

  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledH1>Moodle</StyledH1>
      </StyledLink>
      {renderLoggedUser()}
    </StyledHeader>
  );
};
export default Header;
