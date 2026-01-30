// panel.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei"
import { Room } from "../sections/room";
import Loader from "../sections/loader"
import { Suspense, useEffect, useRef, useState } from "react"
import "../css/homeHelp.css"

const Panel = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const controlsRef = useRef<any>(null)
  const controlPanelPos = [-15.5, 9.5, 7.2]

  // Initialize camera to control panel view
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.object.position.set(
        controlPanelPos[0],
        controlPanelPos[1],
        controlPanelPos[2]
      )
      controlsRef.current.target.set(15.5, 24.2, -0.8)
      controlsRef.current.update()
    }
  }, [])

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
      {/* Back button to return to home */}
      <button
        onClick={() => window.location.href = "/"}
        style={{
          position: 'absolute',
          top: '20px',
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

      <Canvas
        resize={{ scroll: false }}
        style={{ width: "100vw", height: "100vh" }}
        camera={{
          position: [-22.5, 12.5, -17.7],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Environment preset="dawn" />
          <OrbitControls
            ref={controlsRef}
            enablePan={false}
            // enableZoom={false}
            // enableRotate={false}
          />
          
          <Room 
            onControlPanelClick={undefined} // No click needed here
            onVideoButton1Click={handleVideo1Click}
            onVideoButton2Click={handleVideo2Click}
            showVideoButtons={true} // Always show buttons in panel view
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
                <button
                  onClick={() => setCurrentVideo(null)}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
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
              </div>
            </Html>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Panel;