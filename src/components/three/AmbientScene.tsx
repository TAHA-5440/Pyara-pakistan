"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SpinRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.y += d * 0.15;
      ref.current.rotation.x += d * 0.05;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.6, 0.012, 12, 96]} />
      <meshBasicMaterial color="#e0c36a" transparent opacity={0.45} />
    </mesh>
  );
}

export default function AmbientScene() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <SpinRing />
      <Sparkles count={50} scale={6} size={2} speed={0.35} color="#e0c36a" />
    </Canvas>
  );
}
