import "/src/styles/TaskListStyles.css";

interface Props {
  tasks: [];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <>
      <div className="task-list-container">
        {tasks.map((task, index) => (
          <li key={index}>
            <p>
              <strong>Title:</strong> {task.title}
            </p>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Date:</strong> {task.date}
            </p>
          </li>
        ))}
      </div>
    </>
  );
};

export default TaskList;
