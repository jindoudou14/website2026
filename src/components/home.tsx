// import Nav from "./sections/nav";
// import footer from "./footer";

// import { Link } from "react-router-dom";

// pages/Home.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei"
import React from "react";
import { Room } from "../sections/room";
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

function PortalOrb() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <mesh
        position={[0, 1, 0]}
        onClick={() => navigate('/team')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? 'hotpink' : 'orange'}
          emissive={hovered ? 'hotpink' : 'orange'}
          emissiveIntensity={hovered ? 2 : 0.5}
        />
      </mesh>
    </>
  )
}

function LogCamera() {
  const { camera } = useThree()

  useEffect(() => {
    const log = () => {
      console.log(
        'Camera position:',
        camera.position.toArray(),
        'Target:',
        camera.rotation.toArray()
      )
    }

    window.addEventListener('mouseup', log)
    return () => window.removeEventListener('mouseup', log)
  }, [camera])

  return null
}


const Home = () => {
  return (
    <div className="home-canvas">
      <Canvas camera={{ position: [-15.69513282686507, 6.8087595406283965, 7.84927815357562] }}>
        <Environment preset="sunset" />
        <OrbitControls 
          // enablePan={false}
          // minDistance={20}
          // maxDistance={20}
          // enableRotate={false}
        />
        <LogCamera />
        <Room />
      </Canvas>
    </div>
  );
};

export default Home;

