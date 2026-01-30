import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei"
import { Room } from "../sections/room";
import Loader from "../sections/loader"
import { Suspense, useState } from "react"
import "../css/homeHelp.css"

const Panel = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)


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
        onClick={() => window.location.href = "/"}
        style={{
          position: 'absolute',
          top: '200px',
          left: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          background: '#ac58f5',
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
          position: [-10.88386298564633, 8.082407746515925, -0.49056157546326473],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Environment preset="dawn" />
          <OrbitControls
            target={[-10.886761371790557, 8.080930123862112, -0.49062576898134]}
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
          
          <Room 
            onControlPanelClick={undefined}
            onVideoButton1Click={handleVideo1Click}
            onVideoButton2Click={handleVideo2Click}
            showVideoButtons={true}
          />
          
          {currentVideo && youtubeVideoIds[currentVideo as keyof typeof youtubeVideoIds] && (
            <Html
              position={[-15, 5.5, -0.7]}
              center
              style={{
                width: '70vw',
                height: '70vh',
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
                    left: '0px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    cursor: 'pointer',
                    fontSize: '30px',
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