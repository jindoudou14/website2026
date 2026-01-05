import { Link } from "react-router-dom";
import "../css/nav.css";

type Props = {
  text: string;
  link: string;
};

const ThemedButtons = ({ text, link }: Props) => {
  return (
    <Link to={link} className="navbar-link">
      {text}
    </Link>
  );
};

export default ThemedButtons;
