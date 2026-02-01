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
import memory2Orb from "../assets/images/orbs/memory2Orb.png";
import memory3Orb from "../assets/images/orbs/memory3Orb.png";
import memory4Orb from "../assets/images/orbs/memory4Orb.png";
import memory5Orb from "../assets/images/orbs/memory5Orb.png";

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
  const { i18n, t } = useTranslation();
  const isFr = (i18n.resolvedLanguage || i18n.language || "").toLowerCase().startsWith("fr");

  const [activeTeam, setActiveTeam] = useState(0);
  const [activeArchiveItem, setActiveArchiveItem] = useState<ArchiveItem | null>(null);
  const [activeRange, setActiveRange] = useState<{ start: number; end: number } | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [activeMemory, setActiveMemory] = useState(0);
  const [activeMemoryModal, setActiveMemoryModal] = useState<Memory | null>(null);

  const archiveItems: ArchiveItem[] = [
    { title: "archives.robot.1.title", text: "archives.robot.1.text", date: "archives.robot.1.date", image: "src/assets/images/robot/robot_1.jpg" },
    { title: "archives.robot.2.title", text: "archives.robot.2.text", date: "archives.robot.2.date", image: "src/assets/images/robot/robot_2.jpg" },
    { title: "archives.robot.3.title", text: "archives.robot.3.text", date: "archives.robot.3.date", image: "src/assets/images/robot/robot_3.jpg" },
    { title: "archives.robot.4.title", text: "archives.robot.4.text", date: "archives.robot.4.date", image: "src/assets/images/robot/robot_4.png" },
    { title: "archives.robot.5.title", text: "archives.robot.5.text", date: "archives.robot.5.date", image: "src/assets/images/robot/robot_5.jpg" },
    { title: "archives.robot.6.title", text: "archives.robot.6.text", date: "archives.robot.6.date", image: "src/assets/images/robot/robot_6.jpg" },
    { title: "archives.robot.7.title", text: "archives.robot.7.text", date: "archives.robot.7.date", image: "src/assets/images/robot/robot_7.png" },
    { title: "archives.robot.8.title", text: "archives.robot.8.text", date: "archives.robot.8.date", image: "src/assets/images/robot/robot_8.jpg" },
    { title: "archives.robot.9.title", text: "archives.robot.9.text", date: "archives.robot.9.date", image: "src/assets/images/robot/robot_9.png" },
    { title: "archives.robot.10.title", text: "archives.robot.10.text", date: "archives.robot.10.date", image: "src/assets/images/robot/robot_10.png" },
    { title: "archives.robot.11.title", text: "archives.robot.11.text", date: "archives.robot.11.date", image: "src/assets/images/robot/robot_11.png" },

    { title: "archives.programming.1.title", text: "archives.programming.1.text", date: "archives.programming.1.date", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "archives.programming.2.title", text: "archives.programming.2.text", date: "archives.programming.2.date", image: "src/assets/images/programming/programming_2.png" },
    { title: "archives.programming.3.title", text: "archives.programming.3.text", date: "archives.programming.3.date", image: "src/assets/images/programming/programming_3.jpg" },
    { title: "archives.programming.4.title", text: "archives.programming.4.text", date: "archives.programming.4.date", image: "src/assets/images/programming/programming_4.png" },
    { title: "archives.programming.5.title", text: "archives.programming.5.text", date: "archives.programming.5.date", image: "src/assets/images/programming/programming_5.png" },

    { title: "archives.website.1.title", text: "archives.website.1.text", date: "archives.website.1.date", image: "src/assets/memories/website2.jpg" },
    { title: "archives.website.2.title", text: "archives.website.2.text", date: "archives.website.2.date", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "archives.website.3.title", text: "archives.website.3.text", date: "archives.website.3.date", image: "src/assets/memories/website3.png" },
    { title: "archives.website.4.title", text: "archives.website.4.text", date: "archives.website.4.date", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "archives.website.5.title", text: "archives.website.5.text", date: "archives.website.5.date", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "archives.website.6.title", text: "archives.website.6.text", date: "archives.website.6.date", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "archives.website.7.title", text: "archives.website.7.text", date: "archives.website.7.date", image: "src/assets/images/website/website_7.png" },
    { title: "archives.website.8.title", text: "archives.website.8.text", date: "archives.website.8.date", image: "src/assets/memories/website4.png" },
    { title: "archives.website.9.title", text: "archives.website.9.text", date: "archives.website.9.date", image: "src/assets/memories/website1.webp" },
    { title: "archives.website.10.title", text: "archives.website.10.text", date: "archives.website.10.date", image: "src/assets/images/programming/programming_1.jpg" },

    { title: "archives.kiosk.1.title", text: "archives.kiosk.1.text", date: "archives.kiosk.1.date", image: "src/assets/images/kiosk/kiosk_1.png" },
    { title: "archives.kiosk.2.title", text: "archives.kiosk.2.text", date: "archives.kiosk.2.date", image: "src/assets/images/kiosk/kiosk_2.jpeg" },
    { title: "archives.kiosk.3.title", text: "archives.kiosk.3.text", date: "archives.kiosk.3.date", image: "src/assets/images/kiosk/kiosk_3.png" },
    { title: "archives.kiosk.4.title", text: "archives.kiosk.4.text", date: "archives.kiosk.4.date", image: "src/assets/images/kiosk/kiosk_4.jpeg" },
    { title: "archives.kiosk.5.title", text: "archives.kiosk.5.text", date: "archives.kiosk.5.date", image: "src/assets/images/kiosk/kiosk_5.jpeg" },
    { title: "archives.kiosk.6.title", text: "archives.kiosk.6.text", date: "archives.kiosk.6.date", image: "src/assets/images/kiosk/kiosk_6.png" },
    { title: "archives.kiosk.7.title", text: "archives.kiosk.7.text", date: "archives.kiosk.7.date", image: "src/assets/images/kiosk/kiosk_7.jpeg" },
    { title: "archives.kiosk.8.title", text: "archives.kiosk.8.text", date: "archives.kiosk.8.date", image: "src/assets/images/kiosk/kiosk_8.jpeg" },
    { title: "archives.kiosk.9.title", text: "archives.kiosk.9.text", date: "archives.kiosk.9.date", image: "src/assets/images/kiosk/kiosk_9.png" },
    { title: "archives.kiosk.10.title", text: "archives.kiosk.10.text", date: "archives.kiosk.10.date", image: "src/assets/images/kiosk/kiosk_10.jpeg" },
    { title: "archives.kiosk.11.title", text: "archives.kiosk.11.text", date: "archives.kiosk.11.date", image: "src/assets/images/kiosk/kiosk_11.png" },

    { title: "archives.video.1.title", text: "archives.video.1.text", date: "archives.video.1.date", image: "src/assets/memories/video5.webp" },
    { title: "archives.video.2.title", text: "archives.video.2.text", date: "archives.video.2.date", image: "src/assets/images/video/video_2.jpg" },
    { title: "archives.video.3.title", text: "archives.video.3.text", date: "archives.video.3.date", image: "src/assets/memories/video3.webp" },
    { title: "archives.video.4.title", text: "archives.video.4.text", date: "archives.video.4.date", image: "src/assets/images/video/video_4.jpg" },
    { title: "archives.video.5.title", text: "archives.video.5.text", date: "archives.video.5.date", image: "src/assets/memories/anger.jpg" },
    { title: "archives.video.6.title", text: "archives.video.6.text", date: "archives.video.6.date", image: "src/assets/images/video/video_2.jpg" },
    { title: "archives.video.7.title", text: "archives.video.7.text", date: "archives.video.7.date", image: "src/assets/memories/video4.webp" },
    { title: "archives.video.8.title", text: "archives.video.8.text", date: "archives.video.8.date", image: "src/assets/memories/video2.webp" },
  ];


  const sections: Section[] = useMemo(
    () => [
      { label: "archives.sections.robot", start: 0, end: 10, orb: isFr ? orbeRobot : robotOrb },
      { label: "archives.sections.programming", start: 11, end: 15, orb: isFr ? orbeProgrammation : programmingOrb },
      { label: "archives.sections.website", start: 16, end: 25, orb: isFr ? orbeSiteweb : websiteOrb },
      { label: "archives.sections.kiosk", start: 26, end: 36, orb: isFr ? orbeKiosque : kioskOrb },
      { label: "archives.sections.video", start: 37, end: 44, orb: isFr ? orbeVideo : videoOrb },
    ],
    [isFr]
  );

  const memories: Memory[] = [
    { title: "archives.memories.1.title", date: "archives.memories.1.date", text: "archives.memories.1.text", orb: isFr ? orbeSouvenirNo1 : memory1Orb, videoSrc: "/src/assets/memories/robot_thing.mp4" },
    { title: "archives.memories.2.title", date: "archives.memories.2.date", text: "archives.memories.2.text", orb: isFr ? orbeSouvenirNo1 : memory5Orb, videoSrc: "src/assets/memories/memory5.mov" },
    { title: "archives.memories.3.title", date: "archives.memories.3.date", text: "archives.memories.3.text", orb: isFr ? orbeSouvenirNo1 : memory4Orb, videoSrc: "src/assets/memories/memory4.mov" },
    { title: "archives.memories.4.title", date: "archives.memories.4.date", text: "archives.memories.4.text", orb: isFr ? orbeSouvenirNo1 : memory3Orb, videoSrc: "/src/assets/images/Video/video_5.mp4" },
    { title: "archives.memories.5.title", date: "archives.memories.5.date", text: "archives.memories.5.text", orb: isFr ? orbeSouvenirNo1 : memory2Orb, videoSrc: "src/assets/memories/memory2.mov" }
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
          <div className="modal2" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveMemoryModal(null)} type="button">
              ×
            </button>
            <div className="modal-content">
              <h2 className="modal-title">{t(activeMemoryModal.title)}</h2>
              {activeMemoryModal.date && <p className="modal-date">{t(activeMemoryModal.date)}</p>}
              {activeMemoryModal.text && <p className="modal-body">{t(activeMemoryModal.text)}</p>}
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
          <div className="modal2" onClick={(e) => e.stopPropagation()}>
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
              <h2 className="modal-title">{t(activeArchiveItem.title)}</h2>
              <p className="modal-date">{t(activeArchiveItem.date)}</p>
              <p className="modal-body">{t(activeArchiveItem.text)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
