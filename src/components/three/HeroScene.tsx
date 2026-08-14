"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function GoldMaterial({ emissive = 0.25 }: { emissive?: number }) {
  return (
    <meshStandardMaterial
      color="#e0c36a"
      metalness={0.92}
      roughness={0.22}
      emissive="#8a6a1f"
      emissiveIntensity={emissive}
    />
  );
}

function Phone() {
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.85}>
      <group position={[2.05, 0.05, 0.6]} rotation={[-0.18, -0.42, -0.1]}>
        <mesh>
          <boxGeometry args={[0.62, 1.24, 0.07]} />
          <meshStandardMaterial color="#0a1f18" metalness={0.85} roughness={0.18} />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[0.52, 1.1]} />
          <meshStandardMaterial color="#0f5138" emissive="#01411c" emissiveIntensity={0.55} />
        </mesh>
        <mesh position={[0, 0.28, 0.045]}>
          <circleGeometry args={[0.1, 32]} />
          <meshStandardMaterial color="#25d366" emissive="#25d366" emissiveIntensity={0.85} />
        </mesh>
      </group>
    </Float>
  );
}

function Crystal() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.1}>
      <mesh position={[1.15, 0.95, 0.2]}>
        <icosahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial
          color="#f8e7b0"
          metalness={1}
          roughness={0.12}
          emissive="#e0c36a"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.1;
    ref.current.rotation.x += d * 0.03;
  });
  return (
    <group ref={ref} position={[1.4, 0.1, 0]}>
      <mesh rotation={[Math.PI / 2.5, 0.2, 0.25]}>
        <torusGeometry args={[1.7, 0.01, 16, 120]} />
        <GoldMaterial emissive={0.4} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const vec = useMemo(() => new THREE.Vector3(), []);
  useFrame((state) => {
    const x = state.pointer.x * 0.4;
    const y = state.pointer.y * 0.22;
    state.camera.position.lerp(vec.set(x, 0.2 + y, 5.6), 0.045);
    state.camera.lookAt(0.9, 0.1, 0);
  });
  return null;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 3]} intensity={1.1} color="#fff4cc" />
      <pointLight position={[2, 1, 3]} intensity={8} color="#e0c36a" distance={10} />
      <Rings />
      <Phone />
      <Crystal />
      <Sparkles count={70} scale={[10, 5, 4]} size={2.2} speed={0.35} color="#e0c36a" />
      <CameraRig />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.2, 5.6], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Scene />
    </Canvas>
  );
}
