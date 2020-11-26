import axios from "axios";
import { setUserToken, getLoggedInUserToken, removeUserToken } from "./auth";

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
    setUserToken(res.data.token);
    return res.data.user._id;
  } catch (e) {
    console.log(e.response);
  }
};

export const logIn = async (user) => {
  try {
    const res = await axios.post("/api/users/sign-in", user);
    return setUserToken(res.data.token);
  } catch (e) {
    console.log(e.response);
  }
};

export const getAllUsers = async () => {
  try {
    const token = getLoggedInUserToken();
    if (!token) {
      return "please log in";
    }
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

export const isUserLoggedIn = () => {
  const token = getLoggedInUserToken();
  if (!token) {
    return false;
  }
  return true;
};

export const getUser = async () => {
  try {
    const token = getLoggedInUserToken();
    if (!token) {
      return "please log in";
    }
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

export const logout = async () => {
  try {
    const token = getLoggedInUserToken();

    if (!token) {
      return "please log in";
    }
    removeUserToken();

    const res = await axios.post("/api/users/logout", {
      headers: {
        Authorization: token,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};

export const updateUser = async (user) => {
  try {
    const token = getLoggedInUserToken();

    if (!token) {
      return "please log in";
    }

    const res = await axios.patch("/api/users", {
      ...user,
      headers: {
        Authorization: token,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};
