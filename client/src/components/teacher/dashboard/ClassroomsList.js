import React, { useState } from "react";
import {
  StyledContainerColumn,
  StyledHeader,
  StyledListItem,
  StyledWarning,
} from "./dashboardStyle";
import AddNewClassroom from "./AddNewClassroom";
import Button from "../../utils/Button";
import Logout from "../../utils/Logout";
import { deleteClassroom } from "../../../apis/classroomsApi";

const ClassroomsList = ({
  warning,
  classrooms,
  displayClassroom,
  handleSubmit,
}) => {
  const [showAddNew, setShowAddNew] = useState(true);

  const handleDeleteClassroom = async (e) => {
    const classId = e.target.attributes[1].nodeValue;
    const res = await deleteClassroom(classId);
  };
  const editClassroom = () => {};

  const renderList = () => {
    if (classrooms) {
      return classrooms.map((classroom) => {
        return (
          <StyledListItem key={classroom._id}>
            <span id={classroom._id} onClick={displayClassroom}>
              {classroom.subject}
            </span>
            <span>
              <i
                className="fas fa-trash-alt"
                name={classroom._id}
                onClick={handleDeleteClassroom}></i>
              <i
                className="fas fa-edit"
                name={classroom._id}
                onClick={editClassroom}></i>
            </span>
          </StyledListItem>
        );
      });
    }
  };

  return (
    <StyledContainerColumn>
      <Logout />

      <StyledHeader>Classrooms</StyledHeader>
      <Button
        label={showAddNew ? "Close" : "Add"}
        onClick={() => setShowAddNew(!showAddNew)}
      />
      {showAddNew ? <AddNewClassroom handleSubmit={handleSubmit} /> : null}
      {warning ? <StyledWarning>{warning}</StyledWarning> : null}

      <ul>{renderList()}</ul>
    </StyledContainerColumn>
  );
};
export default ClassroomsList;
