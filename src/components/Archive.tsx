import React, { useMemo, useState } from "react";
import "../css/archive.css";

import kioskOrb from "../assets/images/orbs/kioskOrb.png";
import robotOrb from "../assets/images/orbs/robotOrb.png";
import videoOrb from "../assets/images/orbs/videoOrb.png";
import programmingOrb from "../assets/images/orbs/programmingOrb.png";
import websiteOrb from "../assets/images/orbs/websiteOrb.png";

import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";

const MAX_VISIBILITY = 3;

type ArchiveItem = { title: string; text: string; date: string; image: string };
type Section = { label: string; start: number; end: number; orb: string };

type CSSVars = React.CSSProperties & {
  ["--active"]?: number;
  ["--offset"]?: number;
  ["--direction"]?: number;
  ["--abs-offset"]?: number;
};

function wrapIndex(i: number, n: number) {
  return ((i % n) + n) % n;
}

function circularOffset(active: number, i: number, n: number) {
  const raw = i - active;
  const half = Math.floor(n / 2);

  let d = raw % n;
  if (d > half) d -= n;
  if (d < -half) d += n;

  return d;
}

const Archive = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeTeam, setActiveTeam] = useState<number>(0);

  const archiveItems: ArchiveItem[] = [
    { title: "Day 1: Robot Brainstorming", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbR_3OmBgYhyO9uzZtA4NR6zeIom4vSUlTMQ&s" },
    { title: "Day 2: Robot Design", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbR_3OmBgYhyO9uzZtA4NR6zeIom4vSUlTMQ&s" },
    { title: "Day 3: Robot Implementation", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbR_3OmBgYhyO9uzZtA4NR6zeIom4vSUlTMQ&s" },

    { title: "Day 1: Programming Brainstorming", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg" },
    { title: "Day 2: Programming Design", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg" },
    { title: "Day 3: Programming Implementation", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg" },

    { title: "Day 1: Website Design", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://media.licdn.com/dms/image/v2/D5612AQGWyeFhLQomJA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1698353496292?e=2147483647&v=beta&t=y1YXKJX81hG9Zvp33cI8KZQAFDp0MaX6Ff7Gyov1QrY" },
    { title: "Day 1: Kiosk Design", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9S6xsJs3sUUHHyb5-_ckCB3ynURO-1taxpQ&s" },
    { title: "Day 1: Video Design", text: "Sample Text. Bla bla bla.", date: "Jan. 6 2026", image: "https://www.midiaresearch.com/storage/uploads/blog/featured/2244/cover_image-1721122691.jpg" },
  ];

  const sections: Section[] = [
    { label: "Robot", start: 0, end: 2, orb: robotOrb },
    { label: "Programming", start: 3, end: 5, orb: programmingOrb },
    { label: "Website", start: 6, end: 6, orb: websiteOrb },
    { label: "Kiosk", start: 7, end: 7, orb: kioskOrb },
    { label: "Video", start: 8, end: 8, orb: videoOrb },
  ];

  const teamCount = sections.length;

  const openTeam = (teamIndex: number) => {
    const idx = wrapIndex(teamIndex, teamCount);
    setActiveTeam(idx);
    setActiveItem(sections[idx].start);
  };

  const prevTeam = () => setActiveTeam((t) => wrapIndex(t - 1, teamCount));
  const nextTeam = () => setActiveTeam((t) => wrapIndex(t + 1, teamCount));

  return (
    <div className="archive-page">
      <div className="carousel">
        {/* LEFT ARROW */}
        <button className="nav left" onClick={prevTeam} aria-label="Previous team">
          <img src={arrowLeft} alt="Previous" draggable={false} />
        </button>

        {sections.map((s, i) => {
          const d = circularOffset(activeTeam, i, teamCount);
          const abs = Math.abs(d);

          const style: CSSVars = {
            "--active": d === 0 ? 1 : 0,
            "--offset": d,
            "--direction": Math.sign(d),
            "--abs-offset": abs,
            zIndex: 100 - abs,
            pointerEvents: abs > MAX_VISIBILITY ? "none" : "auto",
            opacity: abs > MAX_VISIBILITY ? 0 : 1,
            display: abs > MAX_VISIBILITY ? "none" : "block",
          };

          return (
            <div className="card-container" style={style} key={s.label}>
              <button className="card orb-card" onClick={() => openTeam(i)} type="button">
                <img className="orb-img" src={s.orb} alt={`${s.label} orb`} />
              </button>
            </div>
          );
        })}

        <button className="nav right" onClick={nextTeam} aria-label="Next team">
          <img src={arrowRight} alt="Next" draggable={false} />
        </button>
      </div>
    </div>
  );
};

export default Archive;
