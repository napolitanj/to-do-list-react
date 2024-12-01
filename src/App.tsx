import "./styles/App.css";
import Navbar from "./components/Navbar";
import Task from "./components/Task";

function App() {
  const testTitle = "Task Title";
  const testDescription =
    "This is a task description. It should wrap appropriately in the container and look really nice.";
  const testDueDate = "Due Date";

  return (
    <>
      <Navbar></Navbar>
      <Task
        title={testTitle}
        description={testDescription}
        dueDate={testDueDate}
      ></Task>
    </>
  );
}

export default App;
