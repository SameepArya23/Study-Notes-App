import { createContext, useEffect, useState } from "react";
import {
  addCollections,
  deleteNotesDocument,
  deleteSubjectDocument,
  getDataBaseDocument,
} from "../utils/firebase/firebase.utils";

export const UserDataContext = createContext({
  subFormOpen: false,
  formToggleHandler: () => {},
  getSubFormData: () => {},
  isSaved: false,
  setIsSaved: () => {},
  onSubmitHandler: () => {},
  editToggleHandler: () => {},
  notes: {},
  setNotes: () => {},
  subjectArr: [],
  getIndex: () => {},
  noteIndex: null,
  notesData: [],
  subjectData: [],
  deleteNoteHandler: () => {},
});

export const UserDataProvider = ({ children }) => {
  const [subjectArr, setSubjectArr] = useState([]);
  const [subFormOpen, setSubFormOpen] = useState(false);
  const [notes, setNotes] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const [noteIndex, setNoteIndex] = useState(null);
  const [subjectData, setSubjectData] = useState([]);
  const [notesData, setNotesData] = useState([]);

  const formToggleHandler = () => setSubFormOpen(!subFormOpen);
  const getSubFormData = async (event) => {
    event.preventDefault();

    const UPDATED_DATA = {
      subject: event.target[0].value,
      subSubject: event.target[2].value,
    };

    await addCollections("subjects", UPDATED_DATA, UPDATED_DATA.subject);

    setSubjectArr([...subjectArr, UPDATED_DATA]);
    setSubFormOpen(false);
    event.target[0].value = "";
    event.target[2].value = "";
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const NOTES = {
      subject: subjectData[noteIndex].subject,
      topic: event.target[0].value,
      discription: event.target[1].value,
    };
    setNotes(NOTES);
    await addCollections("notes", NOTES, NOTES.subject);
    setIsSaved(true);
  };

  const editToggleHandler = () => setIsSaved(false);

  const getIndex = (index) => {
    setNoteIndex(index);
  };

  useEffect(() => {
    const mapping = async () => {
      const getSubjectsMap = await getDataBaseDocument("subjects");
      const getNotesMap = await getDataBaseDocument("notes");
      setSubjectData(getSubjectsMap);
      setNotesData(getNotesMap);
    };
    mapping();
  }, [subjectArr, notes]);

  const deleteNoteHandler = async (subjectToDelete, noteToDelete) => {
    await deleteSubjectDocument(subjectToDelete);
    const getSubjectsMap = await getDataBaseDocument("subjects");
    setSubjectData(getSubjectsMap);
    if (noteToDelete !== undefined) {
      await deleteNotesDocument(noteToDelete);
      const getNotesMap = await getDataBaseDocument("notes");
      setNotesData(getNotesMap);
    }
  };

  const value = {
    isSaved,
    setIsSaved,
    onSubmitHandler,
    editToggleHandler,
    subFormOpen,
    formToggleHandler,
    getSubFormData,
    notes,
    setNotes,
    subjectArr,
    getIndex,
    noteIndex,
    notesData,
    subjectData,
    deleteNoteHandler,
  };
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
