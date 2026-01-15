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
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { Selection } from "@react-three/postprocessing"

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
        <Selection>
           <EffectComposer multisampling={8} autoClear={false}>
            <Outline
              visibleEdgeColor={0xffffff}
              hiddenEdgeColor={0xffffff}
              edgeStrength={5}
              width={1000}
              blur={true}
              pulseSpeed={0.5}
            />
          </EffectComposer>
          <Room />
        </Selection>
        <LogCamera />
      </Canvas>
    </div>
  );
};

export default Home;

