import axios from "axios";
import { getUserToken } from "./auth";

export const createNewClassroom = async (id, classroom) => {
  // console.log(id, classroom);
  try {
    const token = getUserToken(id);
    if (!token) {
      return "please log in";
    }
    // console.log(token);
    const res = await axios.post("/api/classes", classroom, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};

// get users classrooms
export const getUsersClassrooms = async (id) => {
  // console.log(id);
  try {
    const token = getUserToken(id);
    if (!token) {
      return "please log in";
    }
    // console.log(token);
    const res = await axios.get("/api/classes/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getClassroom = async (userId, classId) => {
  try {
    const token = getUserToken(userId);
    if (!token) {
      return "please log in";
    }
    // console.log(token);
    const res = await axios.get(`/api/classes/me/${classId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
