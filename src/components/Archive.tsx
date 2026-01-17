import React, { useMemo, useState } from "react";
import "../css/archive.css";
import { useTranslation } from "react-i18next";
//english
import kioskOrb from "../assets/images/orbs/kioskOrb.png";
import robotOrb from "../assets/images/orbs/robotOrb.png";
import videoOrb from "../assets/images/orbs/videoOrb.png";
import programmingOrb from "../assets/images/orbs/programmingOrb.png";
import websiteOrb from "../assets/images/orbs/websiteOrb.png";
import memory1Orb from "../assets/images/orbs/memory1Orb.png";
//french
import orbeKiosque from "../assets/images/orbs/french/orbeKiosque.png";
import orbeRobot from "../assets/images/orbs/french/orbeRobot.png";
import orbeVideo from "../assets/images/orbs/french/orbeVideo.png";
import orbeProgrammation from "../assets/images/orbs/french/orbeProgrammation.png";
import orbeSiteweb from "../assets/images/orbs/french/orbeSiteweb.png";
import orbeSouvenirNo1 from "../assets/images/orbs/french/orbeSouvenirNo1.png";
//
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
;

const MAX_VISIBILITY = 3;

type ArchiveItem = { title: string; text: string; date: string; image: string };
type Section = { label: string; start: number; end: number; orb: string };
type Memory = { title: string; date?: string; text?: string; orb: string; videoSrc: string };

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
  const { i18n } = useTranslation();
  const isFr = (i18n.resolvedLanguage || i18n.language || "").toLowerCase().startsWith("fr");

  const [activeTeam, setActiveTeam] = useState(0);
  const [activeArchiveItem, setActiveArchiveItem] = useState<ArchiveItem | null>(null);
  const [activeRange, setActiveRange] = useState<{ start: number; end: number } | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [activeMemory, setActiveMemory] = useState(0);
  const [activeMemoryModal, setActiveMemoryModal] = useState<Memory | null>(null);

  const archiveItems: ArchiveItem[] = [
    { title: "Day 1: Robot Brainstorming", text: "The robot team is brainstorming ideas for the robot design.", date: "Oct. 30 2025", image: "src/assets/logs/robot/robot_1.jpg" },
    { title: "Day 2: Robot Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_2.jpg" },
    { title: "Day 3: Robot Implementation", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_3.jpg" },
    { title: "Day 4: Robot Brainstorming", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_4.jpg" },
    { title: "Day 5: Robot Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_5.jpg" },
    { title: "Day 6: Robot Implementation", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_6.jpg" },
    { title: "Day 7: Robot Brainstorming", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_7.jpg" },
    { title: "Day 8: Robot Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_8.jpg" },
    { title: "Day 9: Robot Implementation", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/robot/robot_9.jpg" },
    { title: "Day 1: Programming Brainstorming", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/programming/programming_1.jpg" },
    { title: "Day 2: Programming Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/programming/programming_2.jpg" },
    { title: "Day 3: Programming Implementation", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/programming/programming_3.jpg" },
    { title: "Day 1: Website Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/website/website_1.jpg" },
    { title: "Day 1: Kiosk Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/kiosk/kiosk_1.jpg" },
    { title: "Day 2: Kiosk Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/kiosk/kiosk_2.png" },
    { title: "Day 3: Kiosk Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/kiosk/kiosk_3.png" },
    { title: "Day 4: Kiosk Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/kiosk/kiosk_4.jpg" },
    { title: "Day 5: Kiosk Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/kiosk/kiosk_5.jpg" },
    { title: "Day 6: Kiosk Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/kiosk/kiosk_6.jpg" },
    { title: "Day 7: Kiosk Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/kiosk/kiosk_7.jpg" },
    { title: "Day 1: Video Design", text: "Sample Text.", date: "Jan. 6 2026", image: "src/assets/logs/video/video_1.jpg" },
  ];

  const sections: Section[] = useMemo(
    () => [
      { label: "Robot", start: 0, end: 8, orb: isFr ? orbeRobot : robotOrb },
      { label: "Programming", start: 9, end: 11, orb: isFr ? orbeProgrammation : programmingOrb },
      { label: "Website", start: 12, end: 12, orb: isFr ? orbeSiteweb : websiteOrb },
      { label: "Kiosk", start: 13, end: 19, orb: isFr ? orbeKiosque : kioskOrb },
      { label: "Video", start: 20, end: 20, orb: isFr ? orbeVideo : videoOrb },
    ],
    [isFr]
  );

  const memories: Memory[] = [
    { title: "Memory 1", date: "Jan. 6 2026", text: "Random Video A", orb: isFr ? orbeSouvenirNo1 : memory1Orb, videoSrc: "/src/assets/memories/robot_thing.mp4" },
    { title: "Memory 1", date: "Jan. 6 2026", text: "Random Video B", orb: isFr ? orbeSouvenirNo1 : memory1Orb, videoSrc: "/src/assets/logs/Video/video_4.mp4" },
    { title: "Memory 1", date: "Jan. 6 2026", text: "Random Video C", orb: isFr ? orbeSouvenirNo1 : memory1Orb, videoSrc: "/src/assets/logs/Video/video_5.mp4" }
  ];

  const teamCount = sections.length;
  const memoryCount = memories.length;

  const openTeam = (i: number) => {
    const idx = wrapIndex(i, teamCount);
    setActiveTeam(idx);
    const range = { start: sections[idx].start, end: sections[idx].end };
    setActiveRange(range);
    setActiveIndex(range.start);
    setActiveArchiveItem(archiveItems[range.start]);
  };

  const prevItem = () => {
    if (!activeRange || activeIndex == null) return;
    const next = activeIndex - 1 < activeRange.start ? activeRange.end : activeIndex - 1;
    setActiveIndex(next);
    setActiveArchiveItem(archiveItems[next]);
  };

  const nextItem = () => {
    if (!activeRange || activeIndex == null) return;
    const next = activeIndex + 1 > activeRange.end ? activeRange.start : activeIndex + 1;
    setActiveIndex(next);
    setActiveArchiveItem(archiveItems[next]);
  };

  return (
    <div className="archive-page">
      <div className="carousel">
        <button className="nav left" onClick={() => setActiveTeam(wrapIndex(activeTeam + 1, teamCount))} type="button">
          <img src={arrowLeft} alt="Previous" />
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
            opacity: abs > MAX_VISIBILITY ? 0 : 1,
            display: abs > MAX_VISIBILITY ? "none" : "block",
          };

          return (
            <div className="card-container" style={style} key={s.label}>
              <button className="card orb-card" onClick={() => openTeam(i)} type="button">
                <img className="orb-img" src={s.orb} alt={s.label} />
              </button>
            </div>
          );
        })}

        <button className="nav right" onClick={() => setActiveTeam(wrapIndex(activeTeam - 1, teamCount))} type="button">
          <img src={arrowRight} alt="Next" />
        </button>
      </div>

      <div className="carousel">
        <button className="nav left" onClick={() => setActiveMemory(wrapIndex(activeMemory + 1, memoryCount))} type="button">
          <img src={arrowLeft} alt="Previous" />
        </button>

        {memories.map((m, i) => {
          const d = circularOffset(activeMemory, i, memoryCount);
          const abs = Math.abs(d);

          const style: CSSVars = {
            "--active": d === 0 ? 1 : 0,
            "--offset": d,
            "--direction": Math.sign(d),
            "--abs-offset": abs,
            zIndex: 100 - abs,
            opacity: abs > MAX_VISIBILITY ? 0 : 1,
            display: abs > MAX_VISIBILITY ? "none" : "block",
          };

          return (
            <div className="card-container" style={style} key={m.title}>
              <button className="card orb-card" onClick={() => setActiveMemoryModal(m)} type="button">
                <img className="orb-img" src={m.orb} alt={m.title} />
              </button>
            </div>
          );
        })}

        <button className="nav right" onClick={() => setActiveMemory(wrapIndex(activeMemory - 1, memoryCount))} type="button">
          <img src={arrowRight} alt="Next" />
        </button>
      </div>

      {activeMemoryModal && (
        <div className="modal-overlay" onClick={() => setActiveMemoryModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveMemoryModal(null)} type="button">
              ×
            </button>
            <div className="modal-content">
              <h2 className="modal-title">{activeMemoryModal.title}</h2>
              {activeMemoryModal.date && <p className="modal-date">{activeMemoryModal.date}</p>}
              {activeMemoryModal.text && <p className="modal-body">{activeMemoryModal.text}</p>}
              <div className="modal-video">
                <video controls playsInline preload="metadata">
                  <source src={activeMemoryModal.videoSrc} />
                </video>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeArchiveItem && (
        <div className="modal-overlay" onClick={() => setActiveArchiveItem(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-arrow left" onClick={prevItem} type="button">
              {"<"}
            </button>
            <button className="modal-arrow right" onClick={nextItem} type="button">
              {">"}
            </button>
            <button className="modal-close" onClick={() => setActiveArchiveItem(null)} type="button">
              ×
            </button>
            <div className="modal-content">
              <img src={activeArchiveItem.image} alt={activeArchiveItem.title} />
              <h2 className="modal-title">{activeArchiveItem.title}</h2>
              <p className="modal-date">{activeArchiveItem.date}</p>
              <p className="modal-body">{activeArchiveItem.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
