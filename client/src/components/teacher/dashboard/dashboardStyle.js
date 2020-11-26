import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../../../css/colors";

export const StyledWarning = styled.div`
  color: white;
  border: 2px solid ${color.darkPurple};
  border-radius: 3px;
  padding: 3px 10px;
  background: ${color.lightPurple};
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: start;
`;

export const StyledContainerColumn = styled.div`
  border: 2px solid ${color.darkPurple};
  width: 400px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  & h3 {
    padding: 6px 10px;
    border-bottom: 2px solid ${color.darkPurple};
  }
  & li {
    padding: 3px 10px;
    border-bottom: 2px solid ${color.darkPurple};
    list-style: none;
  }
  & li:hover {
    background: ${color.yellow};
    cursor: pointer;
  }
`;
export const StyledHeader = styled.h3``;

export const StyledForm = styled.form`
  ${"" /* max-width: 500px; */}
  margin: 10px;
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

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:hover {
    color: ${color.darkPurple};
  }
`;
