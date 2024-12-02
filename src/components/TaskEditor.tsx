import "/src/styles/EditorStyles.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
  updateTasks: (newTask: {
    title: string;
    description: string;
    date: Date;
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
          <div className="title-description-date">
            <label>
              <strong>Title</strong>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>
              <strong>Due Date</strong>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <label className="edit-description">
              <strong>Description</strong>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
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
