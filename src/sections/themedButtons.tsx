import { NavLink } from "react-router-dom";
import "../css/nav.css";

type Props = {
  text: string;
  link: string;
  image: string;
};

const ThemedButtons = ({ text, link, image }: Props) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `navbar-image-button ${isActive ? "active" : ""}`
      }
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="navbar-button-text">{text}</span>
    </NavLink>
  );
};

export default ThemedButtons;
