import React, { useState } from "react";
import { StyledForm } from "./dashboardStyle";
import Button from "../../utils/Button";
import Input from "../../utils/Input";

const AddNewClassroom = ({ handleSubmit }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleClassSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      subject: subject,
      description: description,
    });
  };

  return (
    <StyledForm onSubmit={handleClassSubmit}>
      <h3>Add a New Classroom</h3>
      <div>
        <Input
          required
          label="Subject:"
          name="subject"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          value={subject}
        />
        <Input
          label="Description:"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
      </div>
      <Button type="submit" label="Save" />
    </StyledForm>
  );
};
export default AddNewClassroom;
