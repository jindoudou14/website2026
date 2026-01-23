import { useRef, type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import * as THREE from 'three'
// import { Select } from "@react-three/postprocessing"
import { useFrame } from "@react-three/fiber"
// import "../css/room.css";




type RoomProps = JSX.IntrinsicElements['group']

export function Room(props: RoomProps) {
  const { nodes, materials } = useGLTF('/inside.glb') as any
  const navigate_game = useNavigate()
  const [hovered_game, setHovered_game] = useState(false)
  const navigate_memory = useNavigate()
  const [hovered_memory, setHovered_memory] = useState(false)
  const navigate_video = useNavigate()
  const [hovered_video, setHovered_video] = useState(false)
  // const navigate_team = useNavigate()
  // const [hovered_team, setHovered_team] = useState(false)

  const leftOutlineRef = useRef<THREE.Mesh>(null);
  const panelOutlineRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const base = 0.01;
    const amplitude = 0.4;
    const value = base + Math.abs(Math.sin(t)) * amplitude;

    if (leftOutlineRef.current) {
      (leftOutlineRef.current.material as THREE.Material).opacity = value;
    }
    if (panelOutlineRef.current) {
      (panelOutlineRef.current.material as THREE.Material).opacity = value;
    }
  });

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
        geometry={nodes.BézierCurve004.geometry}
        material={materials['main purple']}
        position={[1.631, 9.261, 12.432]}
        rotation={[1.651, -0.008, -1.669]}
        scale={1.531}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials['main purple']}
        position={[19.856, 6.374, -14.812]}
        rotation={[0, 0.073, 0]}
        scale={[5.22, 7.195, 4.473]}
      />
      <group position={[-15.343, 3.066, -0.994]} rotation={[0, Math.PI / 2, 0]} scale={0.069}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_1.geometry}
          onPointerDown={(e) => {
            e.stopPropagation()
            navigate_game("/game")
            document.body.style.cursor = "default"
          }}
          onPointerOver={(e) => {
            e.stopPropagation()
            setHovered_game(true)
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            setHovered_game(false)
            document.body.style.cursor = "default"
          }}
        >
          <meshStandardMaterial
            color={0xffffff}
            metalness={0.5}
            roughness={0.4}

            emissive={hovered_game ? 0xc9a0ff : 0x000000}
            emissiveIntensity={hovered_game ? 0.3 : 0}
          />
        </mesh>
        <mesh
          ref={panelOutlineRef}
          geometry={nodes.control_panel_1.geometry}
          position={[0, 0, 0]}
          scale={1.03}
          renderOrder={999}
        >
          <meshBasicMaterial
            color={0xffffff}
            transparent
            opacity={0.5}
            depthTest={false}
            side={THREE.BackSide}
          />
        </mesh>

        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_2.geometry}
          material={materials['main purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_3.geometry}
          material={materials['grey purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_4.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_5.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_6.geometry}
          material={materials['light yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_7.geometry}
          material={materials['grey blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_8.geometry}
          material={materials['dark yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_9.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_10.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_11.geometry}
          material={materials['dark white pp']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control_panel_12.geometry}
          material={materials['detail purple']}
        />
      </group>
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
      <group position={[13.744, 10.415, 0]} scale={[21.149, 9.139, 19.16]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials['detail purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials['main purple']}
        />
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.left_structure.geometry}
          position={[9.504, 9.689, -12.149]}
          scale={7.242}
          onPointerDown={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "default"
            navigate_memory("/archives")
          }}
          onPointerOver={() => {
            document.body.style.cursor = "pointer"
            setHovered_memory(true)
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default"
            setHovered_memory(false)
          }}
        >
          <meshStandardMaterial
            color={0xffffff}
            metalness={1}
            roughness={1}
            emissive={hovered_memory ? 0xc9a0ff : 0x000000}
            emissiveIntensity={hovered_memory ? 0.3 : 0}
          />
        </mesh>
        <mesh
          ref={leftOutlineRef}
          geometry={nodes.left_structure.geometry}
          position={[9.504, 9.689, -12.149]}
          scale={7.27}
          renderOrder={999}
        >
          <meshBasicMaterial
            color={0xffffff}
            transparent
            opacity={0.5}
            depthTest={false}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials['main purple']}
        position={[8.721, 1.36, -15.398]}
        rotation={[0, 0, -0.201]}
        scale={-9.543}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['detail purple']}
        position={[8.721, 1.12, -15.398]}
        rotation={[0, 0, -0.201]}
        scale={-9.543}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials['main purple']}
        position={[8.721, -0.048, -15.398]}
        rotation={[0, 0, -0.201]}
        scale={-9.543}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials['main purple']}
        position={[8.721, -1.229, -15.398]}
        rotation={[0, 0, -0.201]}
        scale={-9.543}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve.geometry}
        material={materials['detail purple']}
        position={[-0.18, 4.174, -13.442]}
        rotation={[1.651, -0.008, -1.669]}
        scale={1.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve001.geometry}
        material={materials['detail purple']}
        position={[11.756, 10.205, -6.786]}
        rotation={[-2.85, 0.574, 0.598]}
        scale={0.902}
      />
      <group position={[25.365, 3.292, -4.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['main purple']}
        />
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
        geometry={nodes['Part_Studio_1_-_book'].geometry}
        material={materials['white purple']}
        position={[17.706, 4.12, -11.867]}
        rotation={[0, 0.588, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book001'].geometry}
        material={materials['white purple']}
        position={[17.526, 4.152, -11.729]}
        rotation={[0, 0.588, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book002'].geometry}
        material={materials['white purple']}
        position={[17.919, 4.152, -11.95]}
        rotation={[0, 0.588, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book003'].geometry}
        material={materials['white purple']}
        position={[18.099, 4.12, -12.088]}
        rotation={[0, 0.588, 0]}
        scale={0.156}
      />
      <group position={[17.344, 4.152, -11.427]} rotation={[0.018, 0.521, -0.125]} scale={0.156}>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book005'].geometry}
        material={materials['white purple']}
        position={[20.499, 5.33, -13.419]}
        rotation={[0, 0.274, -0.297]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book006'].geometry}
        material={materials['white purple']}
        position={[18.89, 4.119, -12.872]}
        rotation={[0, 0.222, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book007'].geometry}
        material={materials['white purple']}
        position={[18.679, 4.15, -12.738]}
        rotation={[0, 0.239, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book008'].geometry}
        material={materials['white purple']}
        position={[19.318, 4.153, -13.172]}
        rotation={[0, 0.222, 0.384]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book009'].geometry}
        material={materials['white purple']}
        position={[20.149, 7.519, -12.896]}
        rotation={[0, 0.082, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book010'].geometry}
        material={materials['white purple']}
        position={[20.663, 7.511, -12.991]}
        rotation={[0, 0.082, Math.PI / 10]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book011'].geometry}
        material={materials['white purple']}
        position={[22.767, 2.48, -12.997]}
        rotation={[0, 0.03, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book012'].geometry}
        material={materials['white purple']}
        position={[22.497, 2.512, -12.87]}
        rotation={[0, 0.03, 0]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book013'].geometry}
        material={materials['white purple']}
        position={[21.878, 2.512, -13.074]}
        rotation={[0, -0.04, -0.105]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_book014'].geometry}
        material={materials['white purple']}
        position={[22.211, 2.48, -13.017]}
        rotation={[0, -0.005, 0]}
        scale={0.156}
      />
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
        geometry={nodes.Cube013.geometry}
        material={materials['main purple']}
        position={[-9.956, 1.099, 9.23]}
        rotation={[0.016, 0.298, 0.048]}
        scale={[0.578, 1, 0.64]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.Material}
        position={[-7.988, 0.321, -13.293]}
        rotation={[0, 1.306, 0]}
        scale={[1, 0.693, 3.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['dark pink']}
        position={[-4.671, 0.321, -10.657]}
        rotation={[0, 0.475, 0]}
        scale={[1, 0.693, 3.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['grey blue']}
        position={[-4.798, 0.798, -13.959]}
        rotation={[-0.052, 0.837, -0.389]}
        scale={[0.68, 1, 2.267]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials['detail purple']}
        position={[3.384, 9.545, -13.442]}
        rotation={[1.65, -0.012, -1.715]}
        scale={1.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve005.geometry}
        material={materials['main purple']}
        position={[-0.18, 4.174, -13.442]}
        rotation={[1.651, -0.008, -1.669]}
        scale={1.352}
      />
      <group position={[11.805, 10.186, -6.741]} rotation={[-1.764, -0.767, 2.397]} scale={0.171}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials['neon purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials['grey blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_3.geometry}
          material={materials.red}
        />
      </group>
      <group position={[10.227, 8.46, -7.768]} rotation={[-1.432, 0.186, 2.791]} scale={0.171}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials['dark pruple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_3.geometry}
          material={materials['grey blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve006.geometry}
        material={materials['detail purple']}
        position={[10.207, 8.523, -7.791]}
        rotation={[3.118, 0.308, 1.701]}
        scale={0.902}
      />
      <group position={[11.291, 6.451, -7.453]} rotation={[-1.615, -0.569, 2.976]} scale={0.131}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials['neon purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
          material={materials['dark blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve007.geometry}
        material={materials['detail purple']}
        position={[11.245, 6.47, -7.472]}
        rotation={[3.097, 0.177, 0.912]}
        scale={0.689}
      />
      <group position={[11.267, 8.192, -7.249]} rotation={[-1.766, -0.887, 2.766]} scale={0.239}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials['dark pruple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials['dark blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve008.geometry}
        material={materials['detail purple']}
        position={[11.182, 8.199, -7.295]}
        rotation={[-3.113, 0.3, 0.571]}
        scale={1.26}
      />
      <group position={[7.828, 3.203, -8.44]} rotation={[-1.67, -0.001, 2.733]} scale={0.179}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials['dark purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_2.geometry}
          material={materials['neon purple']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_3.geometry}
          material={materials['grey blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve009.geometry}
        material={materials['detail purple']}
        position={[7.798, 3.256, -8.479]}
        rotation={[2.94, 0.391, 1.513]}
        scale={0.946}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[2.958, 7.305, -20.376]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={nodes.Icosphere001.material}
        position={[2.607, 7.305, -20.376]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={nodes.Icosphere002.material}
        position={[2.771, 7.305, -20.376]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={nodes.Icosphere003.material}
        position={[3.074, 7.305, -20.376]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={nodes.Icosphere004.material}
        position={[3.395, 7.305, -20.376]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={nodes.Icosphere005.material}
        position={[4.068, 7.225, -14.888]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={nodes.Icosphere006.material}
        position={[4.315, 7.209, -14.145]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={nodes.Icosphere007.material}
        position={[4.519, 7.193, -13.368]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={nodes.Icosphere008.material}
        position={[5.711, 7.177, -11.416]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={nodes.Icosphere009.material}
        position={[6.161, 7.161, -10.843]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere010.geometry}
        material={nodes.Icosphere010.material}
        position={[6.787, 7.145, -10.43]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere011.geometry}
        material={nodes.Icosphere011.material}
        position={[7.341, 7.129, -9.898]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere012.geometry}
        material={nodes.Icosphere012.material}
        position={[8.541, 7.113, -8.989]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere013.geometry}
        material={nodes.Icosphere013.material}
        position={[7.947, 7.097, -9.428]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere014.geometry}
        material={nodes.Icosphere014.material}
        position={[5.306, 7.193, -11.964]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere015.geometry}
        material={nodes.Icosphere015.material}
        position={[4.909, 7.193, -12.659]}
        rotation={[1.72, -1.384, 1.7]}
        scale={[0.408, 0.388, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['shiny main pruple']}
        position={[2.593, 1.178, -0.131]}
        scale={[1.233, 0.34, 10.095]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Part_Studio_1_-_Part_5_(1)001'].geometry}
        material={nodes['Part_Studio_1_-_Part_5_(1)001'].material}
        position={[5.974, 0.631, -1.046]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[241.197, 317.487, 241.197]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Assembly_2_(1)'].geometry}
        material={
          new THREE.MeshStandardMaterial({
            
            color: "white",
            emissive: hovered_video ? new THREE.Color("#a855f7") : new THREE.Color("black"),
            emissiveIntensity: hovered_video ? 1.5 : 0,
          })
        }
        onPointerDown={(e) => {
          e.stopPropagation()
          navigate_video("/replay")
          document.body.style.cursor = "default"
        }}
        onPointerOver={() => {
          setHovered_video(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          setHovered_video(false)
          document.body.style.cursor = "default"
        }}
        position={[8.928, 4.042, -1.054]}
        scale={54.583}
      />
    </group>
  )
}

useGLTF.preload('/inside.glb')
