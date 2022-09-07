import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../../context/user-data.context";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const CardBtnContainer = styled(CardActions)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SubjectCard = ({ subData, index }) => {
  const { getIndex, subjectData, deleteNoteHandler, notesData } =
    useContext(UserDataContext);
  const { subject, subSubject } = subData;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/notes");
    getIndex(index);
  };

  const handleDelete = () => {
    const noteToDelete =
      notesData.length === 0 ? undefined : notesData[index].subject;
    deleteNoteHandler(subjectData[index].subject, noteToDelete);
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {subject}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {subSubject}
        </Typography>
      </CardContent>
      <CardBtnContainer>
        <Button size="small" onClick={navigateHandler}>
          Open Notes
        </Button>
        <Button size="small" color="error" onClick={handleDelete}>
          Delete
          <DeleteIcon color="error" />
        </Button>
      </CardBtnContainer>
    </Card>
  );
};

export default SubjectCard;
