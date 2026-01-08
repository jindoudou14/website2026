import { useState } from "react";
import "../css/team.css";

type Member = {
  id: number;
  name: string;
  subteam: string;
  emotion: string;
  funFact: string;
  description: string;
  image: string;
  photo: string;
};

const team: Member[] = [
  {
    id: 1,
    name: "Dominique Paradis",
    subteam: "Supervisor",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/BingBong.png",
    photo: ""
  },
  {
    id: 2,
    name: "Livia Poliquin",
    subteam: "Captain, Kiosk, tutorial/video",
    emotion: "Anxiety",
    funFact: "My goal in life is to have 8 cats",
    description: "This year challenged me to think creatively to bring our theme to life. I learned how to plan ahead and adapt to new challenges, and I improved my communication skills with team members. Sadly, I had to sacrifice some beloved pieces of clothing due to paint stains!",
    image: "src/Team_characters/disgust.png",
    photo: ""
  },
  {
    id: 3,
    name: "Zhi Han Yan",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/ennui.png",
    photo: ""
  },
  {
    id: 4,
    name: "Clancy Pryde",
    subteam: "Video/Kiosk",
    emotion: "Fear",
    funFact: "Once held the world record for the Wild Kratts: Monkey Mayhem any% speedrun.",
    description: "You need to mix paint after opening a can.",
    image: "src/Team_characters/riley.png",
    photo: ""
  },
  {
    id: 5,
    name: "Eveline Yue Zhang",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/joy.png",
    photo: ""
  },
  {
    id: 6,
    name: "Ji Jia Liu",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/anger.png",
    photo: ""
  },
  {
    id: 7,
    name: "Zhuoyao Li",
    subteam: "Video and Tutorial",
    emotion: "Joy",
    funFact: "I have an extra bone in my body.",
    description: "I learned how to use DaVinci Resolve 20! I unfortunately did not participate in many clubs to better focus on robotics.",
    image: "src/Team_characters/sadness.png",
    photo: ""
  },
  {
    id: 8,
    name: "Carla Santavy",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/anxiety.png",
    photo: ""
  },
  {
    id: 9,
    name: "Tony",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/fear.png",
    photo: ""
  },
  {
    id: 10,
    name: "Rowan Luckow",
    subteam: "Kiosk and Tutorial",
    emotion: "Joy",
    funFact: "I like camping, hiking, and being in the woods.",
    description: "I learned how to carve different types of foam, how to work with epoxy resins, and how to make a computer catch fire (with supervision). A sacrifice I had to make for the team was spending a lot of time outside the main meetings brainstorming and trying to coordinate with the fire department in order to safely film our tutorial.",
    image: "src/Team_characters/embarassment.png",
    photo: ""
  },
  {
    id: 11,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Envy.webp",
    photo: ""
  },
  {
    id: 12,
    name: "David Du",
    subteam: "Website, Programming",
    emotion: "Fear",
    funFact: "I like playing hockey",
    description: "I learned that TypeScript makes larger projects way more organised for a team of webdevs. Even thought the time spent during all those meetings were worth it, there were some cool events I had to skip.",
    image: "src/Team_characters/melatonin.png",
    photo: ""
  },
  {
    id: 13,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/bloofy.png",
    photo: ""
  },
  {
    id: 14,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/pouchy.png",
    photo: ""
  },
  {
    id: 15,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Forgetter_Bobby.png",
    photo: ""
  },
  {
    id: 16,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Forgetter_Paula.png",
    photo: ""
  },
  {
    id: 17,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Fritz.png",
    photo: ""
  },
  {
    id: 18,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/lance.png",
    photo: ""
  },
  {
    id: 19,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/nostalgia.png",
    photo: ""
  },
  {
    id: 20,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Jean.webp",
    photo: ""
  },
  {
    id: 21,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Xeni.webp",
    photo: ""
  },
  {
    id: 22,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Paula.webp",
    photo: ""
  },
  {
    id: 23,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Janelle.webp",
    photo: ""
  },
  {
    id: 24,
    name: "Sophie Tin",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/wagon.png",
    photo: ""
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
                <p><strong>Subteam:</strong> {activeMember.subteam}</p>
                <p><strong>Emotion:</strong> {activeMember.emotion}</p>
                <p><strong>Fun Fact:</strong> {activeMember.funFact}</p>
                <p>{activeMember.description}</p>
              </div>
          </div>
          
          <button className="modal-btn" onClick={() => setActiveMember(null)}>X</button>
        
        </div>
        
      )}
      
    </div>
  );
};

export default Team;