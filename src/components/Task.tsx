import "../styles/TaskStyles.css";

const Task = () => {
  return (
    <>
      <div className="task-container">
        <div className="task-header">
          <h3 className="task-title">Task Title</h3>
          <p className="due-date">This is the due date</p>
        </div>
        <p className="task-description">
          This is a task description. It should wrap appropriately in the
          container and look really nice.
        </p>
        <div className="button-container">
          <button className="complete">Check</button>
          <button className="discard">Trash</button>
          <button className="edit">Edit</button>
        </div>
      </div>
    </>
  );
};

export default Task;
