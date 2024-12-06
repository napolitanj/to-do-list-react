import "./styles/App.css";
import Navbar from "./components/Navbar";
import TaskEditor from "./components/TaskEditor";
import Folders from "./components/Folders";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [editorVisible, setEditorVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [folders, setFolders] = useState([
    { id: 1, title: "Active Tasks" },
    { id: 2, title: "Completed Tasks" },
  ]);

  const toggleEditor = () => {
    setEditorVisible((prev) => !prev);
  };

  const updateTasks = (newTask: {
    title: string;
    description: string;
    date: date;
  }) => {
    setTasks((prev) => [...prev, newTask]);
    console.log(tasks);
  };

  return (
    <>
      <Navbar onClick={toggleEditor}></Navbar>
      <div className="app-interface">
        <Folders folders={folders} setFolders={setFolders}></Folders>
        <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
      </div>
      {editorVisible && (
        <TaskEditor
          onClick={toggleEditor}
          updateTasks={updateTasks}
          folders={folders}
        ></TaskEditor>
      )}
    </>
  );
}

export default App;
