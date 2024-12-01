import "./NavBarStyles.css";

const Navbar = () => {
  return (
    <>
      <nav className="header-nav">
        <img className="header-icon" src="src\assets\react-emblem.png"></img>
        <h1 className="header-title">Task Organizer</h1>
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
