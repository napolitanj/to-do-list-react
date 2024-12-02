import "/src/styles/EditorStyles.css";

interface Props {
  title: string;
  description: string;
  dueDate: string;
  onClick: () => void;
}

const TaskEditor = ({ title, description, dueDate, onClick }: Props) => {
  return (
    <>
      <div className="editor-overlay">
        <div className="editor-container">
          <label className="edit-title">Title</label>
          <input></input>
          <label className="edit-description">Description</label>
          <input></input>
          <label className="edit-due-date">Due Date</label>
          <input></input>
          <div className="button-container">
            <button>Save</button>
            <button onClick={onClick}>Discard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskEditor;
