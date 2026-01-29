import "../css/moduel.css";
// import React, { useState } from "react";


const MoDuel: React.FC = () => {
  return (
    <div className="page">
      

      <div className="glass-card">
        <h1 className="moduel-title">MoDuel 2026</h1>
        <h2 className="moduel-text">
          We're very excited to see that you're interested in Moduel! The CRC robotics competition is an event organized each year by the CRC to test the student's knowledge and skills in kiosk building, programming, website development, and of course - robotics! This year, Riley is taking part in the Moduel competition and the emotions are ready to give it their all! 
        </h2>       
        <div className="media">
          <img
            src="logos/moduel-logo.png"
            alt="MoDuel banner"
          />
        </div>
        <h2 className="moduel-text">
          CRC is a non-profit organization that began in 2001 as a way to bring students together through their love for robotics! This year, Riley is designing a robot that can work with and displace engine components. The emotions are ready to work hard so that Riley can focus on designing the robot.
        </h2>
        <div className="media">
          <img
            src="logos/crc-logo.png"
            alt="CRC logo"
          />
        </div>
        <h2 className="moduel-text">
          This year, from February 18th 2026, to February 21st 2026, the CRC Moduel competition will take place at Saint Pius X Career Center at 9955 Av. Papineau, Montreal. 
        </h2>
        <div className="media">
          <img
            src="logos/st-pius.png"
            alt="st-pius logo"
          />
        </div>
        <h2 className="moduel-text">
          Are you ready to take on the challenge? We’ve prepared a <a href="/game">3D simulation</a>  to help you train for the competition.
        </h2>
      </div>
    </div>
  );
};

export default MoDuel;