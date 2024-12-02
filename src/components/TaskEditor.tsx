import "/src/styles/EditorStyles.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
  updateTasks: (newTask: {
    title: string;
    description: string;
    date: string;
  }) => void;
}

const TaskEditor = ({ onClick, updateTasks }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSave = () => {
    const newTask = { title, description, date };
    updateTasks(newTask);
    onClick();
  };

  return (
    <>
      <div className="editor-overlay">
        <div className="editor-container">
          <label className="edit-title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label className="edit-description">Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <label className="edit-due-date">Due Date</label>
          <input value={date} onChange={(e) => setDate(e.target.value)}></input>
          <div className="button-container">
            <button onClick={handleSave}>Save</button>
            <button onClick={onClick}>Discard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskEditor;
