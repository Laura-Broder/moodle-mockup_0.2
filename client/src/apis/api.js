import axios from "axios";

export const testConnection = async () => {
  try {
    const res = await axios.get("/api");
    console.log(res.data);
  } catch (e) {
    console.log(e.response);
  }
};

export const createNewUser = async (user) => {
  try {
    const res = await axios.post("/api/users/sign-up", user);
    console.log("successfully saved", res.data);
  } catch (e) {
    console.log(e.response);
  }
};

export const logIn = async (user) => {
  try {
    const res = await axios.post("/api/users/sign-in", user);
    console.log("successfully logged in", res.data);
  } catch (e) {
    console.log(e.response);
  }
};

export const getAllUsers = async (token) => {
  try {
    const res = await axios.get("/api/users", {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};

export const getUser = async (token) => {
  try {
    const res = await axios.get("/api/users/me", {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};

export const logout = async (token) => {
  try {
    const res = await axios.post("/api/users/logout", {
      headers: {
        Authorization: token,
      },
    });
    return "logged out";
  } catch (e) {
    console.log(e.response);
  }
};
