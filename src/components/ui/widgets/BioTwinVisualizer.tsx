"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Grid,
  Float,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Activity, Shield, Zap } from "lucide-react";
import * as THREE from "three";

// Helper for lerp
const lerp = THREE.MathUtils.lerp;

// ── Bio-Digital Twin Skeletal Component ──
interface BioMuscleProps {
  position: [number, number, number];
  args: [number, number, number];
  muscle: number;
  fat: number;
  color?: string;
  isTorso?: boolean;
}

function BioMuscle({
  position,
  args,
  muscle,
  fat,
  color = "#94A3B8",
}: BioMuscleProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const randomOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime() + randomOffset;
    const muscleScale = 1 + (muscle / 100) * 0.6;
    const fatScale = 1 + (fat / 100) * 0.5;
    const breathing = 1 + Math.sin(elapsed * 1.2) * 0.008;
    const microRotation = Math.sin(elapsed * 0.8) * 0.012;

    if (meshRef.current) {
      meshRef.current.scale.x = lerp(
        meshRef.current.scale.x,
        args[0] * muscleScale * fatScale * breathing,
        0.1
      );
      meshRef.current.scale.y = lerp(
        meshRef.current.scale.y,
        args[1] * (1 + muscle / 500) * breathing,
        0.1
      );
      meshRef.current.scale.z = lerp(
        meshRef.current.scale.z,
        args[2] * muscleScale * fatScale * breathing,
        0.1
      );

      meshRef.current.rotation.z = lerp(meshRef.current.rotation.z, microRotation, 0.05);
      meshRef.current.rotation.x = lerp(
        meshRef.current.rotation.x,
        microRotation * 0.4,
        0.05
      );

      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.roughness = lerp(mat.roughness, 0.5 - muscle / 200, 0.1);
        mat.metalness = lerp(mat.metalness, 0.5 + muscle / 200, 0.1);
        const intensity = (muscle / 100) * 3.5;
        mat.emissiveIntensity = lerp(
          mat.emissiveIntensity,
          intensity * (0.8 + Math.sin(elapsed * 2) * 0.2),
          0.08
        );
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive="#00F2FF"
        emissiveIntensity={0}
      />
    </mesh>
  );
}

interface BioGroupProps {
  muscle: number;
  fat: number;
}

function BioGroup({ muscle, fat }: BioGroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  const scannerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(elapsed * 0.5) * 0.1;
    }
    if (scannerRef.current) {
      scannerRef.current.position.y = 1.5 + Math.sin(elapsed * 1.5) * 2;
      scannerRef.current.rotation.x = Math.PI / 2 + Math.sin(elapsed * 2) * 0.1;
      const mat = scannerRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 5 + Math.sin(elapsed * 10) * 2;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#0F172A" roughness={0.1} metalness={1} />
      </mesh>

      {/* Torso */}
      <BioMuscle
        position={[0, 1.8, 0]}
        args={[0.8, 1.2, 0.4]}
        muscle={muscle}
        fat={fat}
        isTorso={true}
      />

      {/* Left Arm */}
      <BioMuscle
        position={[-0.7, 1.8, 0]}
        args={[0.25, 1, 0.25]}
        muscle={muscle * 1.2}
        fat={fat * 0.5}
      />

      {/* Right Arm */}
      <BioMuscle
        position={[0.7, 1.8, 0]}
        args={[0.25, 1, 0.25]}
        muscle={muscle * 1.2}
        fat={fat * 0.5}
      />

      {/* Left Leg */}
      <BioMuscle
        position={[-0.3, 0.5, 0]}
        args={[0.3, 1.4, 0.3]}
        muscle={muscle}
        fat={fat * 0.8}
      />

      {/* Right Leg */}
      <BioMuscle
        position={[0.3, 0.5, 0]}
        args={[0.3, 1.4, 0.3]}
        muscle={muscle}
        fat={fat * 0.8}
      />

      {/* Laser scan ring */}
      <mesh ref={scannerRef} position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#00F2FF"
          emissive="#00F2FF"
          emissiveIntensity={5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Grid Floor */}
      <group position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <Grid
          infiniteGrid
          fadeDistance={20}
          fadeStrength={5}
          cellSize={1}
          sectionSize={5}
          sectionColor="#00F2FF"
          cellColor="#0F172A"
          sectionThickness={1}
        />
      </group>
    </group>
  );
}

export function BioTwinVisualizer() {
  const [muscle, setMuscle] = useState(30);
  const [fat, setFat] = useState(20);
  const [viewMode, setViewMode] = useState<"visual" | "stats">("visual");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInitialized(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto neo-card bg-white overflow-hidden flex flex-col md:flex-row min-h-[600px] md:h-[600px] relative">
      {/* Loading overlay */}
      <AnimatePresence>
        {!initialized && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center gap-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full border-2 border-cyan-500/20 border-t-cyan-500 shadow-[0_0_30px_rgba(0,242,255,0.2)]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Activity className="text-cyan-500 animate-pulse" size={32} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-black text-sm tracking-[0.3em] uppercase mb-2">
                Initializing Bio-Twin
              </h3>
              <div className="flex items-center justify-center gap-1">
                {[...Array(3)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity, delay: idx * 0.2 }}
                    className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control panel */}
      <div className="w-full md:w-80 bg-slate-900 p-6 flex flex-col border-r border-slate-800 order-2 md:order-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <Activity size={20} />
          </div>
          <div>
            <h3 className="text-white font-black text-sm tracking-tight">
              BIO-TWIN V1.0
            </h3>
            <p className="text-cyan-500 text-[10px] font-bold uppercase tracking-widest">
              Live Sync Active
            </p>
          </div>
        </div>

        <div className="space-y-8 flex-1">
          {/* Muscle Mass Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Zap size={14} className="text-cyan-500" /> Muscle Mass
              </label>
              <span className="text-cyan-500 font-mono text-lg font-black">
                {muscle}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={muscle}
              onChange={(e) => setMuscle(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase">
              <span>Lean</span>
              <span>Hypertrophy</span>
            </div>
          </div>

          {/* Body Fat Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Shield size={14} className="text-orange-500" /> Body Fat
              </label>
              <span className="text-orange-500 font-mono text-lg font-black">
                {fat}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={fat}
              onChange={(e) => setFat(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase">
              <span>Shredded</span>
              <span>Bulk</span>
            </div>
          </div>

          {/* AI Insight Box */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-cyan-400">
              <Info size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                AI Insight
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              "Based on your current trajectory, increasing protein intake by 15g will accelerate muscle density in the upper torso by 4% over the next 14 days."
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-auto pt-6 border-t border-slate-800">
          <button className="w-full py-3 rounded-xl bg-cyan-500 text-white font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            Sync to Bio-Digital Twin
          </button>
        </div>
      </div>

      {/* 3D Visualizer Canvas */}
      <div className="flex-1 relative bg-slate-50 h-[400px] md:h-full order-1 md:order-2">
        <div className="absolute top-6 right-6 z-10 flex gap-2">
          <button
            onClick={() => setViewMode("visual")}
            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
              viewMode === "visual"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-400 border border-slate-200"
            }`}
          >
            Visualizer
          </button>
          <button
            onClick={() => setViewMode("stats")}
            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
              viewMode === "stats"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-400 border border-slate-200"
            }`}
          >
            Composition
          </button>
        </div>

        <div className="absolute bottom-6 left-6 z-10">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Subject ID
            </span>
            <span className="text-sm font-black text-slate-900">
              CLLERO_USER_8829
            </span>
          </div>
        </div>

        <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 2, 8], fov: 35 }}>
          <OrbitControls
            makeDefault
            enableDamping
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            enableZoom={false}
          />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F2FF" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#FF6B00" />
          <React.Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <BioGroup muscle={muscle} fat={fat} />
            </Float>
            <Environment preset="city" />
            <ContactShadows
              position={[0, -0.5, 0]}
              opacity={0.4}
              scale={10}
              blur={2}
              far={4}
            />
          </React.Suspense>
        </Canvas>

        {/* Stats overlay */}
        <AnimatePresence>
          {viewMode === "stats" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-cyan-500/5 backdrop-blur-[2px] flex items-center justify-center pointer-events-none"
            >
              <div className="neo-card bg-white/90 p-6 w-72 pointer-events-auto shadow-xl">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">
                  Composition Analysis
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                      <span className="text-slate-400">Skeletal Muscle</span>
                      <span className="text-cyan-500">34.2 kg</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500" style={{ width: "70%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                      <span className="text-slate-400">Visceral Fat</span>
                      <span className="text-orange-500">Level 4</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: "40%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
