import "/src/styles/TaskListStyles.css";

interface Props {
  tasks: {
    title: string;
    description: string;
    date: Date;
    folder: string;
  }[];
  setTasks: React.Dispatch<
    React.SetStateAction<
      { title: string; description: string; date: Date; folder: string }[]
    >
  >;
  activeFolder: string;
}

const TaskList = ({ tasks, setTasks, activeFolder }: Props) => {
  const removeTask = (indexOfTaskRemoved: number) => {
    setTasks((prev) => prev.filter((_, index) => index !== indexOfTaskRemoved));
    console.log(tasks);
  };

  return (
    <>
      <div className="task-list-container">
        <h2>Your tasks</h2>

        <div className="task-list">
          {tasks.map(
            (task, index) =>
              task.folder === activeFolder && (
                <li key={index}>
                  <div className="title-date-container">
                    <p>
                      <strong>{task.title}</strong>
                    </p>
                    <p>
                      <strong>Due:</strong> {task.date}
                    </p>
                  </div>
                  <p>
                    <strong>Description:</strong>
                    {task.description}
                  </p>
                  <p></p>
                  <div className="buttons-container">
                    <button>✔</button>
                    <button onClick={() => removeTask(index)}>🗑</button>
                    <button>✎</button>
                  </div>
                </li>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
