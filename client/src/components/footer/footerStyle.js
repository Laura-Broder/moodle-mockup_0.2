import styled from "styled-components";
import color from "../../css/colors";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background: ${color.darkPurple};
  color: white;
  & p {
    margin-right: 5px;
  }
  & i {
    color: white;
    margin: 5px;
  }
`;
