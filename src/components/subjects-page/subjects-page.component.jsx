import SubjectCard from "../card/card.component";
import SubjectForm from "../subject-form/subject-form.component";
import {
  ButtonContainer,
  Heading,
  SubHeading,
  SubjectCardsWrapper,
  SubjectPageWrapper,
} from "./subjects-page.styles";
import { Button } from "@mui/material";
import { useContext } from "react";
import { UserDataContext } from "../../context/user-data.context";

const SubjectsPage = () => {
  const { subFormOpen, formToggleHandler, getSubFormData, subjectData } =
    useContext(UserDataContext);
  return (
    <SubjectPageWrapper>
      <Heading>
        My <SubHeading>Notes</SubHeading>
      </Heading>
      <ButtonContainer>
        <Button onClick={formToggleHandler} variant="contained" color="primary">
          add subject
        </Button>
      </ButtonContainer>

      <SubjectCardsWrapper>
        {subjectData.map((subs, index) => {
          return <SubjectCard key={index} subData={subs} index={index} />;
        })}
      </SubjectCardsWrapper>

      {subFormOpen ? (
        <SubjectForm toggler={formToggleHandler} submitData={getSubFormData} />
      ) : (
        ""
      )}
    </SubjectPageWrapper>
  );
};

export default SubjectsPage;
