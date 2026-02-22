'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import * as topojson from 'topojson-client';
import { geoPath, geoEquirectangular } from 'd3-geo';

const GOLD = new THREE.Color('#c9a962');
const LAND_URL = '/land-110m.json';

/** Texture de test : fond noir + grosses formes or bien visibles */
function createTestTexture(): THREE.CanvasTexture {
  const w = 1024;
  const h = 512;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#e5d4a1';
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, 180, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#c9a962';
  ctx.fillRect(w * 0.15, h * 0.15, w * 0.35, h * 0.4);
  ctx.fillRect(w * 0.55, h * 0.35, w * 0.3, h * 0.35);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createWorldTextureFromGeo(
  canvas: HTMLCanvasElement,
  land: GeoJSON.FeatureCollection | GeoJSON.Feature,
  onDone: (tex: THREE.CanvasTexture) => void
) {
  const w = 2048;
  const h = 1024;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, w, h);

  const projection = geoEquirectangular()
    .scale(w / (2 * Math.PI))
    .translate([w / 2, h / 2]);
  const path = geoPath(projection);

  const features: GeoJSON.Feature[] =
    land.type === 'FeatureCollection' && land.features
      ? land.features
      : land.type === 'Feature'
        ? [land as GeoJSON.Feature]
        : [];

  ctx.fillStyle = '#c9a962';
  let drawn = false;
  for (const f of features) {
    const d = path(f);
    if (d && typeof d === 'string') {
      try {
        ctx.fill(new Path2D(d));
        drawn = true;
      } catch {
        /**/
      }
    }
  }

  if (!drawn) {
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#c9a962';
    const lng = (x: number) => (x / 360 + 0.5) * w;
    const lat = (y: number) => (0.5 - y / 180) * h;
    [
      [0.22, 0.5, 0.14, 0.4],
      [0.5, 0.4, 0.08, 0.2],
      [0.52, 0.65, 0.08, 0.25],
      [0.72, 0.35, 0.2, 0.22],
      [0.82, 0.72, 0.1, 0.1],
    ].forEach(([cx, cy, rx, ry]) => {
      ctx.beginPath();
      ctx.ellipse(lng(cx * 360), lat(cy * 180), w * rx, h * ry, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  onDone(tex);
}

function GlobeMesh({ texture }: { texture: THREE.CanvasTexture }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.12;
  });

  const sphereGeo = useMemo(() => new THREE.SphereGeometry(1, 64, 64), []);
  const edgesGeo = useMemo(() => {
    const s = new THREE.SphereGeometry(1, 48, 48);
    return new THREE.EdgesGeometry(s, 20);
  }, []);

  return (
    <group ref={groupRef}>
      <mesh geometry={sphereGeo}>
        <meshBasicMaterial
          map={texture}
          color={0xffffff}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color={GOLD} transparent opacity={0.8} />
      </lineSegments>
    </group>
  );
}

export function Globe() {
  const testTexture = useMemo(() => createTestTexture(), []);
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(testTexture);

  useEffect(() => {
    let cancelled = false;
    const canvas = document.createElement('canvas');

    fetch(LAND_URL)
      .then((r) => r.json())
      .then((topology: { objects: { land: object } }) => {
        if (cancelled) return;
        const land = topojson.feature(topology as never, topology.objects.land as never);
        createWorldTextureFromGeo(canvas, land as GeoJSON.FeatureCollection, (tex) => {
          if (!cancelled) setTexture(tex);
        });
      })
      .catch(() => {
        if (!cancelled) setTexture(testTexture);
      });

    return () => {
      cancelled = true;
    };
  }, [testTexture]);

  const activeTexture = texture ?? testTexture;

  return (
    <group scale={1.35} position={[0, 0, -2]}>
      <GlobeMesh texture={activeTexture} />
    </group>
  );
}
