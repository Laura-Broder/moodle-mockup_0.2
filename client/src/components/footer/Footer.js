import React from "react";
import { StyledContainer } from "./footerStyle";

const Footer = () => {
  return (
    <StyledContainer>
      <p>
        Created By<strong> Laura Broder</strong>
      </p>
      <a
        href="https://github.com/Laura-Broder"
        target="_blank"
        rel="noreferrer">
        <i className="fab fa-github-square fa-2x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/laura-broder-01257662/"
        target="_blank"
        rel="noreferrer">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
    </StyledContainer>
  );
};
export default Footer;
