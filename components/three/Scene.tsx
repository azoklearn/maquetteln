'use client';

import { Canvas } from '@react-three/fiber';
import { Globe } from './Globe';
import { GoldParticles } from './GoldParticles';

export function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-black w-full h-full min-h-[100vh]">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ alpha: false, antialias: true }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 5]} intensity={1.2} color="#c9a962" />
        <pointLight position={[-2, 1, 3]} intensity={0.6} color="#e5d4a1" />
        <Globe />
        <GoldParticles />
      </Canvas>
    </div>
  );
}
