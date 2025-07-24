import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const AnimatedShape: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = containerRef.current?.clientWidth || window.innerWidth;
    const height = containerRef.current?.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0f0f0f');

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current?.appendChild(renderer.domElement);

    // Geometry & Material
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x9b5de5,
      metalness: 0.6,
      roughness: 0.2,
      emissive: 0x300070,
      emissiveIntensity: 0.4,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const pointLight = new THREE.PointLight(0xff0080, 1.5);
    pointLight.position.set(5, 5, 5);

    const blueLight = new THREE.PointLight(0x00ffff, 1.2);
    blueLight.position.set(-5, -5, -5);

    scene.add(ambientLight, pointLight, blueLight);

    // Controls (optional)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      controls.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default AnimatedShape;
