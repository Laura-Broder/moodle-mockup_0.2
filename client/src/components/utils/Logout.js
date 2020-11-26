import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { isUserLoggedIn, getUser, logout } from "../../apis/usersApi";
import { StyledContainerRow, StyledText } from "./utilsStyle";
import Button from "./Button";

const Logout = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const getUserName = async () => {
    if (isUserLoggedIn()) {
      const user = await getUser();
      setUsername(user.name);
    }
  };
  useEffect(() => {
    getUserName();
  });

  const logoutUser = async () => {
    await logout();
    setUsername("");
    history.push("/");
  };

  const renderLogout = () => {
    if (username) {
      return (
        <StyledContainerRow>
          <StyledText>Logged in as {username}</StyledText>
          <Button label="log out" onClick={logoutUser} />
        </StyledContainerRow>
      );
    }
    return null;
  };
  return renderLogout();
};
export default Logout;
