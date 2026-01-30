import "../css/moduel.css";
import React, { useState } from "react";

const slides = [
  {
    src: "game explanation/1.png",
    caption: "In the Module games of 2026, Two robots from two teams fight over 4 engines.",
  },
  {
    src: "game explanation/2.png",
    caption: "Each engine requires 3 different components: the fan, the core and the turbine.",
  },
  {
    src: "game explanation/3.png",
    caption: "Robots work together to replace components in the engines with those of their team’s color.",
  },
  {
    src: "game explanation/4.png",
    caption: "Red components are broken and belong to neither team.",
  },
  {
    src: "game explanation/5.png",
    caption: "Robots may bring red components to one of three repair stations of their color to exchange them for the equivalent component.",
  },
  {
    src: "game explanation/6.png",
    caption: "Extra working components may be stored in the team’s spare parts zone for extra points.",
  },
  {
    src: "game explanation/7.png",
    caption: "At the end of the five minute game, the score is tallied. Teams earn increasing points for each component of their color in each engine.",
  },
  {
    src: "game explanation/8.png",
    caption: "Teams also earn 30 points per broken component repaired, and 40 points per component in their spare parts zone.",
  },
  {
    src: "game explanation/9.png",
    caption: "Finally, the team with the most components in their spare parts zone get a 40% bonus to their score, the team with the tallest stack of parts in their repair zone gets 60%, stacking up to 100%.",
  },
  {
    src: "game explanation/10.png",
    caption: "Come watch the epic CRC robot showdown February 18-21!",
  },
];

const MoDuel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="page">
      <div className="glass-card">
        <h1 className="moduel-title">MoDuel 2026</h1>

        <h2 className="moduel-text">
          We're very excited to see that you're interested in Moduel! The CRC robotics competition is an event organized each year by the CRC to test the student's knowledge and skills in kiosk building, programming, website development, and of course - robotics! This year, Riley is taking part in the Moduel competition and the emotions are ready to give it their all!
        </h2>

        <div className="media">
          <img src="logos/moduel-logo.png" alt="MoDuel banner" />
        </div>

        <h2 className="moduel-text">
          CRC is a non-profit organization that began in 2001 as a way to bring students together through their love for robotics! This year, Riley is designing a robot that can work with and displace engine components. The emotions are ready to work hard so that Riley can focus on designing the robot.
        </h2>

        <div className="media">
          <img src="logos/crc-logo.png" alt="CRC logo" />
        </div>

        <h2 className="moduel-text">
          This year, from February 18th 2026, to February 21st 2026, the CRC Moduel competition will take place at Saint Pius X Career Center at 9955 Av. Papineau, Montreal.
        </h2>

        <div className="media">
          <img src="logos/st-pius.png" alt="st-pius logo" />
        </div>

        <h2 className="moduel-text">
          In every CRC robotics competition, the central focus of the competition is the robot showdown! Here are the rules to CRC's Moduel 2026 robot game:
        </h2>

        <div className="carousel">
          <button onClick={prev} className="carousel-btn">‹</button>

          <div className="carousel-content">
            <img
              src={slides[index].src}
              alt="carousel"
              className="carousel-image"
            />
            <p className="carousel-caption">{slides[index].caption}</p>
          </div>

          <button onClick={next} className="carousel-btn">›</button>
        </div>

        <h2 className="moduel-text">
          Now that you know how the robot game works, are you ready to take on the challenge? We’ve prepared a{" "}
          <a href="/game">3D simulation</a> to help you train for the competition.
        </h2>

      </div>
    </div>
  );
};

export default MoDuel;
