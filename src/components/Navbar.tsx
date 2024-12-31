import "../styles/NavBarStyles.css";
import emblem from "/src/assets/react-emblem.png";

interface Props {
  onClick: () => void;
}

const Navbar = ({ onClick }: Props) => {
  return (
    <>
      <nav className="header-nav">
        <img className="header-icon" src={emblem}></img>
        <h1 className="header-title">Task Organizer</h1>
        <button onClick={onClick} className="addTask">
          Add a Task
        </button>
      </nav>
    </>
  );
};

export default Navbar;
