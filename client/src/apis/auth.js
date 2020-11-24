// save array of users how are still logged in
export const setLoggedInUser = (id) => {
  const usersArr = JSON.parse(localStorage.getItem("moodle-logged-in")) || [];
  localStorage.setItem("moodle-logged-in", JSON.stringify([id, ...usersArr]));
  return true;
};
// get currently logged in user
export const getLoggedInUser = () => {
  const usersArr = JSON.parse(localStorage.getItem("moodle-logged-in")) || [];
  if (usersArr[0]) return usersArr[0];
  return false;
};

// save user token (id, token)
export const setUserToken = (id, token) => {
  localStorage.setItem(JSON.stringify(id), JSON.stringify(token));
  return true;
};

// delete user token (id)
export const removeUserToken = (id) => {
  if (localStorage.getItem(JSON.stringify(id))) {
    return false;
  }
  localStorage.removeItem(JSON.stringify(id));
  return true;
};

// get user token (id)
export const getUserToken = (id) => {
  const token = JSON.parse(localStorage.getItem(JSON.stringify(id)));
  return token;
};
