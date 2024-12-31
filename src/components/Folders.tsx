import "/src/styles/FolderParentStyles.css";

interface Props {
  folders: string[];
  onClick: () => void;
  setFolders: React.Dispatch<React.SetStateAction<string[]>>;
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
}

const Folders = ({
  folders,
  onClick,
  setFolders,
  activeFolder,
  setActiveFolder,
}: Props) => {
  const removeFolder = (indexOfFolderRemoved: number) => {
    setFolders((prev) =>
      prev.filter((_, index) => index !== indexOfFolderRemoved)
    );
  };
  return (
    <>
      <div className="folder-container">
        <div className="folder-header">
          <h2>Folders</h2>
          <button onClick={onClick}>Create a Folder</button>
        </div>
        <ul className="folder-list">
          {folders.map((folder, index) => (
            <li key={folder}>
              <button
                className={`folder-element ${
                  folder === activeFolder ? "active" : ""
                }`}
                onClick={() => setActiveFolder(folder)}
              >
                <strong>{folder}</strong>
                {folder !== "Active Tasks" && folder !== "Completed Tasks" ? (
                  <button onClick={() => removeFolder(index)}>X</button>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Folders;
