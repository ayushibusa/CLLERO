"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Grid, Text, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Helper for lerp
const lerp = THREE.MathUtils.lerp;

// ── Chart Line Component ──
interface ChartLineProps {
  data: number[];
  color: string;
}

function ChartLine({ data, color }: ChartLineProps) {
  const lineRef = useRef<any>(null);
  const pointsRef = useRef<THREE.Mesh[]>([]);
  const points = useMemo(() => {
    return data.map((val, idx) => {
      const x = -3 + (idx / (data.length - 1)) * 6;
      const y = -1.5 + (val / 100) * 3;
      return new THREE.Vector3(x, y, 0);
    });
  }, [data]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    pointsRef.current.forEach((mesh, idx) => {
      if (mesh) {
        const offset = Math.sin(elapsed * 2 + idx * 0.5) * 0.05;
        mesh.position.y = points[idx].y + offset;
      }
    });

    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position.array;
      pointsRef.current.forEach((mesh, idx) => {
        if (mesh) {
          positions[idx * 3 + 1] = mesh.position.y;
        }
      });
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* 3D Line */}
      <Line
        ref={lineRef}
        points={points}
        color={color}
        lineWidth={3}
        dashed={false}
      />
      {/* Interactive Node Bulbs */}
      {points.map((pt, idx) => (
        <mesh
          key={idx}
          ref={(el: any) => {
            pointsRef.current[idx] = el;
          }}
          position={pt}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

// ── Star Background Component ──
function StarBackground() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const arr = new Float32Array(300);
    for (let i = 0; i < 100; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 8 + Math.random() * 4;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3}>
        <PointMaterial
          transparent
          color="#00F2FF"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// ── Chart Scene Component ──
interface ChartSceneProps {
  data: number[];
  color: string;
}

function ChartScene({ data, color }: ChartSceneProps) {
  const { camera } = useThree();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    camera.position.x = Math.sin(elapsed * 0.15) * 1.2;
    camera.position.y = 2 + Math.cos(elapsed * 0.15) * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F2FF" />
      <ChartLine data={data} color={color} />
      <StarBackground />
      {/* 3D Grid floor */}
      <group position={[0, -1.8, 0]} rotation={[0, 0, 0]}>
        <Grid
          infiniteGrid
          fadeDistance={15}
          fadeStrength={4}
          cellSize={0.5}
          sectionSize={2.5}
          sectionColor="#00F2FF"
          cellColor="#0F172A"
          sectionThickness={1}
        />
      </group>
    </>
  );
}

export function RetentionVelocityChart() {
  const [data, setData] = useState([85, 82, 78, 65, 52, 40]);
  const [color, setColor] = useState("#00F2FF");

  const runSimulation = () => {
    const randomData = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 60 + 30)
    );
    setData(randomData);
    setColor(Math.random() > 0.5 ? "#00F2FF" : "#F97316");
  };

  return (
    <div className="w-full neo-card bg-white overflow-hidden flex flex-col md:flex-row h-[500px]">
      <div className="w-full md:w-72 bg-slate-900 p-6 flex flex-col justify-between border-r border-slate-800">
        <div>
          <h3 className="text-white font-black text-sm tracking-tight mb-2">
            RETENTION VELOCITY
          </h3>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">
            Predictive modeling of member drop-off thresholds. Processed at terminal core.
          </p>
        </div>

        <div className="space-y-4 my-6">
          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
              Mean Probability
            </span>
            <div className="text-2xl font-mono font-black text-cyan-400 mt-1">
              42.8% Churn
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
              Alert Status
            </span>
            <div className="text-xs font-black text-orange-500 uppercase mt-1 tracking-wider animate-pulse">
              CRITICAL THRESHOLD
            </div>
          </div>
        </div>

        <button
          onClick={runSimulation}
          className="w-full py-3 rounded-xl bg-cyan-500 text-white font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          Recalculate Model
        </button>
      </div>

      <div className="flex-1 relative bg-slate-950">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 6], fov: 45 }}>
          <ChartScene data={data} color={color} />
        </Canvas>
        <div className="absolute top-6 left-6 pointer-events-none">
          <div className="text-white font-mono text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">
            SYS.TERM // RET_VEL_X_CHART<br />
            BASED ON 14-DAY SLIDING Telemetry
          </div>
        </div>
      </div>
    </div>
  );
}
