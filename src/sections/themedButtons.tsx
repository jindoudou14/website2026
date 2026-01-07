import { NavLink } from "react-router-dom";
import "../css/nav.css";

type Props = {
  text: string;
  link?: string;
  image: string;
  onClick?: (e: React.MouseEvent) => void;
};

const ThemedButtons = ({ text, link = "#", image, onClick }: Props) => {
  return (
    <NavLink
      to={link}
      onClick={
        (e) => {
          if (onClick) {
            e.preventDefault();
            onClick(e);
          }
        }

      }
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
