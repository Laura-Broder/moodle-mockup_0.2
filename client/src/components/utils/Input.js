import React from "react";
import { StyledInput, StyledLabel, StyledContainer } from "./utilsStyle";

const Input = ({ label, name, onChange, value, required }) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        required={required}
        type="text"
        name={name}
        onChange={onChange}
        value={value}
      />
    </StyledContainer>
  );
};
export default Input;
