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
    quote: "Of all the things I've lost I missed my mind the most. - Mark Twain",
   
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
    quote: "live, laugh, crash out",
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
    quote: "Get to work Ismael",
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
    quote: "",
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
    quote: "THE ONE PIECE IS REALLL 🗣️🗣️🔥🔥",
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
    quote: "mesure twice cut 5 times",
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
    quote: "“If you change the way you look at things, the things you look at change.” — Wayne Dyer",
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
    quote: "",
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
    quote: "In life, there’s road blocks",
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
    quote: "",
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
    subteam: "Kiosk, Video, Tutorial",
    emotion: "fear",
    funFact: "i'm a big fan of collecting rocks and sticks",
    quote: '"U da real art" - Julia 2026',
    description: "I learned how to use power tools (which is really cool) and all the fun quirks of woodworking. I also learned that I can't cut straight to save my life using a jig saw. I sacrificed 1 pair of jeans, 1 pair of shorts, and 2 t-shirts to purple paint and wood dust.",
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
    quote: "There’s always light at the end of the tunnel",
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
    subteam: "Professional job hopper (3 semesters of experience)",
    emotion: "Joy :)",
    funFact: "My high score for the most slices of bread stacked on a baby's face is 32",
    quote: "(standing in front of the closed zoo) Damn I guess I won't see my sister today",
    description: "I learned to implement onshape with my blender workflow (I was onshape washed by the previous team captain). I also learned that starbucks cappuccino makes me constipated  (thank you Julia). I sacrificed neither sleep nor sanity, for I have none.",
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
    subteam: "Robot lift",
    emotion: "Anxiety 🥲",
    funFact: "I can do an eerily accurate impression of a cow.",
    quote: "Words are just complicated airflow 🍃😶‍🌫️",
    description: "How to add WD-40 and Thread-lock to everything :)",
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
    subteam: "forklift certified (cad'ing the claw)",
    emotion: "envy",
    funFact: "Ivar Aasen #1 Fan",
    quote: "Move your gambling over, I need to explain binary!",
    description: "This year I learned that one really ought to constrain their sketches. I also very much sacrificed my sleep schedule for this.",
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
    subteam: "Robot, washer abuser",
    emotion: "Joy",
    funFact: "Baking to make people like me.",
    quote: "I'm hungry",
    description: "I learned a lot of very useful skills in the cage, such as soldering, how to use a Dremel (it's terrible, I hate it, it's scary), how to cut extrusions and the joys of threadlocking. I sacrificed my chances of not getting lung cancer (all I do all day is breathe in WD-40, solder fumes and steel).",
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
    subteam: "Robot",
    emotion: "fear",
    funFact: "I collect model ships even though I hate the ocean.",
    quote: "It’s now or never!",
    description: "I learned how to saw straight and fast with a hacksaw and sacrificed my back to work while standing.",
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
    subteam: "Robot claw",
    emotion: "Joy",
    funFact: "Im certified in scuba diving",
    quote: "it is what it is",
    description: "I learned how to design and build different parts of a robot, and I also learned the names of pieces I didn’t even know existed. I had to sacrifice my APs, they will be missed",
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
    subteam: "green screen struggler",
    emotion: "fear",
    funFact: "bubble tea discovery of the year is jasmin milk tea",
    quote: "you da real robotics",
    description: "learned how to put aura around the emotions + sacrificed my hawaii trip for robotics 😛",
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
    subteam: "Robot: claw design and build",
    emotion: "determination",
    funFact: "I can do 8 pull ups",
    quote: "It always seems impossible until it's done",
    description: "I got more involved in designing the robot. I had to wake up earlier in the mornings to go to robotics. I also spent part of christmas to work on the claw design",
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
    subteam: "Website",
    emotion: "Joy",
    funFact: "I like teaching robotics.",
    quote: "If you’re not last, you’re first!",
    description: "This year, I learned how to move and play with balls digitally. I’ve had to sacrifice my mental sanity for this team.",
    image: "src/Team_characters/Xeni.webp",
    photo: "src/member-photos/Ismael.png",
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
    subteam: "sophie_subteam",
    emotion: "sophie_emotion",
    funFact: "sophie_fun",
    description: "sophie_des",
    quote: "Because singing killed my grandma - The Trolls Movie",
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
      <h1>Meet the Team</h1>
      <h2>Welcome to Riley's mind! Get to know the team by clicking on the characters below. You'll learn about each member's subteam, their favourite emotion, their favourite quote, a fun fact about them, and what they learned from robotics.</h2>
      
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
                    <h3 className="modal-header">{activeMember.name}</h3>
                    <p><strong>Subteam:</strong> {activeMember.subteam}</p>
                    <p><strong>Synergizing Emotion:</strong> {activeMember.emotion}</p>
                    <p><strong>Fun Fact:</strong> {activeMember.funFact}</p>
                    <p><strong>Favourite Quote:</strong> {activeMember.quote} </p>
                    <p>{activeMember.description}</p>
                  </div>
              </div>   
          </div>
          <img className="frame" src={"logos and images/frame.png"} />      
          <button className="modal-btn" onClick={() => setActiveMember(null)}><FontAwesomeIcon icon={faX} /></button>

          

        </div>
        
      )}

      {/* <script>
        let modalID = activeMember.id;
        let right-modal = modalID + 1;
        let left-modal = modalID - 1;

      
      </script> */}
      
    </div>
  );
};



export default Team;