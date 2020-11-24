import axios from "axios";
import { setUserToken, removeUserToken, getUserToken } from "./auth";

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
    setUserToken(res.data.user._id, res.data.token);
    return res.data.user._id;
  } catch (e) {
    console.log(e);
  }
};

export const logIn = async (user) => {
  try {
    const res = await axios.post("/api/users/sign-in", user);
    setUserToken(res.data.user._id, res.data.token);
    return res.data.user._id;
  } catch (e) {
    console.log(e.response);
  }
};

export const getAllUsers = async (id) => {
  try {
    const token = getUserToken(id);
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

export const getUser = async (id) => {
  try {
    const token = getUserToken(id);
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

export const logout = async (id) => {
  try {
    const token = getUserToken(id);

    if (!token) {
      return "please log in";
    }

    const res = await axios.post("/api/users/logout", {
      headers: {
        Authorization: token,
      },
    });

    removeUserToken(id);

    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};

export const updateUser = async (user) => {
  try {
    const token = getUserToken(user._id);

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
