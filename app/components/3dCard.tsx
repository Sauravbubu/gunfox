import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

type CardData = {
  title: string;
  color?: string;
  textColor?: string;
  description: string;
};

type Props = {
  cards: CardData[];
};

const Card3DEffect: React.FC<Props> = ({ cards }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Generate cards from props
    const cardGeometry = new THREE.BoxGeometry(3, 2, 0.1);
    const cardMeshes: THREE.Mesh[] = [];

cards.forEach((card, i) => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  
  // Background
  ctx.fillStyle = card.color || '#1f2937'; // Tailwind gray-950
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Card border (simulate Tailwind card border)
  ctx.strokeStyle = '#4b5563'; // gray-800
  ctx.lineWidth = 8;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Title
  ctx.fillStyle = card.textColor || '#ffffff';
  ctx.font = 'bold 32px Inter';
  ctx.textAlign = 'center';
  ctx.fillText(card.title, canvas.width / 2, 80);

  // Description
  ctx.font = '20px Inter';
  ctx.fillStyle = '#d1d5db'; // gray-300
  const wrappedText = card.description.match(/.{1,40}(\s|$)/g) || [];
  wrappedText.forEach((line, index) => {
    ctx.fillText(line.trim(), canvas.width / 2, 130 + index * 28);
  });

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.MeshBasicMaterial({ map: texture });

  const mesh = new THREE.Mesh(cardGeometry, material);
  mesh.position.x = (i - (cards.length - 1) / 2) * 4;
  scene.add(mesh);
  cardMeshes.push(mesh);
});



    // Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / width) * 2 - 1;
      mouse.y = -(event.clientY / height) * 2 + 1;
    }

    window.addEventListener('mousemove', onMouseMove);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const animate = () => {
      requestAnimationFrame(animate);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cardMeshes);

     cardMeshes.forEach((card) => {
  const isHovered = intersects.some((intersect) => intersect.object === card);

  if (isHovered) {
    card.rotation.y += (0.1 - card.rotation.y) * 0.1;
    card.scale.set(1.05, 1.05, 1.05);
  } else {
    card.rotation.y += (0 - card.rotation.y) * 0.1;
    card.scale.set(1, 1, 1);
  }
});

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, [cards]);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Card3DEffect;
