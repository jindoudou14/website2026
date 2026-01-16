import { useState } from "react";
import "../css/team.css";


import { useTranslation } from "react-i18next";


import type { TFunctionReturnOptionalDetails } from "i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';


type Member = {
  id: number;
  name: string;
  subteam: string;
  emotion: string;
  funFact: string;
  quote: string;
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
    quote: "paradis_quo",
   
    image: "src/Team_characters/BingBong.png",
    photo: "src/member-photos/Paradis.png",
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
    quote: "livia_quo",
    image: "src/Team_characters/disgust.png",
    photo: "src/member-photos/Livia.png",
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
    quote: "han_quo",
    image: "src/Team_characters/ennui.png",
    photo: "src/member-photos/Zhi Han.png",
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
    quote: "clancy_quo",
    image: "src/Team_characters/riley.png",
    photo: "src/member-photos/Clancy.png",
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
    quote: "eveline_quo",
    image: "src/Team_characters/joy.png",
    photo: "src/member-photos/Eveline.png",
    colour: [
      "rgba(255, 234, 0, 0.89)",
      "rgba(255, 238, 45, 0.89)"
    ]
  },
  {
    id: 6,

    name: "JiJia Liu",
    subteam: "jijia_subteam",
    emotion: "jijia_emotion",
    funFact: "jijia_fun",
    description: "jijia_des",
    quote: "jijia_quo",
    image: "src/Team_characters/anger.png",
    photo: "src/member-photos/JiJia.png",
    colour: [
      "rgb(255, 0, 0)",
      "rgb(255, 98, 98)"
    ]
  },
  {
    id: 7,
    name: "Zhuoyao Li",

    subteam: "zhuoyao_subteam",
    emotion: "zhuoyao_emotion",
    funFact: "zhuoyao_fun",
    description: "Zhuoyao_des",
    quote: "zhuoyao_quo",
    image: "src/Team_characters/sadness.png",
    photo: "src/member-photos/Zhuoyao.png",
    colour: [
      "rgb(23, 12, 255)",
      "rgb(104, 97, 255)"
    ]
  },
  {
    id: 8,
    name: "Carla Santavy",
    subteam: "carla_subteam",
    emotion: "carla_emotion",
    funFact: "carla_fun",
    description: "carla_des",
    quote: "carla_quo",
    image: "src/Team_characters/anxiety.png",
    photo: "src/member-photos/Carla.png",
    colour: [
      "rgb(255, 143, 0)",
      "rgb(255, 179, 82)"
    ]
  },
  {
    id: 9,
    name: "Tony",
    subteam: "tony_subteam",
    emotion: "tony_emotion",
    funFact: "tony_fun",
    description: "tony_des",
    quote: "tony_quo",
    image: "src/Team_characters/fear.png",
    photo: "",
    colour: [
      "rgb(195, 50, 255)",
      "rgb(216, 122, 255)"
    ]
  },
  {
    id: 10,
    name: "Rowan Luckow",
    subteam: "rowan_subteam",
    emotion: "rowan_emotion",
    funFact: "rowan_fun",
    description: "rowan_des",
    quote: "rowan_quo",
    image: "src/Team_characters/embarassment.png",
    photo: "src/member-photos/Rowan.png",
    colour: [
      "rgb(255, 0, 207)",
      "rgb(255, 71, 220)"
    ]
  },
  {
    id: 11,
    name: "Julia Xing",
    subteam: "julia_subteam",
    emotion: "julia_emotion",
    funFact: "julia_fun",
    quote: '"julia_quo',
    description: "julia_des",
    image: "src/Team_characters/Envy.webp",
    photo: "src/member-photos/Julia.png",
    colour: [
      "rgb(0, 128, 128)",
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
    quote: "david_quo",
    image: "src/Team_characters/melatonin.png",
    photo: "src/member-photos/David.png",
    colour: [
      "rgb(60, 154, 255)",
      "rgb(99, 174, 255)"
    ]
  },
  {
    id: 13,
    name: "Daisy Liu",
    subteam: "daisy_subteam",
    emotion: "daisy_emotion",
    funFact: "daisy_fun",
    quote: "daisy_quo",
    description: "daisy_des",
    image: "src/Team_characters/bloofy.png",
    photo: "src/member-photos/Daisy.png",
    colour: [
      "rgb(218, 118, 255)",
      "rgb(226, 147, 255)"
    ]
  },
  {
    id: 14,
    name: "Samuel Cumming",
    subteam: "sam_subteam",
    emotion: "sam_emotion",
    funFact: "sam_fun",
    quote: "sam_quo",
    description: "sam_des",
    image: "src/Team_characters/pouchy.png",
    photo: "src/member-photos/Samuel.png",
    colour: [
      "rgb(197, 215, 0)",
      "rgb(224, 245, 0)"
    ]
  },
  {
    id: 15,
    name: "Elliot Gibbons",
    subteam: "elliot_subteam",
    emotion: "elliot_emotion",
    funFact: "elliot_fun",
    quote: "elliot_quo",
    description: "elliot_des",
    image: "src/Team_characters/Forgetter_Bobby.png",
    photo: "src/member-photos/Elliot.png",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 16,
    name: "Eva Batal",
    subteam: "eva_subteam",
    emotion: "eva_emotion",
    funFact: "eva_fun",
    quote: "eva_quo",
    description: "eva_des",
    image: "src/Team_characters/Forgetter_Paula.png",
    photo: "src/member-photos/Eva.png",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 17,
    name: "Jeremy Bettez",
    subteam: "jeremy_subteam",
    emotion: "jeremy_emotion",
    funFact: "jeremy_fun",
    quote: "jeremy_quo",
    description: "jeremy_des",
    image: "src/Team_characters/Fritz.png",
    photo: "src/member-photos/Jeremy.png",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 18,
    name: "Ines Mlynarek",
    subteam: "ines_subteam",
    emotion: "ines_emotion",
    funFact: "ines_fun",
    quote: "ines_quo",
    description: "ines_des",
    image: "src/Team_characters/lance.png",
    photo: "src/member-photos/Ines.png",
    colour: [
      "rgb(198, 0, 206)",
      "rgb(206, 85, 211)"
    ]
  },
  {
    id: 19,
    name: "Wendi Guo",
    subteam: "wendi_subteam",
    emotion: "wendi_emotion",
    funFact: "wendi_fun",
    quote: "wendi_quo",
    description: "wendi_des",
    image: "src/Team_characters/nostalgia.png",
    photo: "src/member-photos/Wendi.png",
    colour: [
      "rgb(183, 183, 183)",
      "rgb(190, 190, 190)"
    ]
  },
  {
    id: 20,
    name: "Ariana Castro",
    subteam: "ariana_subteam",
    emotion: "ariana_emotion",
    funFact: "ariana_fun",
    quote: "ariana_quo",
    description: "ariana_des",
    image: "src/Team_characters/Jean.webp",
    photo: "src/member-photos/Ariana.png",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 21,
    name: "Ismael Jlioui",
    subteam: "ismael_subteam",
    emotion: "ismael_emotion",
    funFact: "ismael_fun",
    quote: "ismael_quo",
    description: "ismael_des",
    image: "src/Team_characters/Xeni.webp",
    photo: "src/member-photos/Ismael.png",
    colour: [
      "rgb(50, 255, 212)",
      "rgb(122, 255, 227)"
    ]
  },
  {
    id: 22,
    name: "Paula",
    subteam: "paula_subteam",
    emotion: "paula_emotion",
    funFact: "paula_fun",
    quote: "paula_quo",
    description: "paula_des",
    image: "src/Team_characters/Paula.webp",
    photo: "",
    colour: [
      "rgb(169, 27, 241)",
      "rgb(188, 85, 240)"
    ]
  },
  {
    id: 23,
    name: "Janelle",
    subteam: "janelle_subteam",
    emotion: "janelle_emotion",
    funFact: "janelle_fun",
    quote: "janelle_quo",
    description: "janelle_des",
    image: "src/Team_characters/Janelle.webp",
    photo: "",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 24,
    name: "Sophie Tin",
    subteam: "sophie_subteam",
    emotion: "sophie_emotion",
    funFact: "sophie_fun",
    description: "sophie_des",
    quote: "sophie_quo",
    image: "src/Team_characters/wagon.png",
    photo: "src/member-photos/Sophie.png",
    colour: [
      "rgb(255, 85, 128)",
      "rgb(252, 118, 152)"
    ]
  }
];

const Team = () => {
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const {t} = useTranslation()
  return (
    <div className="team-page">
      <h1>{t('meet')}</h1>
      <h2>{t('welcome')}</h2>
      
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
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeMember && (
        
        <div className="modal-overlay" onClick={() => setActiveMember(null)}>
          <div>
              <img src={activeMember.photo} alt={activeMember.name} />
          </div>

        <div className="frame-modal"> 
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            
              <div className="member-info">
                <h2 className="modal-header">{activeMember.name}</h2>
                <p><strong>{t('sub')}</strong> {activeMember.subteam ? t(activeMember.subteam): activeMember.subteam}</p>
                <p><strong>{t('emo')}</strong> {activeMember.emotion ? t(activeMember.emotion):activeMember.emotion}</p>
                <p><strong>{t('fun')}</strong> {activeMember.funFact ? t(activeMember.funFact):activeMember.funFact}</p>
                <p>{activeMember.description ? t(activeMember.description):activeMember.description}</p>
                <p><strong>{t('quo')}</strong> {activeMember.quote ? t(activeMember.quote):activeMember.quote} </p>
              </div>

            </div>
            <img className="frame" src={"logos and images/frame.png"} />      
            <button className="modal-btn" onClick={() => setActiveMember(null)}><FontAwesomeIcon icon={faX} /></button>
            </div>
          </div>
      )}
      
    </div>
  );
};

export default Team;