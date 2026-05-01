'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, TorusKnot, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedShapes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Lenta rotazione generale del gruppo
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Oggetto centrale complesso */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <TorusKnot args={[1, 0.3, 256, 32]} scale={1.2}>
                    <MeshDistortMaterial
                        color="#3b82f6"
                        distort={0.3}
                        speed={2}
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </TorusKnot>
            </Float>

            {/* Satelliti */}
            <Float speed={2} rotationIntensity={2} floatIntensity={3}>
                <Icosahedron args={[0.5, 0]} position={[3, 1.5, -2]}>
                    <meshPhysicalMaterial
                        color="#10b981"
                        roughness={0.2}
                        metalness={0.9}
                        wireframe
                    />
                </Icosahedron>
            </Float>
            
            <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
                <Icosahedron args={[0.4, 0]} position={[-3, -1.5, -1]}>
                    <meshPhysicalMaterial
                        color="#8b5cf6"
                        roughness={0.2}
                        metalness={0.9}
                        wireframe
                    />
                </Icosahedron>
            </Float>

            <Float speed={1} rotationIntensity={2.5} floatIntensity={4}>
                <Icosahedron args={[0.3, 0]} position={[0, -3, 1]}>
                    <meshPhysicalMaterial
                        color="#06b6d4"
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={1}
                    />
                </Icosahedron>
            </Float>
        </group>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
                <spotLight position={[-5, 5, -5]} intensity={2} color="#3b82f6" penumbra={1} />
                <pointLight position={[0, -5, 5]} intensity={2} color="#10b981" />
                
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <AnimatedShapes />
            </Canvas>
        </div>
    );
}
