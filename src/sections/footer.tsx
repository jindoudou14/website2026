import "../css/footer.css"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    return(
        <footer>
            <div className = "links">
                <a href = "http://localhost:5173/"><img src = "../logos/insideoutlogo.png"/></a>
                <a href = "https://www.marianopolis.edu/" target="_blank" rel="noopener norefferer"><img src = "../logos/Marianopolis_logo.png"/></a>
                <a href = "https://robo-crc.ca/" target="_blank" rel="noopener norefferer"><img src = "../logos/CRC_logo.png"/></a>
                <a href = "https://github.com/jindoudou14/website2026" target="_blank" rel="noopener norefferer"><img src = "../logos/GitHub_logo.png"/></a>
                <a href = "https://www.instagram.com/marianopolis_robotics/" target="_blank" rel="noopener norefferer"><img src="../logos/Instagram_logo.png"/></a>
            </div>
            <a id="cred" href= "/Credits" onClick = {(e)=>{e.preventDefault();navigate("/Credits");}}>{t('credit')}</a>
            <p>{t('copyright')}</p>
        </footer>
    );
};

export default Footer;