import React from "react";
import { StyledInput, StyledLabel, StyledContainer } from "./utilsStyle";

const Input = ({ label, name, onChange, value }) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput type="text" name={name} onChange={onChange} value={value} />
    </StyledContainer>
  );
};
export default Input;
