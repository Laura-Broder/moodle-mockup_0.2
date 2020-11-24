import React, { useEffect, useState } from "react";
import { StyledContainer } from "./dashboardStyle";
import ClassroomsList from "./ClassroomsList";
import { getLoggedInUser } from "../../../apis/auth";
import {
  createNewClassroom,
  getUsersClassrooms,
} from "../../../apis/classroomsApi";
import ClassroomCard from "./ClassroomCard";

const TeacherDashboard = () => {
  const [userId, setUserId] = useState("");
  const [classrooms, setClassrooms] = useState([]);
  const [warning, setWarning] = useState("");
  const [classId, setClassId] = useState("");

  useEffect(() => {
    setUserId(getLoggedInUser());
  }, []);

  useEffect(() => {
    let didCancel = false;
    const fetchClasses = async () => {
      if (userId) {
        const res = await getUsersClassrooms(userId);
        if (!didCancel) {
          setClassrooms([...res]);
        }
      }
    };
    fetchClasses();
    return () => {
      didCancel = true;
    };
  }, [userId]);

  const handleSubmit = async (classroom) => {
    if (userId) {
      const classRes = await createNewClassroom(userId, classroom);
      if (classRes) {
        const res = await getUsersClassrooms(userId);
        setClassrooms([...res]);
      } else {
        setWarning(
          "This subject is already in the list. Try a different name.",
        );
        setTimeout(() => {
          setWarning("");
        }, 3000);
      }
    }
  };

  const displayClassroom = (e) => {
    setClassId(e.target.id);
  };

  return (
    <StyledContainer>
      <ClassroomsList
        classrooms={classrooms}
        displayClassroom={displayClassroom}
        handleSubmit={handleSubmit}
        warning={warning}
      />

      {classId ? <ClassroomCard classId={classId} /> : null}
    </StyledContainer>
  );
};
export default TeacherDashboard;
