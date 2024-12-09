import "./styles/App.css";
import Navbar from "./components/Navbar";
import TaskEditor from "./components/TaskEditor";
import Folders from "./components/Folders";
import TaskList from "./components/TaskList";
import FolderEditor from "./components/FolderEditor";
import { useState } from "react";

function App() {
  const [taskEditorVisible, setTaskEditorVisible] = useState(false);
  const [folderEditorVisible, setFolderEditorVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [folders, setFolders] = useState([
    { title: "Active Tasks", tasks: [] },
    { title: "Completed Tasks", tasks: [] },
  ]);

  const toggleTaskEditor = () => {
    setTaskEditorVisible((prev) => !prev);
  };

  const toggleFolderEditor = () => {
    setFolderEditorVisible((prev) => !prev);
    console.log("clicks");
  };

  const updateTasks = (newTask: {
    title: string;
    description: string;
    date: Date;
  }) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const addFolder = (newFolder: { title: string; tasks: [] }) => {
    if (folders.some((folder) => folder.title === newFolder.title)) {
      alert("You cannot name two folders the same.");
    } else {
      setFolders((prev) => [...prev, newFolder]);
    }
  };

  return (
    <>
      <Navbar onClick={toggleTaskEditor}></Navbar>
      <div className="app-interface">
        <Folders
          onClick={toggleFolderEditor}
          folders={folders}
          setFolders={setFolders}
        ></Folders>
        <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
      </div>
      {taskEditorVisible && (
        <TaskEditor
          onClick={toggleTaskEditor}
          updateTasks={updateTasks}
          folders={folders}
        ></TaskEditor>
      )}
      {folderEditorVisible && (
        <FolderEditor
          onClick={toggleFolderEditor}
          addFolder={addFolder}
        ></FolderEditor>
      )}
    </>
  );
}

export default App;
