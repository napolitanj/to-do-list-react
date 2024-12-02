import "/src/styles/TaskListStyles.css";

interface Props {
  tasks: [];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <>
      <div className="task-list-container">
        <h2>Your tasks</h2>
        <div className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="title-date-container">
                <p>
                  <strong>{task.title}</strong>
                </p>
                <p>
                  <strong>Due:</strong> {task.date}
                </p>
              </div>
              <p>{task.description}</p>
              <div className="buttons-container">
                <button>✔</button>
                <button>🗑</button>
                <button>✎</button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
