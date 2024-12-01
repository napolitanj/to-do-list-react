interface Props {
  title: string;
  description: string;
  dueDate: string;
}

const TaskEditor = ({ title, description, dueDate }: Props) => {
  return (
    <>
      <div className="editor-container">
        <p className="edit-title"></p>
        <input>{title}</input>
        <p className="edit-description"></p>
        <input>{description}</input>
        <p className="edit-due-date"></p>
        <input>{dueDate}</input>
        <div className="button-container">
          <button>Save</button>
          <button>Discard</button>
        </div>
      </div>
    </>
  );
};

export default TaskEditor;
