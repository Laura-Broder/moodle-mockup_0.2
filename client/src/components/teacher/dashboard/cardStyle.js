import styled from "styled-components";
import color from "../../../css/colors";

export const StyledContainerColumn = styled.div`
  border: 2px solid ${color.darkPurple};
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 1;
  height: 100%;
  & h3 {
    padding: 6px 10px;
    border-bottom: 2px solid ${color.darkPurple};
  }
  & p {
    padding: 3px 10px;
    border-bottom: 2px solid ${color.darkPurple};
  }
`;
