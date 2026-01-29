import { useRef, type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"


type RoomProps = JSX.IntrinsicElements['group'] & {
  onControlPanelClick?: () => void;
  onVideoButton1Click?: () => void;
  onVideoButton2Click?: () => void;
  showVideoButtons?: boolean;
}

export function Room(props: RoomProps) {
  const { onControlPanelClick, onVideoButton1Click, onVideoButton2Click, showVideoButtons } = props;
  const { nodes, materials } = useGLTF('/inside3-optimized.glb') as any
  const navigate_moduel = useNavigate()
  const [hovered_moduel, setHovered_moduel] = useState(false)
  const navigate_memory = useNavigate()
  const [hovered_memory, setHovered_memory] = useState(false)
  // const navigate_entertainment = useNavigate()
  const [hovered_entertainment, setHovered_entertainment] = useState(false)
  const navigate_team = useNavigate()
  const [hovered_team, setHovered_team] = useState(false)
  const navigate_archive = useNavigate()
  const [hovered_archive, setHovered_archive] = useState(false)
  const [hovered_video, setHovered_video] = useState(false)
  const [hovered_tutorial, setHovered_tutorial] = useState(false)

  const WindowRef = useRef<THREE.Mesh>(null);
  const LibRef = useRef<THREE.Mesh>(null);
  const teamRef = useRef<THREE.Mesh>(null);
  const entertainmentRef = useRef<THREE.Mesh>(null);
  const archiveRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const base = 0.01;
    const amplitude = 0.4;
    const value = base + Math.abs(Math.sin(t)) * amplitude;

    if (WindowRef.current) {
      (WindowRef.current.material as THREE.Material).opacity = value;
    }
    if (LibRef.current) {
      (LibRef.current.material as THREE.Material).opacity = value;
    }
    if (teamRef.current) {
      (teamRef.current.material as THREE.Material).opacity = value;
    }
    if (entertainmentRef.current) {
      (entertainmentRef.current.material as THREE.Material).opacity = value;
    }
    if (archiveRef.current) {
      (archiveRef.current.material as THREE.Material).opacity = value;
    }
  });
  
  const handleControlPanelClick = (e: any) => {
    e.stopPropagation()
    document.body.style.cursor = "default"
    if (onControlPanelClick) {
      onControlPanelClick();
    }
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['main purple']}
        position={[3.833, 9.666, 7.026]}
        rotation={[-0.011, 0.035, 0.104]}
        scale={[1, 3.409, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[3.031, 14.587, 7.026]}
        rotation={[-0.011, 0.035, 0.104]}
        scale={[1, 3.409, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['main purple']}
        position={[8.753, 12.586, 9.995]}
        rotation={[-0.012, 0.153, 0.103]}
        scale={7.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['dark pink']}
        position={[4.696, 12.586, 9.399]}
        rotation={[-0.012, 0.153, 0.103]}
        scale={7.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['dark pink']}
        position={[8.334, 9.79, 6.36]}
        rotation={[-0.062, -0.341, -0.012]}
        scale={0.933}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve003.geometry}
        material={materials['detail purple']}
        position={[1.631, 9.261, 12.432]}
        rotation={[1.651, -0.008, -1.669]}
        scale={1.531}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.library.geometry}
        material={materials['main purple']}
        position={[21.716, 6.637, -18.496]}
        rotation={[0, -0.398, 0]}
        scale={[5.901, 8.134, 5.057]}
      />
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.library.geometry}
          material={materials['main purple']}
          position={[21.716, 6.637, -18.496]}
          rotation={[0, -0.398, 0]}
          scale={[5.901, 8.134, 5.057]}
          onPointerDown={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "default"
            navigate_moduel("/moduel")
          }}
          onPointerOver={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "pointer"
            setHovered_moduel(true)
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "default"
            setHovered_moduel(false)
          }}
        >
          <meshStandardMaterial
            color={0xc9a0ff}
            metalness={1}
            roughness={1}
            emissive={hovered_moduel ? 0xc9a0ff : 0x000000}
            emissiveIntensity={hovered_moduel ? 0.3 : 0}
          />
        </mesh>
        <mesh
          ref={LibRef}
          castShadow
          receiveShadow
          geometry={nodes.library.geometry}
          position={[21.716, 6.637, -18.496]}
          rotation={[0, -0.398, 0]}
          scale={[5.901, 8.134, 5.057]}
          renderOrder={999}
        >
          <meshBasicMaterial
            color={0x6b1baf}
            transparent
            opacity={1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['flat,750x,075,f-pad,750x1000,f8f8f8'].geometry}
        material={materials['flat,750x,075,f-pad,750x1000,f8f8f8']}
        position={[58.938, 6.738, -2.668]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[80.726, 25.449, 25.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['main purple']}
        position={[-1.104, 0.117, 0.025]}
        scale={[1.361, 0.34, 10.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['main purple']}
        position={[1.309, 1.093, 0.025]}
        scale={[1.361, 0.34, 10.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['main purple']}
        position={[0.206, 0.601, 0.025]}
        scale={[1.361, 0.34, 10.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall.geometry}
        material={materials['detail purple']}
        position={[13.744, 10.415, 0]}
        scale={[21.149, 9.139, 19.16]}
      />
      <group position={[2.228, 1.12, -17.823]} rotation={[0, 0.315, -0.201]} scale={-9.543}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={materials['detail purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_2.geometry}
          material={materials['main purple']}
        />
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials['main purple']}
            onPointerDown={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "default"
              navigate_archive("/archives")
            }}
            onPointerOver={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "pointer"
              setHovered_archive(true)
            }}
            onPointerOut={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "default"
              setHovered_archive(false)
            }}
          >
            <meshStandardMaterial
              color={0x6b1baf}
              metalness={1}
              roughness={1}
              emissive={hovered_archive ? 0xc9a0ff : 0x000000}
              emissiveIntensity={hovered_archive ? 0.3 : 0}
            />
          </mesh>
          <mesh
            ref={archiveRef}
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials['main purple']}
            renderOrder={999}
          >
            <meshBasicMaterial
              color={0xc9a0ff}
              transparent
              opacity={0.5}
              // depthTest={false}
              side={THREE.BackSide}
            />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_3.geometry}
          material={materials['neon purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_4.geometry}
          material={materials['grey blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_5.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_6.geometry}
          material={materials['dark pruple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_7.geometry}
          material={materials['dark blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials['main purple']}
        position={[3.628, -0.048, -17.823]}
        rotation={[0, 0.315, -0.201]}
        scale={-9.543}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials['main purple']}
        position={[3.628, -1.229, -17.823]}
        rotation={[0, 0.315, -0.201]}
        scale={-9.543}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve.geometry}
        material={materials['detail purple']}
        position={[-5.631, 4.174, -13.208]}
        rotation={[1.644, -0.032, -1.982]}
        scale={1.352}
      />
      <group position={[14.391, 4.486, 10.099]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['main purple']}
        />
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials['main purple']}
            onPointerDown={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "default"
              navigate_team("/team")
            }}
            onPointerOver={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "pointer"
              setHovered_team(true)
            }}
            onPointerOut={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "default"
              setHovered_team(false)
            }}
          >
            <meshStandardMaterial
              color={0xc9a0ff}
              metalness={1}
              roughness={1}
              emissive={hovered_team ? 0xc9a0ff : 0x000000}
              emissiveIntensity={hovered_team ? 0.3 : 0}
            />
          </mesh>
          <mesh
            ref={teamRef}
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            renderOrder={999}
          >
            <meshBasicMaterial
              color={0x6b1baf}
              transparent
              opacity={1}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials['detail purple']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windows.geometry}
        material={materials['detail purple']}
        position={[32.54, 6.743, -0.018]}
        scale={[21.149, 9.139, 19.16]}
      />
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.windows.geometry}
          material={materials['detail purple']}
          position={[32.54, 6.743, -0.018]}
          scale={[21.149, 9.139, 19.16]}
          onPointerDown={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "default"
            navigate_memory("/Island")
          }}
          onPointerOver={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "pointer"
            setHovered_memory(true)
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "default"
            setHovered_memory(false)
          }}
        >
          <meshStandardMaterial
            color={0xc9a0ff}
            metalness={1}
            roughness={1}
            emissive={hovered_memory ? 0xc9a0ff : 0x000000}
            emissiveIntensity={hovered_memory ? 0.3 : 0}
          />
        </mesh>
        <mesh
          ref={WindowRef}
          castShadow
          receiveShadow
          geometry={nodes.windows.geometry}
          position={[32.54, 6.743, -0.018]}
          scale={[21.149, 9.139, 19.16]}
          renderOrder={999}
        >
          <meshBasicMaterial
            color={0x000000}
            transparent
            opacity={0.3}
            // depthTest={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
      <group position={[18.038, 4.089, -16.634]} rotation={[0, 0.117, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book_2'].geometry}
          material={materials.sadness}
        />
      </group>
      <group position={[17.786, 4.124, -16.588]} rotation={[0, 0.117, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book001_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book001_2'].geometry}
          material={materials['grey blue']}
        />
      </group>
      <group position={[18.296, 4.124, -16.608]} rotation={[0, 0.117, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book002_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book002_2'].geometry}
          material={materials.Material}
        />
      </group>
      <group position={[18.548, 4.089, -16.655]} rotation={[0, 0.117, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book003_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book003_2'].geometry}
          material={materials['main purple']}
        />
      </group>
      <group position={[17.447, 4.124, -16.377]} rotation={[0.016, 0.049, -0.117]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book004_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book004_2'].geometry}
          material={materials['grey blue']}
        />
      </group>
      <group position={[21.649, 5.456, -16.763]} rotation={[0, -0.198, -0.297]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book005_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book005_2'].geometry}
          material={materials['detail purple']}
        />
      </group>
      <group position={[19.747, 4.086, -17.039]} rotation={[0, -0.25, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book006_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book006_2'].geometry}
          material={materials.sadness}
        />
      </group>
      <group position={[19.466, 4.122, -17.012]} rotation={[0, -0.232, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book007_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book007_2'].geometry}
          material={materials['grey blue']}
        />
      </group>
      <group position={[20.332, 4.125, -17.121]} rotation={[0, -0.25, 0.384]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book008_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book008_2'].geometry}
          material={materials.red}
        />
      </group>
      <group position={[21.028, 7.931, -16.416]} rotation={[0, -0.39, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book009_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book009_2'].geometry}
          material={materials.Material}
        />
      </group>
      <group position={[21.593, 7.922, -16.248]} rotation={[0, -0.39, Math.PI / 10]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book010_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book010_2'].geometry}
          material={materials['grey blue']}
        />
      </group>
      <group position={[23.715, 2.235, -15.173]} rotation={[0, -0.442, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book011_1'].geometry}
          material={materials.sadness}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book011_2'].geometry}
          material={materials['white purple']}
        />
      </group>
      <group position={[23.378, 2.27, -15.184]} rotation={[0, -0.442, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book012_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book012_2'].geometry}
          material={materials.sadness}
        />
      </group>
      <group position={[22.86, 2.27, -15.707]} rotation={[0, -0.512, -0.105]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book013_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book013_2'].geometry}
          material={materials.Joy}
        />
      </group>
      <group position={[23.166, 2.235, -15.478]} rotation={[0, -0.477, 0]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book014_1'].geometry}
          material={materials['white purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part_Studio_1_-_book014_2'].geometry}
          material={materials.disgust}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['detail purple']}
        position={[-11.054, -0.109, 0.069]}
        scale={[19.517, 0.103, 28.679]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.right_sofa.geometry}
        material={materials['main purple']}
        position={[-9.956, 1.099, 9.23]}
        rotation={[0.016, 0.298, 0.048]}
        scale={[0.578, 1, 0.64]}
      />
      <group
        position={[-10.854, 0.321, -11.462]}
        rotation={[0, 1.306, 0]}
        scale={[1, 0.693, 3.063]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials['dark pink']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_2.geometry}
          material={materials['grey blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials['detail purple']}
        position={[-2.222, 9.545, -14.312]}
        rotation={[1.643, -0.035, -2.028]}
        scale={1.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve005.geometry}
        material={materials['main purple']}
        position={[-5.631, 4.174, -13.208]}
        rotation={[1.644, -0.032, -1.982]}
        scale={1.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve009.geometry}
        material={materials['detail purple']}
        position={[3.492, 3.256, -10.958]}
        rotation={[2.955, 0.082, 1.451]}
        scale={0.946}
      />
      <group
        position={[-4.793, 7.305, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials.Joy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials.disgust}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_2.geometry}
          material={materials.anger}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_3.geometry}
          material={materials.sadness}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['dark pruple']}
        position={[2.593, 1.178, -0.131]}
        scale={[1.233, 0.34, 10.095]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_Part_5_(1)001'].geometry}
        material={materials['detail purple']}
        position={[5.974, 0.631, -1.046]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[241.197, 317.487, 241.197]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ball_holder.geometry}
        material={materials['white purple']}
        position={[8.928, 4.042, -1.054]}
        scale={54.583}
      />
      <group position={[-15.342, 3.066, -0.994]} rotation={[0, Math.PI / 2, 0]} scale={0.694}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_1'].geometry}
          material={materials['white purple']}
        />
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Assembly_1_(2)_1'].geometry}
            material={materials['white purple']}
            onPointerDown={handleControlPanelClick}  // Use the new handler
            onPointerOver={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "pointer"
              setHovered_entertainment(true)
            }}
            onPointerOut={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "default"
              setHovered_entertainment(false)
            }}
          >
            <meshStandardMaterial
              color={0xffffff}
              metalness={1}
              roughness={1}
              emissive={hovered_entertainment ? 0xfff2b0 : 0x000000}
              emissiveIntensity={hovered_entertainment ? 0.3 : 0}
            />
          </mesh>
          <mesh
            ref={entertainmentRef}
            castShadow
            receiveShadow
            geometry={nodes['Assembly_1_(2)_1'].geometry}
            material={materials['white purple']}
            renderOrder={999}
          >
            <meshBasicMaterial
              color={0xff4da6}
              transparent
              opacity={0.3}
              // depthTest={false}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_2'].geometry}
          material={materials.anger}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_3'].geometry}
          material={materials['dark pruple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_4'].geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_5'].geometry}
          material={materials['detail purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_6'].geometry}
          material={materials.yellow}
        />
        {showVideoButtons && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Assembly_1_(2)_7'].geometry}
            material={materials.anger}
            onPointerDown={(e) => {
              e.stopPropagation()
              if (onVideoButton1Click) {
                onVideoButton1Click()
              }
            }}
            onPointerOver={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "pointer"
              setHovered_video(true)
            }}
            onPointerOut={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "default"
              setHovered_video(false)
            }}
          >
            <meshStandardMaterial
              color={hovered_video ? 0xff6b6b : 0xff0000}
              metalness={1}
              roughness={1}
              emissive={hovered_video ? 0xff6b6b : 0x000000}
              emissiveIntensity={hovered_video ? 0.5 : 0}
            />
          </mesh>
        )}
        {showVideoButtons && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Assembly_1_(2)_8'].geometry}
            material={materials.Material}
            onPointerDown={(e) => {
              e.stopPropagation()
              if (onVideoButton2Click) {
                onVideoButton2Click()
              }
            }}
            onPointerOver={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "pointer"
              setHovered_tutorial(true)
            }}
            onPointerOut={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "default"
              setHovered_tutorial(false)
            }}
          >
            <meshStandardMaterial
              color={hovered_tutorial ? 0x6bff6b : 0x00ff00}
              metalness={1}
              roughness={1}
              emissive={hovered_tutorial ? 0x6bff6b : 0x000000}
              emissiveIntensity={hovered_tutorial ? 0.5 : 0}
            />
          </mesh>
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_9'].geometry}
          material={materials.yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_10'].geometry}
          material={materials['grey blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_11'].geometry}
          material={materials['grey purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_12'].geometry}
          material={materials['dark pruple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_13'].geometry}
          material={materials.disgust}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_14'].geometry}
          material={materials['grey wp']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_15'].geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_16'].geometry}
          material={materials['mid purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Assembly_1_(2)_17'].geometry}
          material={materials.sadness}
        />
      </group>
      <group
        position={[-4.793, 8.402, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031.geometry}
          material={materials.Joy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_1.geometry}
          material={materials.disgust}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_2.geometry}
          material={materials.anger}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_3.geometry}
          material={materials.sadness}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls001.geometry}
        material={materials.sadness}
        position={[-4.887, 6.235, -19.954]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls002.geometry}
        material={materials.anger}
        position={[-4.485, 6.235, -20.144]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls003.geometry}
        material={materials.Joy}
        position={[-4.426, 6.235, -20.221]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls004.geometry}
        material={materials.Joy}
        position={[-4.468, 6.235, -20.125]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls005.geometry}
        material={materials.anger}
        position={[-4.42, 6.235, -20.155]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls006.geometry}
        material={materials.disgust}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls007.geometry}
        material={materials.Joy}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls008.geometry}
        material={materials.sadness}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls009.geometry}
        material={materials.anger}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls010.geometry}
        material={materials.Joy}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls011.geometry}
        material={materials.disgust}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls012.geometry}
        material={materials.anger}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls013.geometry}
        material={materials.Joy}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls014.geometry}
        material={materials.sadness}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls015.geometry}
        material={materials.Joy}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls016.geometry}
        material={materials.anger}
        position={[-4.793, 6.235, -20.772]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls017.geometry}
        material={materials.disgust}
        position={[8.969, 5.137, -2.25]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls018.geometry}
        material={materials['disgust.004']}
        position={[8.969, 5.137, -2.25]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls019.geometry}
        material={materials.Joy}
        position={[8.969, 5.137, 0.1]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls020.geometry}
        material={materials.Joy}
        position={[7.709, 5.137, -1.045]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls021.geometry}
        material={materials.anger}
        position={[10.165, 5.137, -1.045]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.row_2_balls022.geometry}
        material={materials.sadness}
        position={[8.186, 5.137, -2.042]}
        rotation={[0.583, -1.231, 0.534]}
        scale={[0.408, 0.388, 0.388]}
      />
    </group>
  )
}

useGLTF.preload('/inside3-optimized.glb')

