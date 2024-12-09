import "/src/styles/EditorStyles.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
  folders: folder[];
  updateTasks: (newTask: {
    title: string;
    description: string;
    date: Date;
  }) => void;
}

const TaskEditor = ({ onClick, updateTasks, folders }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [folder, setFolder] = useState("");

  const handleSave = () => {
    const newTask = { title, description, date };
    updateTasks(newTask);
    onClick();
  };

  const listFolders = (folders: string[]) => {
    return folders
      .filter((folder) => folder !== "Completed Tasks")
      .map((folder) => <option key={folder}>{folder}</option>);
  };

  return (
    <>
      <div className="editor-overlay">
        <div className="editor-container">
          <h2>Task editor</h2>
          <div className="editor-inputs">
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
            <label>
              <strong>Select a folder</strong>
            </label>
            <select value={folder}>{listFolders(folders)}</select>
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
