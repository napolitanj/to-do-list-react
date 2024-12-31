import { useState } from "react";
import "/src/styles/EditorStyles.css";

interface Props {
  onClick: () => void;
  addFolder: (newFolder: string) => void;
}

const FolderEditor = ({ onClick, addFolder }: Props) => {
  const [title, setTitle] = useState("");
  const handleSave = (title: string) => {
    addFolder(title);
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
              maxLength={30}
            ></input>
          </div>
          <div className="button-container">
            <button onClick={() => handleSave(title)}>Save</button>
            <button onClick={onClick}>Discard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderEditor;
