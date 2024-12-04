import "/src/styles/TaskListStyles.css";

interface Props {
  tasks: [];
  setTasks: React.Dispatch<
    React.SetStateAction<{ title: string; description: string; date: string }[]>
  >;
}

//review the above for setTasks, why is that syntax needed. also, passing argument in button functions

const TaskList = ({ tasks, setTasks }: Props) => {
  const removeTask = (indexOfTaskRemoved: number) => {
    setTasks((prev) => prev.filter((_, index) => index !== indexOfTaskRemoved));
    console.log(tasks);
  };

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
                <button onClick={() => removeTask(index)}>🗑</button>
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
