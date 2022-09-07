import { initializeApp } from "firebase/app";
import {
  collection,
  writeBatch,
  doc,
  getFirestore,
  query,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1zZHPFw-ZfzAKDJ0dl8oUwu4SLrkpdAU",
  authDomain: "study-notes-db.firebaseapp.com",
  projectId: "study-notes-db",
  storageBucket: "study-notes-db.appspot.com",
  messagingSenderId: "674850113431",
  appId: "1:674850113431:web:ad288c4116a16e13ca26d2",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollections = async (
  collectionKey,
  objectsToAdd,
  collectionName
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  const docRef = doc(collectionRef, collectionName);
  // if(docRef)
  batch.set(docRef, objectsToAdd);
  await batch.commit();
};

export const getDataBaseDocument = async (obj) => {
  const collectionRef = collection(db, obj);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const subjectMap = querySnapshot.docs.map((doc) => {
    const map = doc.data();
    return map;
  });

  return subjectMap;
};

export const deleteSubjectDocument = async (subject) => {
  const docSubToDelete = doc(db, "subjects", subject);
  await deleteDoc(docSubToDelete);
};

export const deleteNotesDocument = async (note) => {
  const docNoteToDelete = doc(db, "notes", note);
  await deleteDoc(docNoteToDelete);
};
