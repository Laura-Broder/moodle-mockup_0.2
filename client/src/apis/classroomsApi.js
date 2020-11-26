import axios from "axios";
import { getLoggedInUserToken } from "./auth";

export const createNewClassroom = async (classroom) => {
  try {
    const token = getLoggedInUserToken();
    if (!token) {
      return "please log in";
    }
    const res = await axios.post("/api/classes", classroom, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // if (classroom.selectedFile) {
    //   console.log(res.data._id);
    //   const resWithFile = await axios.post(
    //     `/api/classes/me/file/${res.data._id}`,
    //     classroom,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     },
    //   );
    //   console.log(resWithFile.data);
    //   return resWithFile.data;
    // }
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};

// get users classrooms
export const getUsersClassrooms = async () => {
  // console.log(id);
  try {
    const token = getLoggedInUserToken();
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

export const getClassroom = async (classId) => {
  try {
    const token = getLoggedInUserToken();
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

export const deleteClassroom = async (classId) => {
  // console.log(classId);
  try {
    const token = getLoggedInUserToken();
    if (!token) {
      return "please log in";
    }
    // console.log(token);
    const res = await axios.delete(`/api/classes/me/${classId}`, {
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
