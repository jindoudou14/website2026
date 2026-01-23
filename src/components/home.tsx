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
  }, [location.pathname])

  return (
    <div className="home-canvas">
      <button
        className="help-button"
        onClick={() => setShowHelp(true)}
        aria-label="Help"
      >
        ?
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
            <h2>Welcome 👋</h2>
            <p>
              This is your memory room.
              <br />
              Glowing objects are interactive.
              <br />
              Click around to explore different islands.
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
