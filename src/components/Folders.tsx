import "/src/styles/FolderParentStyles.css";

interface Props {
  folders: [];
  onClick: () => void;
  setFolders: React.Dispatch<
    React.SetStateAction<{ id: number; title: string; tasks: [] }>
  >;
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
            <li key={folder.title}>
              <div className="folder-element">
                <strong>{folder.title}</strong>
                {folder.title !== "Active Tasks" &&
                folder.title !== "Completed Tasks" ? (
                  <button onClick={() => removeFolder(index)}>X</button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Folders;
