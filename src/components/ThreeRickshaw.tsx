import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function RickshawModel() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      <Float speed={5} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 0.6, 1.5]} />
          <meshStandardMaterial color="#ffcc00" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Roof */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.1, 0.05, 1.6]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        
        {/* Wheels */}
        {[[-0.6, -0.3, 0.5], [0.6, -0.3, 0.5], [0, -0.3, -0.7]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        ))}
        
        {/* Glowing Headlight */}
        <mesh position={[0, -0.1, -0.8]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={5} />
          <pointLight color="#fff" intensity={2} distance={5} />
        </mesh>
      </Float>
    </group>
  )
}

export default function ThreeRickshaw() {
  return (
    <div className="w-full h-64 md:h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 2, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#138808" intensity={1} />
        
        <RickshawModel />
        
        <fog attach="fog" args={['#000', 5, 15]} />
      </Canvas>
    </div>
  )
}
