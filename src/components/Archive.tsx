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
    { title: "Robot Brainstorming", text: "The robot team is brainstorming ideas for three different sections of the robot: the base/drive mechanism, the lift and the claw.", date: "Oct. 30 2025", image: "src/assets/images/robot/robot_1.jpg" },
    { title: "Mix and Match!", text: "The robot team finally decides which design they will implement for each section.", date: "Nov. 6 2025", image: "src/assets/images/robot/robot_2.jpg" },
    { title: "Let's get to Work!", text: "After splitting the team up in three, each subteam begins working on their assigned part of the robot.", date: "Nov. 11 2025", image: "src/assets/images/robot/robot_3.jpg" },
    { title: "Virtual Robot", text: "Team members have begun cadding the robot. The website team is thankful because we would like to use it in our website.", date: "Nov. 25 2025", image: "src/assets/images/robot/robot_4.png" },
    { title: "Shopping Spree! And printed parts", text: "Wow, so many pieces bought for the robot! Oh, some of it was 3d printed by our lovely robot team members, how kind!", date: "Dec. 3 2025", image: "src/assets/images/robot/robot_5.jpg" },
    { title: "How big is this thing?", text: "The base subteam is measuring the base of the robot and deciding what pieces to get next.", date: "Jan. 5 2026", image: "src/assets/images/robot/robot_6.jpg" },
    { title: "The fact that this code does not work is blasphemy!", text: "The person responsible for coding the robot has begun. He doesn't seem very excited, I hope he figures it out.", date: "Jan. 7 2026", image: "src/assets/images/robot/robot_7.png" },
    { title: "Incredible progress!", text: "The base and the lift seem ready for testing, they are currently being put together.", date: "Jan. 9 2026", image: "src/assets/images/robot/robot_8.jpg" },
    { title: "Will the Claw Work?", text: "Probably? I'm not sure... Oh never mind, I was told it worked as expected just now! Hooray!", date: "Jan. 12 2026", image: "src/assets/images/robot/robot_9.png" },
    { title: "Taking the robot for a test drive", text: "It doesn't look too bad! They wanted to improve the lift a little and fix some of the coding for the driving", date: "Jan. 16 2026", image: "src/assets/images/robot/robot_10.png" },
    { title: "Season almost ended!?", text: "That would have been a tragedy, thankfully everyone put their hands out in a valiant attempt to catch a robot that almost fell off the table.", date: "Jan. 21 2026", image: "src/assets/images/robot/robot_11.png" },

    { title: "Warming Up", text: "Before the first prelims came out, we practiced a little with Leetcode, questions from previous CRC competitions and other external sources.", date: "Oct. 30 2025", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "Wow, we actually submitted something early!", text: "This is a new era where we don't submit our solutions last minute. Each question was answered by different team members working seamlessly.", date: "Nov. 14 2025", image: "src/assets/images/programming/programming_2.png" },
    { title: "I take that back", text: "Forget what I said before, we read and completed all the problems on the submission day for prelim two. This is no longer a new era, we are still submitting solutions last minute.", date: "Dec. 5 2025", image: "src/assets/images/programming/programming_3.jpg" },
    { title: "We are so back", text: "Once again, all questions were finished in advance, with multiple days before submission. I won't jinx our team anymore.", date: "Jan. 22 2026", image: "src/assets/images/programming/programming_4.png" },
    { title: "This is very long", text: "We have started thinking about how to tackle the long coding problem with sliding penguins. We are thinking of using bfs, as it is a 16x16 grid, it is not too big and it can run pretty quickly too if we structure the bfs correctly.", date: "Jan. 26 2026", image: "src/assets/images/programming/programming_5.png" },

    { title: "Website Design", text: "We started brainstorming how we should structure the website. We ended up choosing a 3d approach this year because it looks cool and gives us plenty of options for design choices.", date: "Oct. 30 2026", image: "src/assets/images/website/website_1.png" },
    { title: "Dividing tasks", text: "We found each part of the website we need to incorporate this year and divided it among the website members.", date: "Nov. 6 2025", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "Humble beginnings", text: "We began with the navigation bar and the routing to the different pages. Many team members were still getting familiar with typescript and github.", date: "Nov. 13 2025", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "Where's the rest of the website?", text: "During the break, although some sections began seeing progress such as the game description and the team roster, it was mostly empty and that's when we realized we need to actually work on the website.", date: "Jan. 5 2026", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "How hard can it be?", text: "As we progressed, we started to get comfortable with typescript and decided to try some harder design ideas for the website. These ideas were very hard to implement and we couldn't keep up with the pace.", date: "Jan. 7 2026", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "Our brains are growing", text: "With enough practice, time and caffeine, we gradually started to pick up the pace again. The team roster page and description pages were practically finished. Translation was also finished.", date: "Jan. 12 2026", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "We need to do something to show how thankful I am to the 3d modelers", text: "The beautiful 3d model was sent in and we immediately began slaving away to finish the home page, where the model would be.", date: "Jan. 15 2026", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "Remember those inaccurate quizzes on BuzzFeed...", text: "To appeal to our memories, we decided to make a quiz that determines what emotion you synergize with, using buzzfeed formatted questions.", date: "Jan. 18 2026", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "This is bad", text: "A deadline has been set for the other team members to try and break the website, and it is no where near complete. We have never focused so hard on a task before.", date: "Jan. 21 2026", image: "src/assets/images/programming/programming_1.jpg" },
    { title: "Hard work pays off!", text: "After everyone tried breaking the website, the results were better than we expected. All that's left are some final adjustments and fixing bugs!", date: "Jan. 30 2026", image: "src/assets/images/programming/programming_1.jpg" },
    
    { title: "Birth of the Kiosk", text: "The kiosk subteam starts by painting the windows, which will give the kiosk a beautiful view into our team’s personality islands.", date: "Nov. 11 2025", image: "src/assets/images/kiosk/kiosk_1.png" },
    { title: "Kiosk Planning", text: "The subteam finalizes the official kiosk plans for Mø-Duel 2026!", date: "Nov. 14 2025", image: "src/assets/images/kiosk/kiosk_2.jpeg" },
    { title: "Where will we Stash our Memories?", text: "The subteam begins constructing the shelves for the memory balls. A depth effect is created with a covered top section. To make the wall more visually interesting, the bottom half of it will be a ramp that holds even more memories!", date: "Jan. 18 2025", image: "src/assets/images/kiosk/kiosk_3.png" },
    { title: "Memory Container: Complete!", text: "The shelves are done, and the team finishes constructing the ramp.", date: "Jan. 5 2026", image: "src/assets/images/kiosk/kiosk_4.jpeg" },
    { title: "Console Building and the First Memory Orbs", text: "While some subteam members paint the first memory balls, others work on building the console. ", date: "Jan. 7 2026", image: "src/assets/images/kiosk/kiosk_5.jpeg" },
    { title: "Flowers are Pretty!", text: "The first flower decorations are painted.", date: "Jan. 8 2026", image: "src/assets/images/kiosk/kiosk_6.png" },
    { title: "It's all Fun and Games", text: "The team starts accumulating many memories! Some team members are working on an interactive game that can be played using the console.", date: "Jan. 12 2026", image: "src/assets/images/kiosk/kiosk_7.jpeg" },
    { title: "Does this mean Bing Bong's Returning...", text: "Bing Bong’s iconic cart is built. Made from material entirely reused from our TakTik 2025 arcade, it will serve as our robot table for this competition.", date: "Jan. 13 2026", image: "src/assets/images/kiosk/kiosk_8.jpeg" },
    { title: "Why is the Console so Bland?", text: "The team installs buttons and decorations on the console. ", date: "Jan. 15 2026", image: "src/assets/images/kiosk/kiosk_9.png" },
    { title: "Look How Far We've Come!", text: "The kiosk is almost complete! Team members make some flowers motorized to spin, while others work on painting details and finalizing the console.", date: "Jan. 16 2026", image: "src/assets/images/kiosk/kiosk_10.jpeg" },
    { title: "Look Outside", text: "The team is almost done with the window frames. The windows now show the team’s three personality islands: teamwork, robotics and creativity!", date: "Jan. 19 2026", image: "src/assets/images/kiosk/kiosk_11.png" },
    
    { title: "What should the video be about?", text: "We first thought about what themes we can pull out of the premise of Inside Out and how we can connect it to CRC robotics.", date: "Oct. 30 2025", image: "src/assets/images/video/video_1.jpg" },
    { title: "Film expansion", text: "After deciding the moral of the video, we developed our story around that, which is similar to the second movie in a sense.", date: "Nov. 6 2025", image: "src/assets/images/video/video_2.jpg" },
    { title: "A Masterpiece in development", text: "We brainstormed the main scenes like the setting, inciting incident, rising action, climax, falling action and resolution, then began writing the script!", date: "Nov. 18 2025", image: "src/assets/images/video/video_3.jpg" },
    { title: "Victims...I mean the cast", text: "When we finished writing the script, we thought of different shots we would take for each scene, determined (or coerced) team members to fill in all the roles, bought costumes and found places to film.", date: "Jan. 6 2026", image: "src/assets/images/video/video_4.jpg" },
    { title: "Movie stars with the best filmmakers", text: "We filmed all the scenes. Some took very long to film and we had to do many retakes, but we were satisfied with all the scenes we got.", date: "Jan. 12 2026", image: "src/assets/images/video/video_2.jpg" },
    { title: "Putting the pieces together", text: "After filming the main scenes, we thought of what we needed for smooth transition shots between each scene and then we started editing. The first version was extremely laggy and choppy.", date: "Jan. 14 2026", image: "src/assets/images/video/video_2.jpg" },
    { title: "Movie stars turned voice actors?", text: "We added some voice recordings over the video to enhance the quality of the dialogue and storytelling. We had to adjust the microphone a couple of times before we got the quality we wanted and recorded everything we needed.", date: "Jan. 16 2026", image: "src/assets/images/video/video_2.jpg" },
    { title: "100% rotten tomatoes", text: "We got feedback from team members, friends and family. There are some final editing changes we decided to make before we submit the final product.", date: "Jan. 31 2026", image: "src/assets/images/video/video_2.jpg" },
  ];

  const sections: Section[] = useMemo(
    () => [
      { label: "Robot", start: 0, end: 10, orb: isFr ? orbeRobot : robotOrb },
      { label: "Programming", start: 11, end: 15, orb: isFr ? orbeProgrammation : programmingOrb },
      { label: "Website", start: 16, end: 25, orb: isFr ? orbeSiteweb : websiteOrb },
      { label: "Kiosk", start: 26, end: 36, orb: isFr ? orbeKiosque : kioskOrb },
      { label: "Video", start: 37, end: 44, orb: isFr ? orbeVideo : videoOrb },
    ],
    [isFr]
  );

  const memories: Memory[] = [
    { title: "Memory 1", date: "Jan. 6 2026", text: "Random Video A", orb: isFr ? orbeSouvenirNo1 : memory1Orb, videoSrc: "/src/assets/memories/robot_thing.mp4" },
    { title: "Memory 1", date: "Jan. 6 2026", text: "Random Video B", orb: isFr ? orbeSouvenirNo1 : memory1Orb, videoSrc: "/src/assets/images/Video/video_4.mp4" },
    { title: "Memory 1", date: "Jan. 6 2026", text: "Random Video C", orb: isFr ? orbeSouvenirNo1 : memory1Orb, videoSrc: "/src/assets/images/Video/video_5.mp4" }
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
