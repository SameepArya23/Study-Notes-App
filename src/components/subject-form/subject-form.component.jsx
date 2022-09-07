import { Button, TextField } from "@mui/material";
import {
  ButtonContainer,
  FormContainer,
  FormStyled,
} from "./subject-form.styles";

const SubjectForm = ({ toggler, submitData }) => {
  return (
    <FormContainer>
      <FormStyled action="submit" onSubmit={submitData}>
        <TextField label="Subject" variant="outlined" required />
        <TextField label="Topic" variant="outlined" required />
        <ButtonContainer>
          <Button type="submit" color="primary" variant="contained">
            save
          </Button>

          <Button onClick={toggler} color="primary" variant="contained">
            cancel
          </Button>
        </ButtonContainer>
      </FormStyled>
    </FormContainer>
  );
};

export default SubjectForm;
