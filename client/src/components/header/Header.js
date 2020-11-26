import React from "react";
import { StyledHeader, StyledH1, StyledLink } from "./headerStyle";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledH1>Moodle</StyledH1>
      </StyledLink>
    </StyledHeader>
  );
};
export default Header;
