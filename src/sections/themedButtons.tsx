import "../css/nav.css";

const ThemedButtons = ({ text, link }: { text: string; link: string }) => {
  return (
    <a href={link} className="navbar-link">
      {text}
    </a>
  );
};

export default ThemedButtons;
