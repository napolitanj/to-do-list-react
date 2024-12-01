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
        <input></input>
        <p className="edit-description"></p>
        <input></input>
        <p className="edit-due-date"></p>
        <input></input>
        <div className="button-container">
          <button>Save</button>
          <button>Discard</button>
        </div>
      </div>
    </>
  );
};

export default TaskEditor;
