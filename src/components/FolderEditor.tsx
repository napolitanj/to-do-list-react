import { useState } from "react";
import "/src/styles/EditorStyles.css";

interface Props {
  onClick: () => void;
  addFolder: (newFolder: { title: string; tasks: [] }) => void;
}

const FolderEditor = ({ onClick, addFolder }: Props) => {
  const [title, setTitle] = useState("");
  const tasks = [];
  const handleSave = () => {
    const newFolder = { title, tasks };
    addFolder(newFolder);
    onClick();
  };

  return (
    <>
      <div className="editor-overlay">
        <div className="editor-container">
          <p>Folder Editor</p>
          <div className="editor-inputs">
            <label>Folder Name</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
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

export default FolderEditor;
