"use client"
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Text, Environment, Float } from "@react-three/drei";
import Model from './Model';
import { Oval } from 'react-loader-spinner'



function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group>

    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
    <Float>
    <Text  position={[0, 2, -1]} fontSize={3.5} color="white" anchorX="center" anchorY="middle">

        CREATE

    </Text>
    </Float>
    </group>

  )
}
export const Common = ({ color }) => (
  <Suspense fallback={null}>
  
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
  </Suspense>
)
export default function Scene({ color, setter }) {
  
  return (

    <>
    
  <Canvas>
        <Model color={color} setter={setter} />

      <directionalLight intensity={20} position={[0, 10, 3]}/>
      <Common color={color} />
      <Environment preset='city' />

  </Canvas>

  </>
  )
}
