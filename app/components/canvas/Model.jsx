"use client"
import React, { useRef } from 'react'
import { useGLTF, Text, Float } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial } from "@react-three/drei";


export default function Model( { color, setter }) {
    const { nodes } = useGLTF("/torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
   
    
    useFrame( () => {
        torus.current.rotation.x += 0.02
    })

    return (
        <group scale={viewport.width / 3.75} >
           
            <mesh ref={torus} {...nodes.Torus002}>
            <MeshTransmissionMaterial color={color} thickness={0.3} roughness={0.3} transmission={1} ior={1.3} backside={true}/>

            </mesh>
        </group>
    )
}