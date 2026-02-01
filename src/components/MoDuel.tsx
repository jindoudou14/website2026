import "../css/moduel.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const slides = [
  {
    src: "game explanation/1.png",
    caption: "cap1",
  },
  {
    src: "game explanation/2.png",
    caption: "cap2",
  },
  {
    src: "game explanation/3.png",
    caption: "cap3",
  },
  {
    src: "game explanation/4.png",
    caption: "cap4",
  },
  {
    src: "game explanation/5.png",
    caption: "cap5",
  },
  {
    src: "game explanation/6.png",
    caption: "cap6",
  },
  {
    src: "game explanation/7.png",
    caption: "cap7",
  },
  {
    src: "game explanation/8.png",
    caption: "cap8",
  },
  {
    src: "game explanation/9.png",
    caption: "cap9",
  },
  {
    src: "game explanation/10.png",
    caption: "cap10",
  },
];

const MoDuel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const {t} = useTranslation()
  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="page">
      <div className="glass-card">
        <h1 className="moduel-title">MoDuel 2026</h1>

        <h2 className="moduel-text">
          {t("excited")}
        </h2>

        <div className="media">
          <img src="logos/moduel-logo.png" alt="MoDuel banner" />
        </div>

        <h2 className="moduel-text">
          {t("non_profit")}
        </h2>

        <div className="media">
          <img src="logos/crc-logo.png" alt="CRC logo" />
        </div>

        <h2 className="moduel-text">
          {t("february")}
        </h2>

        <div className="media">
          <img src="logos/st-pius.png" alt="st-pius logo" />
        </div>

        <h2 className="moduel-text">
          {t("every")}
        </h2>

        <div className="carousel">
          <button onClick={prev} className="carousel-btn">‹</button>

          <div className="carousel-content">
            <img
              src={slides[index].src}
              alt="carousel"
              className="carousel-image"
            />
            <p className="carousel-caption">{t(slides[index].caption)}</p>
          </div>

          <button onClick={next} className="carousel-btn">›</button>
        </div>

        <h2 className="moduel-text">
          {t("now")}{" "}
          <a href="/game">{t("sim")}</a> {t("help")}

        </h2>

      </div>
    </div>
  );
};

export default MoDuel;
