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

function Shop() {
  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
      <group position={[-1.35, -0.15, 0]}>
        <mesh position={[0, 0.05, 0]} castShadow>
          <boxGeometry args={[1.35, 1.15, 1.05]} />
          <meshStandardMaterial
            color="#0c3d2b"
            metalness={0.35}
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0, 0.78, 0]} rotation={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.55, 0.12, 1.2]} />
          <GoldMaterial />
        </mesh>
        <mesh position={[0, 0.92, 0]} rotation={[0.15, 0, 0]}>
          <boxGeometry args={[1.7, 0.08, 1.35]} />
          <GoldMaterial emissive={0.4} />
        </mesh>
        <mesh position={[0, -0.05, 0.53]}>
          <planeGeometry args={[0.55, 0.7]} />
          <meshStandardMaterial
            color="#e0c36a"
            emissive="#e0c36a"
            emissiveIntensity={0.35}
            transparent
            opacity={0.55}
          />
        </mesh>
        <mesh position={[-0.38, 0.28, 0.53]}>
          <planeGeometry args={[0.28, 0.28]} />
          <meshStandardMaterial color="#f4ead6" emissive="#f4ead6" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[0.38, 0.28, 0.53]}>
          <planeGeometry args={[0.28, 0.28]} />
          <meshStandardMaterial color="#f4ead6" emissive="#f4ead6" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Phone() {
  return (
    <Float speed={1.8} rotationIntensity={0.45} floatIntensity={0.9}>
      <group position={[1.45, 0.15, 0.4]} rotation={[-0.2, -0.45, -0.12]}>
        <mesh castShadow>
          <boxGeometry args={[0.72, 1.42, 0.08]} />
          <meshStandardMaterial color="#0a1f18" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.62, 1.28]} />
          <meshStandardMaterial
            color="#0f5138"
            emissive="#01411c"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh position={[0, 0.35, 0.05]}>
          <circleGeometry args={[0.12, 32]} />
          <meshStandardMaterial
            color="#25d366"
            emissive="#25d366"
            emissiveIntensity={0.8}
          />
        </mesh>
        <mesh position={[0, 0.02, 0.05]}>
          <boxGeometry args={[0.38, 0.08, 0.01]} />
          <GoldMaterial emissive={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function Crystal() {
  return (
    <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.2}>
      <mesh position={[0.05, 0.85, -0.2]}>
        <icosahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color="#f8e7b0"
          metalness={1}
          roughness={0.12}
          emissive="#e0c36a"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.12;
    ref.current.rotation.x += d * 0.04;
  });
  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2.4, 0.2, 0.3]}>
        <torusGeometry args={[2.15, 0.012, 16, 120]} />
        <GoldMaterial emissive={0.35} />
      </mesh>
      <mesh rotation={[0.4, 0.6, 0.1]}>
        <torusGeometry args={[2.55, 0.008, 12, 100]} />
        <meshBasicMaterial color="#e0c36a" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Orbits() {
  const ref = useRef<THREE.Group>(null);
  const colors = ["#25d366", "#e0c36a", "#1877f2", "#ff0050", "#ff0000"];
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.35;
  });
  return (
    <group ref={ref}>
      {colors.map((c, i) => {
        const a = (i / colors.length) * Math.PI * 2;
        return (
          <mesh key={c} position={[Math.cos(a) * 2.05, Math.sin(a * 1.4) * 0.35, Math.sin(a) * 2.05]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.7} />
          </mesh>
        );
      })}
    </group>
  );
}

function CameraRig() {
  const vec = useMemo(() => new THREE.Vector3(), []);
  useFrame((state) => {
    const x = state.pointer.x * 0.55;
    const y = state.pointer.y * 0.3;
    state.camera.position.lerp(vec.set(x, 0.35 + y, 6.1), 0.045);
    state.camera.lookAt(0, 0.15, 0);
  });
  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#03150f"]} />
      <fog attach="fog" args={["#03150f", 7, 16]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} color="#fff4cc" />
      <pointLight position={[-3, 2, 2]} intensity={18} color="#0f5138" distance={12} />
      <pointLight position={[2, 1, 3]} intensity={10} color="#e0c36a" distance={10} />
      <Rings />
      <Shop />
      <Phone />
      <Crystal />
      <Orbits />
      <Sparkles count={90} scale={[8, 4, 6]} size={2.4} speed={0.4} color="#e0c36a" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.35, 0]}>
        <circleGeometry args={[6, 48]} />
        <meshStandardMaterial color="#041910" metalness={0.6} roughness={0.8} />
      </mesh>
      <CameraRig />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.35, 6.1], fov: 40 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <Scene />
    </Canvas>
  );
}
