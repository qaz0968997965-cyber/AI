import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Ghibli Watercolor & Cel-Shaded 3D Interactive Floating Island Scene
 * Based on Stitch export (ANIMATION_6) + PRD3 Cel-Shading & Interactive Object specs
 */
export default function FloatingIslandScene({ isTwilight = false }) {
  const containerRef = useRef(null);
  const [interactionNote, setInteractionNote] = useState(null);
  const [rhythmBoost, setRhythmBoost] = useState(false);
  const boostRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 340;
    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 3.3, 7.3);
    camera.lookAt(0, 0.3, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    // PRD3 Graceful Degradation: limit DPR to [1, 1.5] on mobile, max 2 on desktop
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.shadowMap.enabled = !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Create 3-tone Cel-Shading Gradient Map for Toon Materials
    const gradientColors = new Uint8Array([85, 165, 255]);
    const gradientMap = new THREE.DataTexture(gradientColors, 3, 1, THREE.RedFormat);
    gradientMap.minFilter = THREE.NearestFilter;
    gradientMap.magFilter = THREE.NearestFilter;
    gradientMap.needsUpdate = true;

    const createToonMat = (colorHex) =>
      new THREE.MeshToonMaterial({
        color: colorHex,
        gradientMap
      });

    // Helper for Inverted Hull Cel Outline (PRD3 Section 2)
    const addOutline = (mesh, thickness = 0.035, outlineColor = 0x1e2b24) => {
      const outlineMat = new THREE.MeshBasicMaterial({
        color: outlineColor,
        side: THREE.BackSide
      });
      const outlineMesh = new THREE.Mesh(mesh.geometry, outlineMat);
      outlineMesh.scale.multiplyScalar(1 + thickness);
      mesh.add(outlineMesh);
    };

    // Lighting - Soft warm Ghibli sunlight & skylight
    const ambientLight = new THREE.AmbientLight(
      isTwilight ? 0x9bb8d3 : 0xfff3e0,
      isTwilight ? 0.95 : 1.25
    );
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(
      isTwilight ? 0xffb07c : 0xfff9db,
      isTwilight ? 1.4 : 1.8
    );
    sunLight.position.set(5, 10, 5);
    sunLight.castShadow = !isMobile;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const skyBounceLight = new THREE.DirectionalLight(0xa6d1ff, 0.85);
    skyBounceLight.position.set(-5, -3, -5);
    scene.add(skyBounceLight);

    // Group for whole floating diorama
    const diorama = new THREE.Group();
    scene.add(diorama);

    const interactables = [];

    // Island Base (Stylized Floating Moss & Dirt Rock)
    const rockGeo = new THREE.CylinderGeometry(2.4, 0.3, 2.2, 9);
    const rockMat = createToonMat(0x8b6b4f);
    const rock = new THREE.Mesh(rockGeo, rockMat);
    rock.position.y = -1.1;
    rock.receiveShadow = true;
    addOutline(rock, 0.025);
    diorama.add(rock);

    // Grassy Top Layer
    const grassGeo = new THREE.CylinderGeometry(2.55, 2.4, 0.5, 12);
    const grassMat = createToonMat(0x68b984);
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.position.y = 0.05;
    grass.receiveShadow = true;
    addOutline(grass, 0.025);
    diorama.add(grass);

    // Mini Cottage / Studio Cabin
    const cottageGroup = new THREE.Group();
    cottageGroup.position.set(-0.6, 0.3, -0.4);
    cottageGroup.userData = {
      name: '雲端創作木屋 (Atelier Cabin)',
      message: '🏠 點擊了「雲端創作木屋」：風車加速運轉，散發溫暖創作光輝！'
    };

    // House Walls (Parchment White Plaster)
    const wallGeo = new THREE.BoxGeometry(1.4, 1.2, 1.2);
    const wallMat = createToonMat(0xfdfaf2);
    const walls = new THREE.Mesh(wallGeo, wallMat);
    walls.position.y = 0.6;
    walls.castShadow = true;
    walls.receiveShadow = true;
    walls.userData = cottageGroup.userData;
    addOutline(walls, 0.03);
    cottageGroup.add(walls);
    interactables.push(walls);

    // Roof (Terracotta Orange-Red Cel-Shade)
    const roofGeo = new THREE.ConeGeometry(1.3, 0.9, 4);
    const roofMat = createToonMat(0xd96b43);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.rotation.y = Math.PI / 4;
    roof.position.y = 1.65;
    roof.castShadow = true;
    roof.userData = cottageGroup.userData;
    addOutline(roof, 0.03);
    cottageGroup.add(roof);
    interactables.push(roof);

    // Wooden Door & Warm Glowing Window
    const doorGeo = new THREE.BoxGeometry(0.3, 0.6, 0.05);
    const woodMat = createToonMat(0x5c3d2e);
    const door = new THREE.Mesh(doorGeo, woodMat);
    door.position.set(0, 0.3, 0.62);
    cottageGroup.add(door);

    const winGeo = new THREE.BoxGeometry(0.32, 0.32, 0.05);
    const winMat = new THREE.MeshBasicMaterial({ color: 0xf5c75b });
    const win = new THREE.Mesh(winGeo, winMat);
    win.position.set(-0.38, 0.68, 0.62);
    cottageGroup.add(win);

    // Chimney
    const chimneyGeo = new THREE.BoxGeometry(0.25, 0.6, 0.25);
    const chimney = new THREE.Mesh(chimneyGeo, rockMat);
    chimney.position.set(0.4, 1.6, -0.2);
    cottageGroup.add(chimney);

    // Wind Mill / Propeller on Cabin
    const propGroup = new THREE.Group();
    propGroup.position.set(0.4, 1.3, 0.62);
    const bladeGeo = new THREE.BoxGeometry(0.08, 0.75, 0.03);
    const bladeMat = createToonMat(0xf5c75b);
    const b1 = new THREE.Mesh(bladeGeo, bladeMat);
    const b2 = new THREE.Mesh(bladeGeo, bladeMat);
    b2.rotation.z = Math.PI / 2;
    propGroup.add(b1, b2);
    cottageGroup.add(propGroup);

    diorama.add(cottageGroup);

    // Stylized Tree (Ghibli Fluffy Foliage)
    const treeGroup = new THREE.Group();
    treeGroup.position.set(1.3, 0.3, 0.6);
    const treeInfo = {
      name: '微風樟樹與木靈 (Forest Canopy)',
      message: '🌿 點擊了「微風樟樹」：樹冠隨風搖曳，飄落吉卜力光塵花瓣！'
    };

    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.2, 1.1, 6);
    const trunk = new THREE.Mesh(trunkGeo, woodMat);
    trunk.position.y = 0.55;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    const foliageMat1 = createToonMat(0x48a868);
    const foliageMat2 = createToonMat(0x82cb7c);

    const f1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7, 1), foliageMat1);
    f1.position.set(0, 1.2, 0);
    f1.castShadow = true;
    f1.userData = treeInfo;
    addOutline(f1, 0.03);
    treeGroup.add(f1);

    const f2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), foliageMat2);
    f2.position.set(0.3, 1.4, 0.2);
    f2.castShadow = true;
    f2.userData = treeInfo;
    addOutline(f2, 0.03);
    treeGroup.add(f2);

    const f3 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5, 1), foliageMat1);
    f3.position.set(-0.25, 1.5, -0.15);
    f3.castShadow = true;
    f3.userData = treeInfo;
    addOutline(f3, 0.03);
    treeGroup.add(f3);

    interactables.push(f1, f2, f3);
    diorama.add(treeGroup);

    // 3D Work Desk, Artist Easel & Vintage Rhythm Microphone / Radio (PRD3 Module 1)
    const easelGroup = new THREE.Group();
    easelGroup.position.set(0.3, 0.3, 1.1);
    easelGroup.rotation.y = -Math.PI / 6;
    const easelInfo = {
      name: '陽光畫架與節奏麥克風 (Easel & Rhythm Mic)',
      message: '🎵 點擊了「畫架與復古收音機」：120 BPM 節奏律動共鳴啟動！'
    };

    const canvasBoardGeo = new THREE.BoxGeometry(0.8, 0.6, 0.06);
    const canvasBoardMat = createToonMat(0xffffff);
    const board = new THREE.Mesh(canvasBoardGeo, canvasBoardMat);
    board.position.set(0, 0.7, 0);
    board.castShadow = true;
    board.userData = easelInfo;
    addOutline(board, 0.04);
    easelGroup.add(board);
    interactables.push(board);

    const easelLegGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.1);
    const l1 = new THREE.Mesh(easelLegGeo, woodMat);
    l1.position.set(-0.3, 0.55, 0.1);
    l1.rotation.z = 0.15;
    const l2 = new THREE.Mesh(easelLegGeo, woodMat);
    l2.position.set(0.3, 0.55, 0.1);
    l2.rotation.z = -0.15;
    easelGroup.add(l1, l2);

    // Retro Radio / Mic beside the easel
    const radioGeo = new THREE.BoxGeometry(0.38, 0.26, 0.22);
    const radioMat = createToonMat(0xf28c52);
    const radio = new THREE.Mesh(radioGeo, radioMat);
    radio.position.set(-0.7, 0.16, 0.25);
    radio.userData = easelInfo;
    addOutline(radio, 0.045);
    easelGroup.add(radio);
    interactables.push(radio);

    diorama.add(easelGroup);

    // Cute Kodama / Soot Sprite Companion on the grass
    const spriteGroup = new THREE.Group();
    spriteGroup.position.set(-1.35, 0.48, 1.05);
    const spriteGeo = new THREE.SphereGeometry(0.22, 12, 12);
    const spriteMat = new THREE.MeshBasicMaterial({ color: 0x2c2a29 });
    const spriteBody = new THREE.Mesh(spriteGeo, spriteMat);
    spriteBody.userData = {
      name: '小煤炭精靈 (Studio Sprite)',
      message: '✨ 點擊了「工作室小精靈」：開心地跳起了街舞律動！'
    };
    const eyeGeo = new THREE.SphereGeometry(0.055, 8, 8);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.07, 0.05, 0.19);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.07, 0.05, 0.19);
    spriteBody.add(eyeL, eyeR);
    spriteGroup.add(spriteBody);
    interactables.push(spriteBody);
    diorama.add(spriteGroup);

    // Floating Fluffy Ghibli Clouds
    const cloudsGroup = new THREE.Group();
    const cloudMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.88
    });
    function createCloud(x, y, z, scale) {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      const p1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 9, 9), cloudMat);
      const p2 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 9, 9), cloudMat);
      p2.position.set(0.35, -0.05, 0);
      const p3 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 9, 9), cloudMat);
      p3.position.set(-0.35, -0.05, 0);
      g.add(p1, p2, p3);
      g.scale.set(scale, scale * 0.7, scale);
      return g;
    }
    const c1 = createCloud(-2.8, 1.5, -2, 1.1);
    const c2 = createCloud(2.5, 0.8, -1.5, 0.9);
    const c3 = createCloud(-1.2, -1.2, 1.8, 0.75);
    cloudsGroup.add(c1, c2, c3);
    scene.add(cloudsGroup);

    // Floating Pollen / Light Dust Particles
    const particleCount = 55;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 8;
      pPos[i + 1] = Math.random() * 5 - 1;
      pPos[i + 2] = (Math.random() - 0.5) * 6;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xfffae0,
      size: 0.13,
      transparent: true,
      opacity: 0.78
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Orbit Drag + Mouse Parallax + Raycaster Click
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let dragDistance = 0;
    let orbitYaw = 0;
    let orbitPitch = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onPointerDown = (e) => {
      isDragging = true;
      dragDistance = 0;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      dragDistance += Math.abs(dx) + Math.abs(dy);
      prevX = e.clientX;
      prevY = e.clientY;

      orbitYaw += dx * 0.008;
      // Clamp vertical angle so the user cannot flip under the island (PRD3 Module 1)
      orbitPitch = Math.max(-0.28, Math.min(0.45, orbitPitch + dy * 0.006));
    };

    const onPointerUp = (e) => {
      if (isDragging && dragDistance < 8) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(interactables, false);
        if (hits.length > 0) {
          const info = hits[0].object.userData;
          boostRef.current = 1.0;
          setRhythmBoost(true);
          setInteractionNote(
            info?.message || '✨ 觸發雲端工作室律動動畫！'
          );
          setTimeout(() => setRhythmBoost(false), 1800);
        }
      }
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.style.cursor = 'grab';
    domElem.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Render loop
    const clock = new THREE.Clock();
    let frameId;

    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Decay click interaction boost
      if (boostRef.current > 0) {
        boostRef.current = Math.max(0, boostRef.current - 0.015);
      }
      const boost = boostRef.current;

      // Floating gentle bobbing + rhythm jump when clicked
      diorama.position.y =
        Math.sin(t * 1.2) * 0.12 + Math.sin(t * 14) * boost * 0.18;
      diorama.rotation.y = Math.sin(t * 0.3) * 0.12 + orbitYaw;
      diorama.rotation.x = orbitPitch;

      // Propeller spin (accelerates when clicked)
      propGroup.rotation.z += 0.04 + boost * 0.22;

      // Cute soot sprite hop & radio pulse
      spriteGroup.position.y =
        0.48 + Math.abs(Math.sin(t * 3.2)) * (0.08 + boost * 0.25);
      spriteGroup.rotation.y = Math.sin(t * 2) * 0.4;
      const radioScale = 1 + Math.sin(t * 12.5) * (0.03 + boost * 0.12);
      radio.scale.set(radioScale, 1 / radioScale, radioScale);

      // Tree gentle sway in the wind
      treeGroup.rotation.z = Math.sin(t * 1.5) * (0.03 + boost * 0.08);

      // Cloud gentle drifting
      c1.position.x = -2.8 + Math.sin(t * 0.4) * 0.4;
      c2.position.x = 2.5 + Math.cos(t * 0.35) * 0.35;
      c3.position.x = -1.2 + Math.sin(t * 0.5) * 0.3;

      // Particles gentle upward floating
      const positions = particles.geometry.attributes.position.array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] += 0.005 + boost * 0.02;
        if (positions[i] > 4) positions[i] = -1.5;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Smooth mouse parallax tilt
      targetX += (mouseX * 0.32 - targetX) * 0.05;
      targetY += (mouseY * 0.2 - targetY) * 0.05;
      scene.rotation.y = targetX;
      scene.rotation.x = targetY;

      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 360;
      const newH = container.clientHeight || 340;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      domElem.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isTwilight]);

  const triggerRhythmAnimation = () => {
    boostRef.current = 1.0;
    setRhythmBoost(true);
    setInteractionNote('🎶 120 BPM 工作室節奏共鳴動畫已觸發！');
    setTimeout(() => setRhythmBoost(false), 1800);
  };

  return (
    <div className="relative my-space-md">
      <div
        className={`relative rounded-2xl ink-border-heavy cel-shadow-lg overflow-hidden p-1 transition-colors duration-500 ${
          isTwilight
            ? 'bg-gradient-to-b from-[#1E2B24] via-[#283b31] to-[#1a241f]'
            : 'bg-gradient-to-b from-[#E8F1F5]/75 via-[#FBF8F1] to-surface-container-low'
        }`}
      >
        {/* Top Floating Japanese Label & Interactive Trigger */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm ink-border-heavy text-label-sm font-label-sm text-primary font-bold cel-shadow-sm">
            // アトリエ・鍾 3D DIORAMA
          </span>
          <button
            type="button"
            onClick={triggerRhythmAnimation}
            className="pointer-events-auto flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#F5C75B] text-primary ink-border-heavy text-label-sm font-label-sm font-bold cel-shadow-sm cel-btn-active"
          >
            <span className="material-symbols-outlined text-xs">
              {rhythmBoost ? 'music_note' : 'play_circle'}
            </span>
            <span>{rhythmBoost ? '律動中 ♪' : '點亮節奏'}</span>
          </button>
        </div>

        {/* 3D Scene Asset Container matching Stitch ANIMATION_6 */}
        <div
          ref={containerRef}
          id="threejs-container-ANIMATION_6"
          className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-transparent my-2"
        />

        {/* Interactive Feedback Toast when an object in the 3D scene is clicked */}
        {interactionNote && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full ink-border-heavy cel-shadow-sm text-label-sm font-label-sm font-bold whitespace-nowrap animate-bounce">
            {interactionNote}
          </div>
        )}

        {/* Tactile Instruction Pill Overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 bg-surface-container-lowest/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full ink-border-heavy cel-shadow-sm pointer-events-none whitespace-nowrap">
          <span
            className="material-symbols-outlined text-primary text-base animate-bounce"
            data-icon="touch_app"
          >
            touch_app
          </span>
          <span className="text-label-sm font-label-sm text-primary tracking-wider font-semibold">
            拖曳視角探索・點擊木屋或收音機觸發互動
          </span>
        </div>
      </div>
    </div>
  );
}
