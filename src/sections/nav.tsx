import "../css/nav.css";
import ThemedButtons from "./themedButtons";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Nav = () => {
  const { i18n, t } = useTranslation();
  const isFr = i18n.language?.toLowerCase().startsWith("fr");
  const after = isFr ? "en" : "fr";

  const [open, setOpen] = useState(false);

  return (
    <nav id="navbar">
      <div className="navbar-container">

        <a href="/" target="_self">
          <img
            src="logos/insideoutlogo.png"
            alt="MoDuel Marianopolis Logo"
            className="navbar-logo"
          />
        </a>

        <a href="/" target="_self">
          <h2 className="navbar-logo-text">{t("title")}</h2>
        </a>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className={`navbar-links ${open ? "open" : ""}`}>

          <ThemedButtons
            text={t("ball1")}
            link="/"
            image="src/balls/redball.png"
            onClick={() => setOpen(!open)}
          />

          <ThemedButtons
            text={t("ball2")}
            link="/team"
            image="src/balls/orangeball.png"
            onClick={() => setOpen(!open)}
          />

          <ThemedButtons
            text={t("ball3")}
            link="/moduel"
            image="src/balls/greenball.png"
            onClick={() => setOpen(!open)}
          />

          <ThemedButtons
            text={t("ball4")}
            link="/archives"
            image="src/balls/blueball.png"
            onClick={() => setOpen(!open)}
          />

          <ThemedButtons
            text={t("ball5")}
            link="/Island"
            image="src/balls/purpleball.png"
            onClick={() => setOpen(!open)}
          />

          <ThemedButtons
            text={t("ball6")}
            link="/panel"
            image="src/balls/yellowball.png"
            onClick={() => setOpen(!open)}
          />

          <ThemedButtons
            text={t("ball7")}
            link="/robot"
            image="src/balls/tealball.png"
            onClick={() => setOpen(!open)}
          />

          <ThemedButtons
            text={isFr ? "English" : "Français"}
            onClick={() => i18n.changeLanguage(after)}
            image="src/balls/pinkball.png"
            noBounce="no-bounce"
          />

        </div>
      </div>
    </nav>
  );
};

export default Nav;
