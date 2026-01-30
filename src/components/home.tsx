import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei"
import { Room } from "../sections/room";
import Loader from "../sections/loader"
import { Suspense, useEffect, useRef, useState } from "react"
import "../css/homeHelp.css"

const Home = () => {
  const [showHelp, setShowHelp] = useState(false)
  const [showControlPanelView, setShowControlPanel] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const controlsRef = useRef<any>(null)
  const originalCameraPos = [-15.69513282686507, 6.8087595406283965, 7.84927815357562]
  const controlPanelPos = [-8, 9.5, -0.8]

  useEffect(() => {
    if (!showControlPanelView) {
      setCurrentVideo(null)
    }
  }, [showControlPanelView])

const handleControlPanelClick = () => {
    setShowControlPanel(true)
    

    if (controlsRef.current) {

      controlsRef.current.object.position.set(
        controlPanelPos[0],
        controlPanelPos[1],
        controlPanelPos[2]
      )
      
      controlsRef.current.target.set(-15.5, 4.2, -0.8)
      controlsRef.current.update()
    }
  }

  const handleBackClick = () => {
    setShowControlPanel(false)
    setCurrentVideo(null)
    

    if (controlsRef.current) {
      controlsRef.current.object.position.set(
        originalCameraPos[0],
        originalCameraPos[1],
        originalCameraPos[2]
      )
      controlsRef.current.target.set(0, 0, 0)
      controlsRef.current.update()
    }
  }

  const handleVideo1Click = () => {
    setCurrentVideo("video1")
  }

  const handleVideo2Click = () => {
    setCurrentVideo("video2")
  }

  const youtubeVideoIds = {
    video1: "hZN-LPOWtgU",
    video2: "pGd6Ix0g_tU"
  }

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  }

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
      {showControlPanelView && (
        <button
          className="back-button"
          onClick={handleBackClick}
          style={{
            position: 'absolute',
            top: '200px',
            left: '20px',
            zIndex: 1000,
            padding: '10px 20px',
            background: '#6b1baf',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ← Back to Room
        </button>
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
            ref={controlsRef}
            enablePan={!showControlPanelView}
            enableZoom={!showControlPanelView}
            enableRotate={!showControlPanelView}

            minDistance={showControlPanelView ? 4 : 20}
            maxDistance={showControlPanelView ? 6 : 20}

            minPolarAngle={showControlPanelView ? Math.PI / 3.5 : Math.PI / 3}
            maxPolarAngle={showControlPanelView ? Math.PI / 2.5 : Math.PI / 2.1}

            minAzimuthAngle={showControlPanelView ? -0.001 : -Math.PI / 1.5}
            maxAzimuthAngle={showControlPanelView ? 0.001 : -0.5}
          />
          <Room 
            onControlPanelClick={showControlPanelView ? undefined : handleControlPanelClick}
            onVideoButton1Click={showControlPanelView ? handleVideo1Click : undefined}
            onVideoButton2Click={showControlPanelView ? handleVideo2Click : undefined}
            showVideoButtons={showControlPanelView}
          />
          {currentVideo && youtubeVideoIds[currentVideo as keyof typeof youtubeVideoIds] && (
            <Html
              position={[-15, 4, -0.7]}
              center
              style={{
                width: '70vw',
                height: '480px',
                background: 'black',
                borderRadius: '10px',
                overflow: 'hidden',
                zIndex: 1000,
                boxShadow: '0 0 30px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <iframe
                  src={getYouTubeEmbedUrl(youtubeVideoIds[currentVideo as keyof typeof youtubeVideoIds])}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                  onClick={() => setCurrentVideo(null)}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1001,
                  }}
                >
                  ×
                </button>
            </Html>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};


export default Home
