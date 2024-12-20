import "../styles/NavBarStyles.css";

interface Props {
  onClick: () => void;
}

const Navbar = ({ onClick }: Props) => {
  return (
    <>
      <nav className="header-nav">
        <img className="header-icon" src="src\assets\react-emblem.png"></img>
        <h1 className="header-title">Task Organizer</h1>
        <button onClick={onClick} className="addTask">
          Add a Task
        </button>
        <form className="" role="search">
          <input
            className=""
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
