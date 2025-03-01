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
  const [tasks, setTasks] = useState<
    { title: string; description: string; date: Date; folder: string }[]
  >([]);
  const [folders, setFolders] = useState(["Active Tasks", "Completed Tasks"]);
  const [activeFolder, setActiveFolder] = useState("Active Tasks");

  const toggleTaskEditor = () => {
    setTaskEditorVisible((prev) => !prev);
  };

  const toggleFolderEditor = () => {
    setFolderEditorVisible((prev) => !prev);
  };

  const updateTasks = (newTask: {
    title: string;
    description: string;
    date: string;
    folder: string;
  }) => {
    setTasks((prev) => [...prev, { ...newTask, date: new Date(newTask.date) }]);
  };

  const addFolder = (newFolder: string) => {
    if (folders.some((folder) => folder === newFolder)) {
      alert("You cannot give two folders the same name.");
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
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        ></Folders>
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          activeFolder={activeFolder}
        ></TaskList>
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
