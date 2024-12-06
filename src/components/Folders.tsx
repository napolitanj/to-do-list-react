import "/src/styles/FolderParentStyles.css";

interface Props {
  folders: [];
}

const Folders = ({ folders }: Props) => {
  return (
    <>
      <div className="folder-container">
        <div className="folder-header">
          <h2>Folders</h2>
          <button>Create a Folder</button>
        </div>
        <div className="folder-list">
          {folders.map((folder, index) => (
            <li key={folder.id}>
              <div className="folder-element">
                <strong>{folder.title}</strong>
                {folder.id !== 1 && folder.id !== 2 ? <button>X</button> : null}
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Folders;
