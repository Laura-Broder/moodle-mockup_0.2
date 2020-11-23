import styled from "styled-components";
import color from "../../css/colors";

export const StyledInput = styled.input``;
export const StyledLabel = styled.label``;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  background: ${color.darkPurple};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${color.darkPurple};
  border-radius: 3px;
  &:hover {
    background: ${color.lightPurple};
    border: 2px solid ${color.lightPurple};

    cursor: pointer;
  }
`;
