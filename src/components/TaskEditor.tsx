import "/src/styles/EditorStyles.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
  folders: string[];
  updateTasks: (newTask: {
    title: string;
    date: string;
    description: string;
    folder: string;
  }) => void;
}

const TaskEditor = ({ onClick, updateTasks, folders }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [folder, setFolder] = useState(folders[0] || "");

  const handleSave = (
    title: string,
    date: string,
    description: string,
    folder: string
  ) => {
    updateTasks({ title, date, description, folder });
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
              <strong>Due string</strong>
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
            <select value={folder} onChange={(e) => setFolder(e.target.value)}>
              {listFolders(folders)}
            </select>
          </div>
          <div className="button-container">
            <button
              onClick={() => handleSave(title, date, description, folder)}
            >
              Save
            </button>
            <button onClick={onClick}>Discard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskEditor;
