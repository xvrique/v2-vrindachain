import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

function StinkSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      {/* Small, dense core */}
      <Sphere ref={meshRef} args={[0.8, 64, 64]}>
        <MeshDistortMaterial
          color="#111"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={1}
          emissive="#ff9933"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Sophisticated Rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.005, 16, 100]} />
        <meshStandardMaterial color="#ff9933" emissive="#ff9933" emissiveIntensity={2} transparent opacity={0.5} />
      </mesh>
      
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.005, 16, 100]} />
        <meshStandardMaterial color="#138808" emissive="#138808" emissiveIntensity={2} transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[Math.PI / 2, Math.PI / 6, 0]}>
        <torusGeometry args={[2.5, 0.002, 16, 100]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={1} transparent opacity={0.2} />
      </mesh>
    </Float>
  )
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff9933" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#138808" />
        
        <StinkSphere />
        
        <Stars radius={100} depth={50} count={3000} factor={2} saturation={0} fade speed={0.5} />
        <fog attach="fog" args={['#000', 5, 20]} />
      </Canvas>
    </div>
  )
}
