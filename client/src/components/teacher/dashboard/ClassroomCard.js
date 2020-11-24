import React, { useEffect, useState } from "react";
import { StyledContainerColumn } from "./cardStyle";
import { getLoggedInUser } from "../../../apis/auth";
import { getClassroom } from "../../../apis/classroomsApi";

const ClassroomCard = ({ classId }) => {
  const [userId, setUserId] = useState("");
  const [classroom, setClassroom] = useState({});

  useEffect(() => {
    setUserId(getLoggedInUser());
  }, []);

  useEffect(() => {
    let didCancel = false;
    const fetchClass = async () => {
      if (userId) {
        const res = await getClassroom(userId, classId);
        if (!didCancel) {
          setClassroom(res);
        }
      }
    };
    fetchClass();
    return () => {
      didCancel = true;
    };
  }, [userId, classId]);

  const renderCard = () => {
    if (Object.keys(classroom).length) {
      return (
        <StyledContainerColumn>
          <h3>Subject: {classroom.subject}</h3>
          <p>Description: {classroom.description}</p>
        </StyledContainerColumn>
      );
    } else return null;
  };
  return renderCard();
};
export default ClassroomCard;
