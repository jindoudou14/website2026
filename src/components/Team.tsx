import { useState } from "react";
import "../css/team.css";
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
    subteam: "Supervisor",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
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
    subteam: "Captain, Kiosk, tutorial/video",
    emotion: "Anxiety",
    funFact: "My goal in life is to have 8 cats",
    quote: "live, laugh, crash out",
    description: "This year challenged me to think creatively to bring our theme to life. I learned how to plan ahead and adapt to new challenges, and I improved my communication skills with team members. Sadly, I had to sacrifice some beloved pieces of clothing due to paint stains!",
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
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
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
    subteam: "Video/Kiosk",
    emotion: "Fear",
    funFact: "Once held the world record for the Wild Kratts: Monkey Mayhem any% speedrun.",
    quote: "",
    description: "You need to mix paint after opening a can.",
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
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
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
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/anger.png",
    photo: "",
    colour: [
      "rgb(255, 0, 0)",
      "rgb(255, 98, 98)"
    ]
  },
  {
    id: 7,
    name: "Zhuoyao Li",
    subteam: "Video and Tutorial",
    emotion: "Joy",
    funFact: "I have an extra bone in my body.",
    quote: "",
    description: "I learned how to use DaVinci Resolve 20! I unfortunately did not participate in many clubs to better focus on robotics.",
    image: "src/Team_characters/sadness.png",
    photo: "",
    colour: [
      "rgb(23, 12, 255)",
      "rgb(104, 97, 255)"
    ]
  },
  {
    id: 8,
    name: "Carla Santavy",
    subteam: "Kiosk!",
    emotion: "Anger",
    funFact: "I like drawing and playing hollow knight",
    quote: "",
    description: "I learned how to work with procreate as well as how art is transposed into video games, such as tilemaps and the layout animation sequences. I had to sacrifice my sanity to draw more animation frames for Jijia.",
    image: "src/Team_characters/anxiety.png",
    photo: "",
    colour: [
      "rgb(255, 143, 0)",
      "rgb(255, 179, 82)"
    ]
  },
  {
    id: 9,
    name: "Tony Yang",
    subteam: "Website, programming and video",
    emotion: "Fear (I play him)",
    funFact: "I love gaming",
    quote: "In life, there’s road blocks",
    description: "I learned how to set up a green screens",
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
    subteam: "Kiosk and Tutorial",
    emotion: "Joy",
    funFact: "I like camping, hiking, and being in the woods.",
    quote: "",
    description: "I learned how to carve different types of foam, how to work with epoxy resins, and how to make a computer catch fire (with supervision). A sacrifice I had to make for the team was spending a lot of time outside the main meetings brainstorming and trying to coordinate with the fire department in order to safely film our tutorial.",
    image: "src/Team_characters/embarassment.png",
    photo: "",
    colour: [
      "rgb(255, 0, 207)",
      "rgb(255, 71, 220)"
    ]
  },
  {
    id: 11,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/Envy.webp",
    photo: "",
    colour: [
      "rgb(0, 128, 128)",
      "rgb(1, 185, 185)"
    ]
  },
  {
    id: 12,
    name: "David Du",
    subteam: "Website, Programming",
    emotion: "Fear",
    funFact: "I like playing hockey",
    quote: "There’s always light at the end of the tunnel",
    description: "I learned that TypeScript makes larger projects way more organised for a team of webdevs. Even thought the time spent during all those meetings were worth it, there were some cool events I had to skip.",
    image: "src/Team_characters/melatonin.png",
    photo: "",
    colour: [
      "rgb(60, 154, 255)",
      "rgb(99, 174, 255)"
    ]
  },
  {
    id: 13,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/bloofy.png",
    photo: "",
    colour: [
      "rgb(218, 118, 255)",
      "rgb(226, 147, 255)"
    ]
  },
  {
    id: 14,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/pouchy.png",
    photo: "",
    colour: [
      "rgb(197, 215, 0)",
      "rgb(224, 245, 0)"
    ]
  },
  {
    id: 15,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/Forgetter_Bobby.png",
    photo: "",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 16,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/Forgetter_Paula.png",
    photo: "",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 17,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/Fritz.png",
    photo: "",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 18,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/lance.png",
    photo: "",
    colour: [
      "rgb(198, 0, 206)",
      "rgb(206, 85, 211)"
    ]
  },
  {
    id: 19,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/nostalgia.png",
    photo: "",
    colour: [
      "rgb(183, 183, 183)",
      "rgb(190, 190, 190)"
    ]
  },
  {
    id: 20,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/Jean.webp",
    photo: "",
    colour: [
      "rgb(47, 168, 255)",
      "rgb(91, 187, 255)"
    ]
  },
  {
    id: 21,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/Xeni.webp",
    photo: "",
    colour: [
      "rgb(50, 255, 212)",
      "rgb(122, 255, 227)"
    ]
  },
  {
    id: 22,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
    image: "src/Team_characters/Paula.webp",
    photo: "",
    colour: [
      "rgb(169, 27, 241)",
      "rgb(188, 85, 240)"
    ]
  },
  {
    id: 23,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    quote: "",
    description: "",
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
    subteam: "Website and Video",
    emotion: "Envy",
    funFact: "",
    quote: "Because singing killed my grandma - The Trolls Movie",
    description: "",
    image: "src/Team_characters/wagon.png",
    photo: "",
    colour: [
      "rgb(255, 85, 128)",
      "rgb(252, 118, 152)"
    ]
  }
];

const Team = () => {
  const [activeMember, setActiveMember] = useState<Member | null>(null);

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
                    <h3 className="modal-header">{activeMember.name}</h3>
                    <p><strong>Subteam:</strong> {activeMember.subteam}</p>
                    <p><strong>Synergizing Emotion:</strong> {activeMember.emotion}</p>
                    <p><strong>Fun Fact:</strong> {activeMember.funFact}</p>
                    <p><strong>Favourite Quote:</strong> {activeMember.quote} </p>
                    <p>{activeMember.description}</p>
                  </div>
              </div>          
          <button className="modal-btn" onClick={() => setActiveMember(null)}><FontAwesomeIcon icon={faX} /></button>
        </div>
        
      )}
      
    </div>
  );
};

export default Team;