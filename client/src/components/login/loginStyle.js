import styled from "styled-components";
import color from "../../css/colors";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 10px auto;
  padding: 3px 10px;
  border: 2px solid ${color.darkPurple};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: ${color.darkPurple};
  &:hover {
    color: ${color.lightPurple};
  }
`;
