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
};

const team: Member[] = [
  {
    id: 1,
    name: "Paradis",
    subteam: "robot",
    emotion: "evnwjvkn",
    funFact: "efnjnew",
    description: "wfnjewknfx",
    image: "src/Team_characters/Anger.webp",
  },
  {
    id: 2,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Envy.webp"
  },
  {
    id: 3,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/BingBong.png"
  },
  {
    id: 4,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Forgetter_Bobby.png"
  },
  {
    id: 5,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Fritz.png"
  },
  {
    id: 6,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Janelle.webp"
  },
  {
    id: 7,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Jean.webp"
  },
  {
    id: 8,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Mel.webp"
  },
  {
    id: 9,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 10,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 11,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 12,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 13,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 14,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 15,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 16,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 17,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 18,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 19,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 20,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 21,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 22,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 23,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  },
  {
    id: 24,
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: ""
  }
];

const Team = () => {
  const [activeMember, setActiveMember] = useState<Member | null>(null);

  return (
    <div className="team-page">
      <h1>Meet the Team</h1>
      <h2>Welcome to Riley's mind! ADD MORE TEXT</h2>
      
      <div className="character-grid">
        {team.map((member) => (
          <div 
            key={member.id} 
            className="character-item"
            onClick={() => setActiveMember(member)}
          >
            <img src={member.image} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeMember && (
        <div className="modal-overlay" onClick={() => setActiveMember(null)}>
          <div>
              <img src={activeMember.image} alt={activeMember.name} />
          </div>

          <div className="modal" onClick={(e) => e.stopPropagation()}>
            

            <div>
              <div className="modal-header">
                <h2>{activeMember.name}</h2>
                <button onClick={() => setActiveMember(null)}>X</button>
              </div>
              <div className="member-info">
                <p><strong>Subteam:</strong> {activeMember.subteam}</p>
                <p><strong>Emotion:</strong> {activeMember.emotion}</p>
                <p><strong>Fun Fact:</strong> {activeMember.funFact}</p>
                <p>{activeMember.description}</p>
              </div>
            </div>
            
            
          </div>

        </div>
      )}
    </div>
  );
};

export default Team;