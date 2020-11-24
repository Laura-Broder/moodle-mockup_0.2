import styled from "styled-components";
import color from "../../css/colors";
import { Link } from "react-router-dom";

export const StyledText = styled.p`
  color: white;
  font-size: 1.2rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  background: ${color.darkPurple};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const StyledH1 = styled.h1`
  color: white;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border: 1px solid white;
    border-radius: 3px;
  }
`;
