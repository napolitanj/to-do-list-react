import "../styles/TaskStyles.css";
interface Props {
  title: string;
  description: string;
  dueDate: string;
  folder: string;
  removeTask: () => void;
  onComplete: () => void;
}

const Task = ({
  title,
  description,
  dueDate,
  folder,
  onComplete,
  removeTask,
}: Props) => {
  return (
    <>
      <div className="task-container">
        <div className="task-header">
          <h3 className="task-title">{title}</h3>
          <p className="due-date">
            <strong>Due: </strong>
            {dueDate}
          </p>
        </div>
        <p className="task-description">
          <strong>Description: </strong>
          {description}
        </p>
        <div className="buttons-container">
          {folder !== "Completed Tasks" ? (
            <button className="complete" onClick={onComplete}>
              ✔
            </button>
          ) : null}
          <button className="discard" onClick={removeTask}>
            🗑
          </button>
          <button className="edit">✎</button>
        </div>
      </div>
    </>
  );
};

export default Task;
