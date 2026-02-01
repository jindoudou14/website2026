import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei"
import { Room } from "../sections/room";
import Loader from "../sections/loader"
import { Suspense, useState } from "react"
import "../css/homeHelp.css"

const Home = () => {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <div className="home-canvas">
      <button
        className="help-button"
        onClick={() => setShowHelp(true)}
        aria-label="Help"
      >
        How to explore Emotionopolis!
      </button>

      {showHelp && (
        <div
          className="help-overlay"
          onClick={() => setShowHelp(false)}
        >
          <div
            className="help-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Hello There!</h2>
            <p>
              Oh, a new emotion! Welcome to Emotionopolis, a world full of emotions!
              <br />
            </p>
            <h3>
              The Emotion Headquarters, aka the Home Page
            </h3>
            <p>
              You can look around the room by holding left click then dragging on computers, on just hold and drag on mobile devices.
            </p>
            <p>
              By clicking on glowing objects, they will bring you to different parts of the control room.
            </p>
            <p>
              Control Panel: Entertainment
            </p>
            <p>
              Right Structure: Team Roster
            </p>
            <p>
              Window: When was the last time you heard of a buzzfeed quiz...
            </p>
            <p>
              Library: Come learn more about CRC and Moduel's robot competition!
            </p>
            <p>
              Left Orb holder: The Memories we made along the way!
            </p>

            <button
              className="help-close"
              onClick={() => setShowHelp(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Canvas
        resize={{ scroll: false }}
        style={{ width: "100vw", height: "100vh" }}
        camera={{
          position: [-15.69513282686507, 6.8087595406283965, 7.84927815357562],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Environment preset="dawn" />
          <OrbitControls
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.1}
            minAzimuthAngle={-Math.PI / 1.5}
            maxAzimuthAngle={-0.5}
            minDistance={20}
            maxDistance={20}
          />
          <Room />
         
        </Suspense>
      </Canvas>
    </div>
  );
};


export default Home
