import "./styles/App.css";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import TaskEditor from "./components/TaskEditor";
import { useState } from "react";

function App() {
  const testTitle = "Task Title";
  const testDescription =
    "This is a task description. It should wrap appropriately in the container and look really nice.";
  const testDueDate = "Due Date";
  const [editorVisible, setEditorVisible] = useState(false);

  const toggleEditor = () => {
    setEditorVisible((prev) => !prev);
  };

  return (
    <>
      <Navbar onClick={toggleEditor}></Navbar>
      <Task
        title={testTitle}
        description={testDescription}
        dueDate={testDueDate}
      ></Task>
      {editorVisible && (
        <TaskEditor
          title=""
          description=""
          dueDate=""
          onClick={toggleEditor}
        ></TaskEditor>
      )}
    </>
  );
}

export default App;
