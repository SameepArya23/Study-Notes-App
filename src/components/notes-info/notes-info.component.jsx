import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/user-data.context";
import {
  Discription,
  InputContainer,
  NotesField,
  OptionsContainer,
  SavedNotesContainer,
  StyledBox,
  StyledButton,
  StyledForm,
  TopicField,
} from "./notes-info.styles";

const NotesInfo = () => {
  const {
    isSaved,
    onSubmitHandler,
    editToggleHandler,
    noteIndex,
    notesData,
    subjectData,
  } = useContext(UserDataContext);

  const [notes, setNotes] = useState({});

  useEffect(() => {
    if (notesData) {
      const displayNotes = notesData.find((data) => {
        return data.subject === subjectData[noteIndex].subject;
      });
      setNotes(displayNotes);
    }
  }, [notesData, notes]);
  console.log(notes);

  return (
    <StyledBox sx={{ maxWidth: "900px" }}>
      {isSaved ? (
        <SavedNotesContainer>
          <InputContainer>
            <Typography variant="h3" gutterBottom>
              {notes ? notes.topic : ""}
            </Typography>
            <Discription>{notes ? notes.discription : ""}</Discription>
          </InputContainer>
          <StyledButton
            variant="contained"
            color="error"
            sx={{ width: "80px" }}
            onClick={editToggleHandler}
          >
            edit
          </StyledButton>
        </SavedNotesContainer>
      ) : (
        <StyledForm action="submit" onSubmit={onSubmitHandler}>
          <InputContainer>
            <TopicField
              type="text"
              placeholder="Topic"
              defaultValue={notes ? notes.topic : ""}
            />
            <NotesField
              type="text"
              placeholder="Discription"
              defaultValue={notes ? notes.discription : ""}
            />
          </InputContainer>

          <OptionsContainer>
            <StyledButton
              type="submit"
              variant="contained"
              color="success"
              sx={{ width: "80px" }}
            >
              save
            </StyledButton>
          </OptionsContainer>
        </StyledForm>
      )}
    </StyledBox>
  );
};
export default NotesInfo;
