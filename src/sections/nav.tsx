import "../css/nav.css";
import ThemedButtons from "./themedButtons";

const Nav = () => {
  return (
    <>
      <nav id="navbar">
        <div className="navbar-container">
          <a className="navbar-brand" href="#home">
          </a>
          <div className="navbar-links">
            <ThemedButtons link="#Home" text="Home" />
            <ThemedButtons link="#Team" text="Team" />
            <ThemedButtons link="#MoDuel" text="MoDuel" />
            <ThemedButtons link="#Archives" text="Archives" />
            <ThemedButtons link="#Robot" text="Robot" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;