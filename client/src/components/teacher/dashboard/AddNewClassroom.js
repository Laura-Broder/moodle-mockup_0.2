import React, { useState } from "react";
import { StyledForm } from "./dashboardStyle";
import Button from "../../utils/Button";
import Input from "../../utils/Input";
import TextArea from "../../utils/TextArea";

const AddNewClassroom = ({ handleSubmit }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClassSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      selectedFile,
      subject,
      description,
    });
  };

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return (
    <StyledForm onSubmit={handleClassSubmit}>
      <h3>Add a New Classroom</h3>
      <div>
        <Input
          autoFocus
          required
          label="Subject:"
          name="subject"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          value={subject}
        />
        <TextArea
          name="description"
          label="Description:"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        {/* <Input name="file" type="file" onChange={onFileChange} /> */}
      </div>
      <Button type="submit" label="Save" />
    </StyledForm>
  );
};
export default AddNewClassroom;
