"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Text } from "@react-three/drei";
import * as THREE from "three";

// Helper for lerp
const lerp = THREE.MathUtils.lerp;

// ── 3D Bar Item Component ──
interface BarItemProps {
  position: [number, number, number];
  height: number;
  color: string;
  label: string;
}

function BarItem({ position, height, color, label }: BarItemProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.y = lerp(meshRef.current.scale.y, height, 0.1);
      meshRef.current.position.y = meshRef.current.scale.y / 2;
    }
  });

  return (
    <group position={position}>
      {/* 3D Bar Block */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Text Label above bar */}
      <group position={[0, height + 0.3, 0]}>
        <Text
          color="#FFFFFF"
          fontSize={0.2}
          font="/fonts/GeistMono-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </group>
  );
}

// ── Bar Chart Group Component ──
interface BarChartGroupProps {
  revenue: number[];
  expense: number[];
}

function BarChartGroup({ revenue, expense }: BarChartGroupProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(elapsed * 0.1) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Revenue Bars (Cyan) */}
      {revenue.map((val, idx) => (
        <BarItem
          key={`rev-${idx}`}
          position={[-2.2 + idx * 1.5, 0, -0.4]}
          height={(val / 100) * 3}
          color="#00F2FF"
          label={`$${val}k`}
        />
      ))}

      {/* Expense Bars (Orange) */}
      {expense.map((val, idx) => (
        <BarItem
          key={`exp-${idx}`}
          position={[-1.7 + idx * 1.5, 0, 0.4]}
          height={(val / 100) * 3}
          color="#F97316"
          label={`$${val}k`}
        />
      ))}
    </group>
  );
}

// ── Revenue Scene Component ──
interface RevenueSceneProps {
  revenue: number[];
  expense: number[];
}

function RevenueScene({ revenue, expense }: RevenueSceneProps) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-5, 5, -5]} intensity={1} color="#00F2FF" />
      <BarChartGroup revenue={revenue} expense={expense} />
      {/* 3D Grid Floor */}
      <group position={[0, -1, 0]}>
        <Grid
          infiniteGrid
          fadeDistance={12}
          fadeStrength={5}
          cellSize={0.5}
          sectionSize={2}
          sectionColor="#00F2FF"
          cellColor="#0F172A"
          sectionThickness={1}
        />
      </group>
    </>
  );
}

export function RevenueExpenseChart() {
  const [revenue, setRevenue] = useState([75, 85, 95, 110]);
  const [expense, setExpense] = useState([45, 50, 48, 55]);

  const runSimulation = () => {
    setRevenue(Array.from({ length: 4 }, () => Math.floor(Math.random() * 50 + 60)));
    setExpense(Array.from({ length: 4 }, () => Math.floor(Math.random() * 30 + 35)));
  };

  return (
    <div className="w-full neo-card bg-white overflow-hidden flex flex-col md:flex-row h-[500px]">
      <div className="w-full md:w-72 bg-slate-900 p-6 flex flex-col justify-between border-r border-slate-800">
        <div>
          <h3 className="text-white font-black text-sm tracking-tight mb-2">
            3D P&L INTELLIGENCE
          </h3>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">
            Real-time tracking of operational expenses vs. total revenue streams.
          </p>
        </div>

        <div className="space-y-4 my-6">
          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
              Net Profit (MoM)
            </span>
            <div className="text-2xl font-mono font-black text-emerald-400 mt-1">
              +48.3% Margin
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
              System Integrity
            </span>
            <div className="text-xs font-black text-cyan-400 uppercase mt-1 tracking-wider">
              100% BALANCED
            </div>
          </div>
        </div>

        <button
          onClick={runSimulation}
          className="w-full py-3 rounded-xl bg-cyan-500 text-white font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          Simulate Next Quarter
        </button>
      </div>

      <div className="flex-1 relative bg-slate-950">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 6], fov: 40 }}>
          <RevenueScene revenue={revenue} expense={expense} />
        </Canvas>
        <div className="absolute top-6 left-6 pointer-events-none">
          <div className="text-white font-mono text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">
            SEC.TERM // FINANCE_VOLATILITY<br />
            BAR REPRESENTS MONTHLY RUNRATE
          </div>
        </div>
      </div>
    </div>
  );
}
