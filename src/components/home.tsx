// import Nav from "./sections/nav";
// import footer from "./footer";

// import { Link } from "react-router-dom";

// pages/Home.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei"
import { Room } from "../sections/room";
import Loader from "../sections/loader"
import { Suspense, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "../css/homeHelp.css"


// function LogCamera() {
//   const { camera } = useThree()

//   useEffect(() => {
//     const log = () => {
//       console.log(
//         'Camera position:',
//         camera.position.toArray(),
//         'Target:',
//         camera.rotation.toArray()
//       )
//     }

//     window.addEventListener('mouseup', log)
//     return () => window.removeEventListener('mouseup', log)
//   }, [camera])

//   return null
// }

const Home = () => {
  const [showHelp, setShowHelp] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setShowHelp(false)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth" if you prefer
    })
  }, [location.pathname])

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
            {/* <p>
              <b>Control Panel:</b> Come and Entertain yourself. The Emotionopolis Video, Tutorial and 3d Simulation Game for Moduel's robot competition are all here!
            </p>
            <p>
              Left Structure: Brings you to our Core Memories! Come see our progress over the year!
            </p>
            <p>
              Right Structure: Come meet your fellow emotions!
            </p>
            <p>
              Window: When was the last time you heard of a buzzfeed quiz...
            </p>
            <p>
              Library: CRC Description and Moduel's robot game description.
            </p>
            <p>
              Robot: Come see the incredible work of the Robot Team!
            </p> */}

            

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
          <Environment preset="sunset" />
          <OrbitControls
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.1}
            minAzimuthAngle={-Math.PI / 1.5}
            maxAzimuthAngle={-0.5}
            enablePan={false}
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
