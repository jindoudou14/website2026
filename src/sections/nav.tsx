import "../css/nav.css";
import ThemedButtons from "./themedButtons";
import { useTranslation } from "react-i18next";
const Nav = () => {
  const {i18n, t} = useTranslation();
  const isFr = i18n.language?.toLowerCase().startsWith("fr");
  const after = isFr ? "en" : "fr";
  return (
    <nav id="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <ThemedButtons
            text="Home"
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
            text="Archives"
            link="/archives"
            image="src/balls/blueball.png"
          />
          <ThemedButtons
            text="Robot"
            link="/robot"
            image="src/balls/purpleball.png"
          />
          <ThemedButtons
            text="Game"
            link="/game"
            image="src/balls/tealball.png"
          />
          <ThemedButtons
            text="Replay Memories"
            link="/replay"
            image="src/balls/yellowball.png"
          />
          <ThemedButtons 
            text={isFr ? "English" : "Français"}
            onClick={() => i18n.changeLanguage(after)}
            image="src/balls/pinkball.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
