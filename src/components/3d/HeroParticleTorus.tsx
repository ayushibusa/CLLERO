"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useInView } from "react-intersection-observer";

function TorusParticles({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const particleCount = 900; // Capped for high performance on all devices

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    const R = 3.2;
    const r = 1.0;

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const currentR = r * (0.5 + Math.random() * 0.5);

      const x = (R + currentR * Math.cos(v)) * Math.cos(u);
      const y = (R + currentR * Math.cos(v)) * Math.sin(u);
      const z = currentR * Math.sin(v);

      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, []);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  useFrame((state) => {
    if (!ref.current) return;

    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    if (scroll > 1600) return; // Pause updates when invisible

    if (prefersReducedMotion) {
      ref.current.rotation.x = 0.5;
      ref.current.rotation.y = 0.5;
      return;
    }

    const elapsedTime = state.clock.getElapsedTime();
    const targetX = mouse.current.y * 0.2 + elapsedTime * 0.04;
    const targetY = mouse.current.x * 0.2 + elapsedTime * 0.06;

    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.05);
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06B6D4"
          size={0.045}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Dumbbell({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate a procedural knurling pattern in a CanvasTexture on the fly
  const knurledTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#808080";
      ctx.fillRect(0, 0, 64, 64);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = -64; i < 64; i += 8) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 64, 64);
        ctx.moveTo(i + 64, 0);
        ctx.lineTo(i, 64);
      }
      ctx.stroke();
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 16);
    return texture;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    if (scroll > 1600) return; // Pause updates when completely scrolled out of view

    if (prefersReducedMotion) {
      groupRef.current.rotation.x = 0.4;
      groupRef.current.rotation.y = 0.5;
      groupRef.current.rotation.z = 0.2;
      return;
    }

    const time = state.clock.getElapsedTime();
    const r = Math.min(scroll / 800, 1); // 0 to 1 ratio as user scrolls past hero

    // Slow continuous rotation around Y, offset by scroll angle
    const spinSpeed = 0.2 * (1 - r * 0.65);
    const scrollAngleY = r * Math.PI * 0.45;

    groupRef.current.rotation.y = time * spinSpeed + scrollAngleY;
    // angled static tilt lerps into handoff resting pose on scroll
    groupRef.current.rotation.x = THREE.MathUtils.lerp(0.4, 0.22, r);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(0.5, 0.85, r);
  });

  return (
    <group ref={groupRef} scale={1.65}>
      {/* 1. Grip Bar: Brushed chrome/silver handle bar lying horizontally along X */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 1.1, 32]} />
        <meshPhysicalMaterial
          color="#E5E7EB" // Silver gray
          metalness={0.92}
          roughness={0.24}
          clearcoat={0.6}
          clearcoatRoughness={0.15}
          bumpMap={knurledTexture || undefined}
          bumpScale={0.012}
        />
      </mesh>

      {/* 2. Symmetrical Collars: Chrome rings stopping the weights */}
      <mesh position={[-0.59, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.20, 0.20, 0.08, 32]} />
        <meshPhysicalMaterial
          color="#D1D5DB"
          metalness={0.95}
          roughness={0.2}
          clearcoat={1.0}
        />
      </mesh>
      <mesh position={[0.59, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.20, 0.20, 0.08, 32]} />
        <meshPhysicalMaterial
          color="#D1D5DB"
          metalness={0.95}
          roughness={0.2}
          clearcoat={1.0}
        />
      </mesh>

      {/* 3. Weight Plates Stack (Anodized Cyan #00FFFF) */}
      {/* Inner Plates */}
      <mesh position={[-0.73, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.85, 0.85, 0.2, 48]} />
        <meshPhysicalMaterial
          color="#00FFFF"
          metalness={0.9}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          emissive="#00FFFF"
          emissiveIntensity={0.06}
        />
      </mesh>
      <mesh position={[0.73, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.85, 0.85, 0.2, 48]} />
        <meshPhysicalMaterial
          color="#00FFFF"
          metalness={0.9}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          emissive="#00FFFF"
          emissiveIntensity={0.06}
        />
      </mesh>

      {/* Middle Plates */}
      <mesh position={[-0.93, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.77, 0.77, 0.2, 48]} />
        <meshPhysicalMaterial
          color="#00FFFF"
          metalness={0.9}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          emissive="#00FFFF"
          emissiveIntensity={0.06}
        />
      </mesh>
      <mesh position={[0.93, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.77, 0.77, 0.2, 48]} />
        <meshPhysicalMaterial
          color="#00FFFF"
          metalness={0.9}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          emissive="#00FFFF"
          emissiveIntensity={0.06}
        />
      </mesh>

      {/* Outer Plates */}
      <mesh position={[-1.13, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.68, 0.68, 0.2, 48]} />
        <meshPhysicalMaterial
          color="#00FFFF"
          metalness={0.9}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          emissive="#00FFFF"
          emissiveIntensity={0.06}
        />
      </mesh>
      <mesh position={[1.13, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.68, 0.68, 0.2, 48]} />
        <meshPhysicalMaterial
          color="#00FFFF"
          metalness={0.9}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          emissive="#00FFFF"
          emissiveIntensity={0.06}
        />
      </mesh>

      {/* 4. End Lock Collars (Chrome silver) */}
      <mesh position={[-1.28, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.10, 32]} />
        <meshPhysicalMaterial
          color="#D1D5DB"
          metalness={0.95}
          roughness={0.2}
          clearcoat={1.0}
        />
      </mesh>
      <mesh position={[1.28, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.10, 32]} />
        <meshPhysicalMaterial
          color="#D1D5DB"
          metalness={0.95}
          roughness={0.2}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

function MovingKeyLights({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const lightRef1 = useRef<THREE.SpotLight>(null);
  const lightRef2 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (prefersReducedMotion) {
      if (lightRef1.current) lightRef1.current.position.set(5, 5, 5);
      if (lightRef2.current) lightRef2.current.position.set(-5, 3, 2);
      return;
    }

    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    if (scroll > 1600) return; // Pause updates when invisible

    const time = state.clock.getElapsedTime();
    
    // Light 1: Dramatic circular sweep path on SpotLight (White-mint highlight)
    if (lightRef1.current) {
      lightRef1.current.position.x = Math.sin(time * 1.3) * 6;
      lightRef1.current.position.y = Math.cos(time * 1.0) * 4 + 3;
      lightRef1.current.position.z = Math.cos(time * 1.3) * 6;
    }

    // Light 2: Inverse orbit point light sweep (Teal fill highlight)
    if (lightRef2.current) {
      lightRef2.current.position.x = Math.cos(time * 1.6) * 5;
      lightRef2.current.position.y = Math.sin(time * 1.2) * 3 + 1;
      lightRef2.current.position.z = Math.sin(time * 1.6) * 5;
    }
  });

  return (
    <group>
      {/* High-intensity primary light for sweeping reflections */}
      <spotLight
        ref={lightRef1}
        intensity={22}
        angle={0.65}
        penumbra={1}
        color="#F0FDFA" // Bright minty white
        castShadow
      />
      {/* Secondary accent light for cyan depth highlights */}
      <pointLight
        ref={lightRef2}
        intensity={12}
        distance={15}
        color="#00FFFF" // Cyan glow
      />
    </group>
  );
}

function CameraController({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  useFrame((state) => {
    if (prefersReducedMotion) return;

    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    if (scroll > 1600) return; // Pause updates when completely scrolled out of view

    const time = state.clock.getElapsedTime();
    const r = Math.min(scroll / 800, 1); // Lerp factor
    
    // Camera base coordinates + orbit drift
    const driftX = Math.sin(time * 0.22) * 0.35;
    const driftY = Math.cos(time * 0.18) * 0.2 + 0.15;
    const driftZ = 7.0 + Math.sin(time * 0.12) * 0.35;
    
    // Subtle mouse parallax movement
    const mouseX = mouse.current.x * 0.35;
    const mouseY = mouse.current.y * 0.25;
    
    // Coordinate Handoff Target:
    // Scroll zooms camera closer (lower Z) and shifts center to support stat cards
    const targetX = THREE.MathUtils.lerp(driftX + mouseX, -0.25, r);
    const targetY = THREE.MathUtils.lerp(driftY + mouseY, -0.35, r);
    const targetZ = THREE.MathUtils.lerp(driftZ, 5.9, r);
    
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    
    // Adapt focal target dynamically
    const lookX = THREE.MathUtils.lerp(0, -0.1, r);
    const lookY = THREE.MathUtils.lerp(0.1, -0.2, r);
    state.camera.lookAt(lookX, lookY, 0);
  });
  return null;
}

export default function HeroParticleTorus({ isHandoff = false }: { isHandoff?: boolean }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.02,
    triggerOnce: false,
  });

  useEffect(() => {
    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Detect WebGL support
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(support);
    } catch (e) {
      setHasWebGL(false);
    }

    // Detect mobile viewport (< 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Static Fallback layout if WebGL is missing or viewport is mobile width (and not in desktop-only fixed handoff mode)
  if ((!hasWebGL || (isMobile && !isHandoff)) && typeof window !== "undefined") {
    return (
      <div className="w-full h-full flex items-center justify-center relative select-none">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          {/* Glass background circle loader design */}
          <div className="absolute inset-0 rounded-full border border-primary/20 bg-white/40 backdrop-blur-md shadow-lg" />
          <img
            src="/dumbbell-fallback.png"
            alt="Adjustable Dumbbell"
            className="w-4/5 h-4/5 object-contain relative z-10 drop-shadow-[0_8px_24px_rgba(6,182,212,0.18)]"
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="w-full h-full relative select-none flex items-center justify-center">
      {/* 2D Fallback shown while canvas loads */}
      {!isHandoff && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] animate-pulse" />
            <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-primary/20 bg-primary/5 animate-spin [animation-duration:20s]" />
            <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-primary-light/30 animate-spin [animation-duration:12s] [animation-direction:reverse]" />
            <img
              src="/dumbbell-fallback.png"
              alt="Adjustable Dumbbell Preview"
              className="w-3/5 h-3/5 object-contain opacity-35 relative z-10"
            />
          </div>
        </div>
      )}

      {(inView || isHandoff) && (
        <div className="absolute inset-0 z-10">
          <Canvas
            camera={{ position: [0, 0, 7.0], fov: 55 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            {/* Soft global ambient light */}
            <ambientLight intensity={0.35} />
            
            {/* Teal rim light from back-left for realistic edges */}
            <directionalLight position={[-5, 5, -8]} intensity={4.5} color="#06B6D4" />
            
            {/* Front specular highlight light */}
            <directionalLight position={[0, 8, 2]} intensity={0.6} />
            
            {/* Moving key lights orbiting the model */}
            <MovingKeyLights prefersReducedMotion={prefersReducedMotion} />
            
            {/* Bottom-left fill bounce light */}
            <pointLight position={[-6, -6, -3]} intensity={1.2} color="#06B6D4" />
            
            {/* Background torus particle cloud */}
            <TorusParticles prefersReducedMotion={prefersReducedMotion} />
            
            {/* Dumbbell Model */}
            <Dumbbell prefersReducedMotion={prefersReducedMotion} />
            
            {/* Studio Environment map for realistic brushed steel & cyan reflections */}
            <Environment preset="studio" />
            
            {/* Camera drift and scroll tracking */}
            <CameraController prefersReducedMotion={prefersReducedMotion} />
          </Canvas>
        </div>
      )}
    </div>
  );
}
