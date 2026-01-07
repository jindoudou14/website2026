import "../css/footer.css"
import { useTranslation } from "react-i18next";
const Footer = () => {
    const {t} = useTranslation();
    return(
        <footer>
            <div className = "links">
                <a href = "http://127.0.0.1:5500/website2026/index.html"></a>
                <a href = "https://www.marianopolis.edu/"><img src = "../logos/Marianopolis_logo.png"/></a>
                <a href = "https://robo-crc.ca/"><img src = "../logos/CRC_logo.png"/></a>
                <a href = "https://github.com/jindoudou14/website2026"><img src = "../logos/GitHub_logo.png"/></a>
            </div>
            <p>{t('credit')}</p>
            <p>{t('copyright')}<p/>
        </footer>
    );
};

export default Footer;