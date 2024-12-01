import "../styles/TaskStyles.css";

interface Props {
  title: string;
  description: string;
  dueDate: string;
}

const Task = ({ title, description, dueDate }: Props) => {
  return (
    <>
      <div className="task-container">
        <div className="task-header">
          <h3 className="task-title">{title}</h3>
          <p className="due-date">{dueDate}</p>
        </div>
        <p className="task-description">{description}</p>
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
