import React, { useState } from "react";
import {
  StyledContainerColumn,
  StyledHeader,
  StyledWarning,
} from "./dashboardStyle";
import AddNewClassroom from "./AddNewClassroom";
import Button from "../../utils/Button";

const ClassroomsList = ({
  warning,
  classrooms,
  displayClassroom,
  handleSubmit,
}) => {
  const [showAddNew, setShowAddNew] = useState(true);

  const renderList = () => {
    if (classrooms.length) {
      return classrooms.map((classroom) => {
        return (
          <li key={classroom._id} id={classroom._id} onClick={displayClassroom}>
            {classroom.subject}
          </li>
        );
      });
    }
  };

  return (
    <StyledContainerColumn>
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
