import React from "react";
import { useLocation } from "react-router-dom";

import { StyledHeader, StyledH1, StyledLink } from "./headerStyle";
const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledH1>Moodle</StyledH1>
      </StyledLink>
      <StyledLink to="/">
        {location.pathname !== "/" ? "Log out" : null}
      </StyledLink>
    </StyledHeader>
  );
};
export default Header;
