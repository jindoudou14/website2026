import { Html, useProgress } from "@react-three/drei"

export default function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="loader">
        <img
          src="src/assets/images/loading_screen.gif"
          alt="Loading"
          className="loader-gif"
        />
        <p>Loading...</p>
        <div className="loader-bar">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span>{Math.floor(progress)}%</span>
      </div>
    </Html>
  )
}
