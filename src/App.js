import SubjectsPage from "./components/subjects-page/subjects-page.component";
import { Routes, Route } from "react-router-dom";
import Notes from "./components/notes/notes.component";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SubjectsPage />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
};

export default App;
