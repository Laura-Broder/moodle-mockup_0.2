import React, { useEffect, useState } from "react";
import { StyledContainerColumn } from "./cardStyle";
import { getClassroom } from "../../../apis/classroomsApi";
import Button from "../../utils/Button";

const ClassroomCard = ({ classId, setClassId }) => {
  const [classroom, setClassroom] = useState({});

  useEffect(() => {
    let didCancel = false;
    const fetchClass = async () => {
      const res = await getClassroom(classId);
      if (!didCancel) {
        setClassroom(res);
      }
    };
    fetchClass();
    return () => {
      didCancel = true;
    };
  }, [classId]);

  const renderCard = () => {
    if (Object.keys(classroom).length) {
      return (
        <StyledContainerColumn>
          <h3>Subject: {classroom.subject}</h3>
          <p>Description: {classroom.description}</p>
          <Button
            label="close"
            onClick={() => {
              setClassId("");
            }}
          />
        </StyledContainerColumn>
      );
    } else return null;
  };
  return renderCard();
};
export default ClassroomCard;
