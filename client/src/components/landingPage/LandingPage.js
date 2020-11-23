import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StyledContainer } from "./landingPageStyle";
import Button from "../utils/Button";
import { testConnection } from "../../apis/api";

const LandingPage = () => {
  const history = useHistory();
  const routeChange = (e) => {
    history.push(`/login/${e.target.value}`);
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <StyledContainer className="flex-column">
      <h1>Welcome To Moodle</h1>
      <p>Are You A Student or A Teacher?</p>
      <StyledContainer>
        <Button label="Student" value="student" onClick={routeChange} />
        <Button label="Teacher" value="teacher" onClick={routeChange} />
      </StyledContainer>
    </StyledContainer>
  );
};
export default LandingPage;
