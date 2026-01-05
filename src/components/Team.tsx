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
    name: "",
    subteam: "",
    emotion: "",
    funFact: "",
    description: "",
    image: "src/Team_characters/Anger.webp",
  },
  // Add more members here
];

const Team = () => {
  const [activeMember, setActiveMember] = useState<Member | null>(null);

  return (
    <div className="team-page">
      <h1>Meet the Team</h1>
      
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
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{activeMember.name}</h2>
              <button onClick={() => setActiveMember(null)}>X</button>
            </div>
            <img src={activeMember.image} alt={activeMember.name} />
            <p><strong>Subteam:</strong> {activeMember.subteam}</p>
            <p><strong>Emotion:</strong> {activeMember.emotion}</p>
            <p><strong>Fun Fact:</strong> {activeMember.funFact}</p>
            <p>{activeMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;