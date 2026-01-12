import { useState } from "react";
import "../css/team.css";

import { useTranslation } from "react-i18next";


type Member = {
  id: number;
  name: string;
  subteam: string;
  emotion: string;
  funFact: string;
  description: string;
  image: string;
  photo: string;
  colour: string[];
};

const team: Member[] = [
  {
    id: 1,
    name: "Dominique Paradis",
    subteam: "paradis_subteam",
    emotion: "paradis_emotion",
    funFact: "paradis_fun",
    description: "paradis_des",
    image: "src/Team_characters/BingBong.png",
    photo: "",
    colour: [
      "rgba(251, 104, 180, 0.8)",
      "rgba(255, 122, 191, 0.8)"
    ]
  },
  {
    id: 2,
    name: "Livia Poliquin",
    subteam: "livia_subteam",
    emotion: "livia_emotion",
    funFact: "livia_fun",
    description: "livia_des",
    image: "src/Team_characters/disgust.png",
    photo: "",
    colour: [
      "rgba(15, 183, 15, 0.8)",
      "rgba(83, 223, 83, 0.89)"
    ]
  },
  {
    id: 3,
    name: "Zhi Han Yan",
    subteam: "han_subteam",
    emotion: "han_emotion",
    funFact: "han_fun",
    description: "han_des",
    image: "src/Team_characters/ennui.png",
    photo: "",
    colour: [
      "rgba(97, 0, 213, 0.89)",
      "rgba(136, 35, 255, 0.89)"
    ]
  },
  {
    id: 4,
    name: "Clancy Pryde",
    subteam: "clancy_subteam",
    emotion: "clancy_emotion",
    funFact: "clancy_fun",
    description: "clancy_des",
    image: "src/Team_characters/riley.png",
    photo: "",
    colour: [
      "rgba(255, 235, 93, 0.89)",
      "rgba(255, 241, 141, 0.89)"
    ]
  },
  {
    id: 5,
    name: "Eveline Yue Zhang",
    subteam: "eveline_subteam",
    emotion: "eveline_emotion",
    funFact: "eveline_fun",
    description: "eveline_des",
    image: "src/Team_characters/joy.png",
    photo: "",
    colour: [
      "rgba(255, 234, 0, 0.89)",
      "rgba(255, 238, 45, 0.89)"
    ]
  },
  {
    id: 6,
    name: "Ji Jia Liu",
    subteam: "jijia_subteam",
    emotion: "jijia_emotion",
    funFact: "jijia_fun",
    description: "jijia_des",
    image: "src/Team_characters/anger.png",
    photo: "",
    colour: [
      "rgba(255, 0, 0, 0.89)",
      "rgba(255, 98, 98, 0.89)"
    ]
  },
  {
    id: 7,
    name: "Zhuoyao Li",
    subteam: "zhuoyao_subteam",
    emotion: "zhuoyao_emotion",
    funFact: "zhuoyao_fun",
    description: "Zhuoyao_des",
    image: "src/Team_characters/sadness.png",
    photo: "",
    colour: [
      "rgba(23, 12, 255, 0.89)",
      "rgba(104, 97, 255, 0.89)"
    ]
  },
  {
    id: 8,
    name: "Carla Santavy",
    subteam: "carla_subteam",
    emotion: "carla_emotion",
    funFact: "carla_fun",
    description: "carla_des",
    image: "src/Team_characters/anxiety.png",
    photo: "",
    colour: [
      "rgba(255, 143, 0, 0.89)",
      "rgba(255, 179, 82, 0.89)"
    ]
  },
  {
    id: 9,
    name: "Tony",
    subteam: "tony_subteam",
    emotion: "tony_emotion",
    funFact: "tony_fun",
    description: "tony_des",
    image: "src/Team_characters/fear.png",
    photo: "",
    colour: [
      "rgba(195, 50, 255, 0.89)",
      "rgba(216, 122, 255, 0.89)"
    ]
  },
  {
    id: 10,
    name: "Rowan Luckow",
    subteam: "rowan_subteam",
    emotion: "rowan_emotion",
    funFact: "rowan_fun",
    description: "rowan_des",
    image: "src/Team_characters/embarassment.png",
    photo: "",
    colour: [
      "rgba(255, 0, 207, 0.89)",
      "rgba(255, 71, 220, 0.89)"
    ]
  },
  {
    id: 11,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Envy.webp",
    photo: "",
    colour: [
      "rgba(0, 128, 128, 1)",
      "rgb(1, 185, 185)"
    ]
  },
  {
    id: 12,
    name: "David Du",
    subteam: "david_subteam",
    emotion: "david_emotion",
    funFact: "david_fun",
    description: "david_des",
    image: "src/Team_characters/melatonin.png",
    photo: "",
    colour: [
      "rgba(60, 154, 255, 0.89)",
      "rgba(99, 174, 255, 0.89)"
    ]
  },
  {
    id: 13,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/bloofy.png",
    photo: "",
    colour: [
      "rgba(218, 118, 255, 0.89)",
      "rgba(226, 147, 255, 0.89)"
    ]
  },
  {
    id: 14,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/pouchy.png",
    photo: "",
    colour: [
      "rgba(197, 215, 0, 0.89)",
      "rgba(224, 245, 0, 0.89)"
    ]
  },
  {
    id: 15,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Forgetter_Bobby.png",
    photo: "",
    colour: [
      "rgba(47, 168, 255, 1)",
      "rgba(91, 187, 255, 1)"
    ]
  },
  {
    id: 16,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Forgetter_Paula.png",
    photo: "",
    colour: [
      "rgba(47, 168, 255, 1)",
      "rgba(91, 187, 255, 1)"
    ]
  },
  {
    id: 17,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Fritz.png",
    photo: "",
    colour: [
      "rgba(47, 168, 255, 1)",
      "rgba(91, 187, 255, 1)"
    ]
  },
  {
    id: 18,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/lance.png",
    photo: "",
    colour: [
      "rgba(198, 0, 206, 0.89)",
      "rgba(206, 85, 211, 0.89)"
    ]
  },
  {
    id: 19,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/nostalgia.png",
    photo: "",
    colour: [
      "rgba(183, 183, 183, 1)",
      "rgba(190, 190, 190, 1)"
    ]
  },
  {
    id: 20,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Jean.webp",
    photo: "",
    colour: [
      "rgba(47, 168, 255, 1)",
      "rgba(91, 187, 255, 1)"
    ]
  },
  {
    id: 21,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Xeni.webp",
    photo: "",
    colour: [
      "rgba(50, 255, 212, 1)",
      "rgba(122, 255, 227, 1)"
    ]
  },
  {
    id: 22,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Paula.webp",
    photo: "",
    colour: [
      "rgba(169, 27, 241, 1)",
      "rgba(188, 85, 240, 1)"
    ]
  },
  {
    id: 23,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Janelle.webp",
    photo: "",
    colour: [
      "rgba(47, 168, 255, 1)",
      "rgba(91, 187, 255, 1)"
    ]
  },
  {
    id: 24,
    name: "Sophie Tin",
    subteam: "sophie_subteam",
    emotion: "sophie_emotion",
    funFact: "sophie_fun",
    description: "sophie_des",
    image: "src/Team_characters/wagon.png",
    photo: "",
    colour: [
      "rgba(255, 85, 128, 1)",
      "rgba(252, 118, 152, 1)n"
    ]
  }
];

const Team = () => {
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const {t} = useTranslation()
  return (
    <div className="team-page">
      <h1>Meet the Team</h1>
      <h2>Welcome to Riley's mind! Get to know the team by clicking on the characters below. You'll learn about each member's subteam, their favourite emotion, a fun fact about them, and what they learned from robotics.</h2>
      
      <div className="character-grid">
        {team.map((member) => (
          <div 
            key={member.id} 
            className="character-item"
            style={{
              "--glow-1": member.colour[0],
              "--glow-2": member.colour[1],
            } as React.CSSProperties}
            onClick={() => setActiveMember(member)}
          >
            <p className="tooltip">{member.name}</p>
            <img src={member.image} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeMember && (
        <div className="modal-overlay" onClick={() => setActiveMember(null)}>
          <div>
              <img src={activeMember.photo} alt={activeMember.name} />
              
          </div>
          <img className="frame" src={"logos and images/frame.png"} />
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            
              <div className="member-info">
                <h2 className="modal-header">{activeMember.name}</h2>
                <p><strong>Subteam:</strong> {activeMember.subteam ? t(activeMember.subteam): activeMember.subteam}</p>
                <p><strong>Emotion:</strong> {activeMember.emotion ? t(activeMember.emotion):activeMember.emotion}</p>
                <p><strong>Fun Fact:</strong> {activeMember.funFact ? t(activeMember.funFact):activeMember.funFact}</p>
                <p>{activeMember.description ? t(activeMember.description):activeMember.description}</p>
              </div>
          </div>
          
          <button className="modal-btn" onClick={() => setActiveMember(null)}>X</button>
        
        </div>
        
      )}
      
    </div>
  );
};

export default Team;