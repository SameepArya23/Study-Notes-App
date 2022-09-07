import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  padding: 40px 150px;
  @media (max-width: 600px) {
    padding: 30px 50px;
  }
`;

export const StyledButton = styled(Button)`
  align-self: flex-start;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;

  @media (max-width: 1000px) {
    width: 740px;
  }

  @media (max-width: 600px) {
    width: 245px;
  }
`;

export const TopicField = styled.input`
  outline: none;
  border: none;
  margin-bottom: 15px;
  background: transparent;
  font-size: 48px;

  @media (max-width: 600px) {
    font-size: 38px;
  }
`;

export const NotesField = styled.textarea`
  outline: none;
  border: none;
  margin-bottom: 20px;
  background: rgba(34, 34, 34, 0);
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  margin-left: 4px;
  height: 600px;

  @media (max-width: 600px) {
    width: 280px;
    font-size: 14px;
  }
`;
export const SavedNotesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OptionsContainer = styled.div``;
