import React from "react";
import { StyledContainer } from "./utilsStyle";

const TextArea = ({ name, label, onChange, value }) => {
  return (
    <StyledContainer>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} onChange={onChange} value={value}></textarea>
    </StyledContainer>
  );
};
export default TextArea;
