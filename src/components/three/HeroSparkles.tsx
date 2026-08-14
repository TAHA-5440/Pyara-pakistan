"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

export default function HeroSparkles() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Sparkles
        count={85}
        scale={[16, 9, 4]}
        size={1.35}
        speed={0.55}
        opacity={0.9}
        color="#e0c36a"
      />
      <group position={[3.4, 0.1, 0]}>
        <Sparkles
          count={55}
          scale={[8, 7, 3]}
          size={1.5}
          speed={0.45}
          opacity={1}
          color="#f4ead6"
        />
      </group>
    </Canvas>
  );
}
