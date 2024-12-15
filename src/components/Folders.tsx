import "/src/styles/FolderParentStyles.css";

interface Props {
  folders: string[];
  onClick: () => void;
}

const Folders = ({ folders, onClick, setFolders }: Props) => {
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
          <button onClick={onClick} folders={folders}>
            Create a Folder
          </button>
        </div>
        <ul className="folder-list">
          {folders.map((folder, index) => (
            <li key={folder}>
              <button className="folder-element">
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
