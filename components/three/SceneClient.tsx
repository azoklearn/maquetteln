'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Scene = dynamic(() => import('./Scene').then((m) => ({ default: m.Scene })), { ssr: false });

export function SceneClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="absolute inset-0 z-0 bg-black w-full h-full min-h-[100vh]" />;
  }
  return <Scene />;
}
