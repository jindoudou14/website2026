import "../css/nav.css";
import ThemedButtons from "./themedButtons";

const Nav = () => {
  return (
    <nav id="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <a href="/" target="_self">
            <img
              src="logos/insideoutlogo.png"
              alt="MoDuel Marianopolis Logo"
              className="navbar-logo"
            />
          </a>
          <a href="/" target="_self">
            <h2 className="navbar-logo-text">Inside Out</h2>
          </a>
          <ThemedButtons
            text="Emotion Headquarters"
            link="/"
            image="src/balls/redball.png"
          />
          <ThemedButtons
            text="Team"
            link="/team"
            image="src/balls/orangeball.png"
          />
          <ThemedButtons
            text="MoDuel"
            link="/moduel"
            image="src/balls/greenball.png"
          />
          <ThemedButtons
            text="Growth of inside Out"
            link="/archives"
            image="src/balls/blueball.png"
          />
          <ThemedButtons
            text="Robot island"
            link="/robot"
            image="src/balls/purpleball.png"
          />
          <ThemedButtons
            text="Game"
            link="/game"
            image="src/balls/yellowball.png"
          />
          <ThemedButtons
            text="Memory Bank"
            link="/replay"
            image="src/balls/tealball.png"
          />
          <ThemedButtons
            text="Francais"
            link="/francais"
            image="src/balls/pinkball.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
