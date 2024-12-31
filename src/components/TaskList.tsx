import "/src/styles/TaskListStyles.css";
import Task from "./Task";

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
  };

  const moveToCompletedTasks = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, folder: "Completed Tasks" } : task
      )
    );
    console.log(tasks);
  };

  return (
    <div className="task-list-container">
      <h2>Your tasks</h2>
      <div className="task-list">
        {tasks.map((task, index) => {
          const isTaskVisible =
            (activeFolder === "Active Tasks" &&
              task.folder !== "Completed Tasks") ||
            task.folder === activeFolder;

          return (
            isTaskVisible && (
              <li key={index}>
                <Task
                  title={task.title}
                  description={task.description}
                  dueDate={task.date.toString()}
                  folder={task.folder}
                  removeTask={() => removeTask(index)}
                  onComplete={() => moveToCompletedTasks(index)}
                />
              </li>
            )
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
