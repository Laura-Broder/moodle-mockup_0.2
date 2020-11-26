// save user token (token)
export const setUserToken = (token) => {
  localStorage.setItem("moodle-logged-in", token);
  return true;
};

// get logged in user token ()
export const getLoggedInUserToken = () => {
  const userToken = localStorage.getItem("moodle-logged-in");
  return userToken;
};

// delete user token on log out ()
export const removeUserToken = () => {
  if (!localStorage.getItem("moodle-logged-in")) {
    return false;
  }
  localStorage.removeItem("moodle-logged-in");
  return true;
};
