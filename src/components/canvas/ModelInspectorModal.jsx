import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Interactive 3D Model Inspection Drawer/Modal
 * Supports:
 * 1. Real-time 360° 3D WebGL inspection with mode switcher:
 *    - Cel-Shaded (Toon + Inverted Hull Outline)
 *    - Wireframe (Topology inspection)
 *    - Matcap Clay (Sculpting clay/normal inspection)
 * 2. 2D Concept Sketch vs 3D Final Render Before/After Comparison Slider (PRD3 3.2.3)
 */
export default function ModelInspectorModal({ project, onClose }) {
  const [renderMode, setRenderMode] = useState('cel'); // 'cel' | 'wireframe' | 'clay'
  const [viewTab, setViewTab] = useState('3d'); // '3d' | 'compare'
  const [sliderPos, setSliderPos] = useState(50);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!project || viewTab !== '3d') return;
    const container = viewerRef.current;
    if (!container) return;

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 220;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.4, 4.6);
    camera.lookAt(0, 0.1, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xfff5e4, 1.3);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(0xfff8dc, 2.0);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x68abff, 1.0);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    // 3-step Toon Gradient Map
    const gradData = new Uint8Array([70, 160, 255]);
    const gradientMap = new THREE.DataTexture(gradData, 3, 1, THREE.RedFormat);
    gradientMap.minFilter = THREE.NearestFilter;
    gradientMap.magFilter = THREE.NearestFilter;
    gradientMap.needsUpdate = true;

    const makeMaterial = (hexColor) => {
      if (renderMode === 'wireframe') {
        return new THREE.MeshBasicMaterial({
          color: 0x1e2b24,
          wireframe: true
        });
      }
      if (renderMode === 'clay') {
        return new THREE.MeshStandardMaterial({
          color: 0xd8c3b0,
          roughness: 0.45,
          metalness: 0.08
        });
      }
      return new THREE.MeshToonMaterial({
        color: hexColor,
        gradientMap
      });
    };

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Build stylized procedural 3D model matching the selected project
    if (project.modelType === 'airship') {
      // Airship Kazekirimaru
      const hull = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 20, 16),
        makeMaterial(0xd96b43)
      );
      hull.scale.set(1.5, 0.75, 0.85);
      hull.position.y = 0.25;
      rootGroup.add(hull);

      const deck = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.35, 0.7),
        makeMaterial(0x8b6b4f)
      );
      deck.position.set(0, -0.35, 0);
      rootGroup.add(deck);

      const fin = new THREE.Mesh(
        new THREE.ConeGeometry(0.45, 0.9, 4),
        makeMaterial(0xfbf8f1)
      );
      fin.position.set(-1.3, 0.55, 0);
      fin.rotation.z = Math.PI / 6;
      rootGroup.add(fin);

      const prop = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.95, 0.14),
        makeMaterial(0xf5c75b)
      );
      prop.position.set(1.68, 0.25, 0);
      prop.name = 'spinner';
      rootGroup.add(prop);
    } else if (project.modelType === 'creature') {
      // Woodland Spirit Creature Seiran
      const body = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.95, 2),
        makeMaterial(0x68b984)
      );
      body.position.y = -0.1;
      rootGroup.add(body);

      const mane = new THREE.Mesh(
        new THREE.TorusGeometry(0.75, 0.28, 12, 24),
        makeMaterial(0x48a868)
      );
      mane.position.set(0, 0.25, 0.2);
      rootGroup.add(mane);

      const eyeL = new THREE.Mesh(
        new THREE.SphereGeometry(0.14, 12, 12),
        makeMaterial(0xf5c75b)
      );
      eyeL.position.set(-0.32, 0.3, 0.82);
      const eyeR = eyeL.clone();
      eyeR.position.x = 0.32;
      rootGroup.add(eyeL, eyeR);
    } else if (project.modelType === 'greenhouse') {
      // Alchemist Greenhouse Diorama
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 0.25, 2.2),
        makeMaterial(0x8b6b4f)
      );
      base.position.y = -0.7;
      rootGroup.add(base);

      const glassHouse = new THREE.Mesh(
        new THREE.CylinderGeometry(0.95, 1.15, 1.3, 6),
        makeMaterial(0x68abff)
      );
      glassHouse.position.y = 0.1;
      rootGroup.add(glassHouse);

      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(0.95, 12, 10),
        makeMaterial(0x68b984)
      );
      dome.position.y = 0.75;
      rootGroup.add(dome);
    } else {
      // Clockwork Music Box & Gramophone
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 0.55, 1.2),
        makeMaterial(0x5c3d2e)
      );
      box.position.y = -0.45;
      rootGroup.add(box);

      const gear = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.55, 0.12, 12),
        makeMaterial(0xf5c75b)
      );
      gear.position.set(-0.25, -0.1, 0);
      gear.name = 'spinner';
      rootGroup.add(gear);

      const horn = new THREE.Mesh(
        new THREE.ConeGeometry(0.75, 1.3, 18, 1, true),
        makeMaterial(0xf28c52)
      );
      horn.position.set(0.25, 0.55, 0);
      horn.rotation.z = -Math.PI / 4;
      rootGroup.add(horn);
    }

    // Add Inverted Hull Outline in Cel-Shaded mode
    if (renderMode === 'cel') {
      rootGroup.children.forEach((child) => {
        if (child.isMesh) {
          const outline = new THREE.Mesh(
            child.geometry,
            new THREE.MeshBasicMaterial({
              color: 0x1e2b24,
              side: THREE.BackSide
            })
          );
          outline.scale.multiplyScalar(1.04);
          child.add(outline);
        }
      });
    }

    // Pointer Drag Orbit + Wheel Zoom
    let dragging = false;
    let lx = 0;
    let ly = 0;
    let rotY = 0.4;
    let rotX = 0.15;

    const down = (e) => {
      dragging = true;
      lx = e.clientX;
      ly = e.clientY;
    };
    const move = (e) => {
      if (!dragging) return;
      rotY += (e.clientX - lx) * 0.01;
      rotX = Math.max(-0.6, Math.min(0.8, rotX + (e.clientY - ly) * 0.01));
      lx = e.clientX;
      ly = e.clientY;
    };
    const up = () => {
      dragging = false;
    };
    const wheel = (e) => {
      e.preventDefault();
      camera.position.z = Math.max(2.6, Math.min(7.0, camera.position.z + e.deltaY * 0.003));
    };

    const el = renderer.domElement;
    el.style.cursor = 'grab';
    el.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    el.addEventListener('wheel', wheel, { passive: false });

    let animId;
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!dragging) {
        rotY += 0.007;
      }
      rootGroup.rotation.y = rotY;
      rootGroup.rotation.x = rotX;
      rootGroup.position.y = Math.sin(t * 2) * 0.05;

      const spinner = rootGroup.getObjectByName('spinner');
      if (spinner) {
        spinner.rotation.x += 0.05;
        spinner.rotation.y += 0.03;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      el.removeEventListener('wheel', wheel);
      renderer.dispose();
    };
  }, [project, renderMode, viewTab]);

  if (!project) return null;

  return (
    <div
      id="inspectorModal"
      className="fixed inset-0 z-50 bg-primary/65 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl ink-border-heavy cel-shadow-lg p-space-md space-y-space-md transform transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-2 border-b-[1.5px] border-primary/20">
          <div className="flex items-center space-x-2">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="view_in_ar"
            >
              view_in_ar
            </span>
            <div>
              <span className="text-label-sm font-label-sm text-secondary font-bold block">
                {project.code}
              </span>
              <h4
                className="text-headline-sm font-headline-sm text-primary font-bold"
                id="modalTitle"
              >
                {project.title}
              </h4>
            </div>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary ink-border-heavy cel-btn-active"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-sm" data-icon="close">
              close
            </span>
          </button>
        </div>

        {/* View Tab Switcher: 3D Live Inspector vs 2D/3D Before-After Slider */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex bg-surface-container p-1 rounded-xl ink-border-heavy text-label-sm font-label-sm flex-1 justify-around">
            {[
              { id: 'cel', label: 'Cel-Shaded' },
              { id: 'wireframe', label: 'Wireframe' },
              { id: 'clay', label: 'Matcap Clay' }
            ].map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  setViewTab('3d');
                  setRenderMode(mode.id);
                }}
                className={`mode-btn px-3 py-1 rounded-lg transition-all ${
                  viewTab === '3d' && renderMode === mode.id
                    ? 'bg-surface-container-lowest text-primary font-bold ink-border-heavy shadow-sm'
                    : 'text-on-surface-variant font-medium hover:text-primary'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setViewTab(viewTab === 'compare' ? '3d' : 'compare')}
            className={`px-3 py-2 rounded-xl ink-border-heavy text-label-sm font-label-sm font-bold flex items-center space-x-1 transition-all ${
              viewTab === 'compare'
                ? 'bg-[#F28C52] text-on-primary cel-shadow-sm'
                : 'bg-surface-container-low text-primary hover:bg-surface-container-high'
            }`}
          >
            <span className="material-symbols-outlined text-sm">compare</span>
            <span>2D/3D 對比拉桿</span>
          </button>
        </div>

        {/* Viewport: Either Live 3D WebGL Viewer or Before/After Comparison Slider */}
        {viewTab === '3d' ? (
          <div className="relative h-56 rounded-xl ink-border-heavy overflow-hidden bg-gradient-to-b from-[#E8F1F5]/70 to-surface-container-low">
            <div ref={viewerRef} className="w-full h-full" />
            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center pointer-events-none text-label-sm font-label-sm">
              <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 ink-border-heavy text-primary font-bold">
                模式：{renderMode === 'cel' ? '吉卜力賽璐珞渲染' : renderMode === 'wireframe' ? '拓撲佈線檢視' : '白模雕刻檢視'}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 ink-border-heavy text-on-surface-variant">
                支援 360° 旋轉與滾輪縮放
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="relative h-56 rounded-xl ink-border-heavy overflow-hidden select-none bg-surface-container-low">
              {/* After Layer: Final 3D Cel-Shaded Render */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded bg-primary text-on-primary text-label-sm font-label-sm font-bold ink-border-heavy">
                3D 賽璐珞成品 (Final Render)
              </span>

              {/* Before Layer: 2D Concept Blueprint / Sketch */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-primary"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} 2D 草圖`}
                  className="h-full max-w-none object-cover"
                  style={{
                    width: '100%',
                    filter: 'sepia(0.85) contrast(1.25) brightness(1.06) grayscale(0.4)'
                  }}
                />
                {/* Blueprint Grid Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(30,43,36,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,43,36,0.12) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded bg-[#FBF8F1] text-primary text-label-sm font-label-sm font-bold ink-border-heavy">
                  2D 原始設定手稿 (Concept Sketch)
                </span>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute inset-y-0 z-20 flex items-center justify-center pointer-events-none"
                style={{ left: `calc(${sliderPos}% - 16px)` }}
              >
                <div className="w-8 h-8 rounded-full bg-[#F5C75B] text-primary ink-border-heavy cel-shadow-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">
                    swap_horiz
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 px-1">
              <span className="text-label-sm font-label-sm font-bold text-primary">
                2D 草圖
              </span>
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full accent-[#F28C52] cursor-pointer"
              />
              <span className="text-label-sm font-label-sm font-bold text-primary">
                3D 成品
              </span>
            </div>
          </div>
        )}

        {/* Stats Breakdown */}
        <div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm">
          <div className="p-2.5 rounded-lg bg-surface-container-low ink-border-heavy">
            <span className="text-on-surface-variant block">
              多邊形面數 / 頂點 ({project.vertsDetail})
            </span>
            <span
              className="font-bold text-primary text-body-md"
              id="modalFaces"
            >
              {project.polycountDetail}
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-container-low ink-border-heavy">
            <span className="text-on-surface-variant block">貼圖規格</span>
            <span
              className="font-bold text-primary text-body-md"
              id="modalTexture"
            >
              {project.textureSpec}
            </span>
          </div>
        </div>

        {/* Tools & Core Notes */}
        <div className="p-3 rounded-lg bg-surface-container-low ink-border-heavy space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <span className="text-on-surface-variant text-label-sm font-bold">
              核心工法筆記與案例解析
            </span>
            <div className="flex flex-wrap gap-1">
              {project.tools?.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded bg-surface-container-lowest ink-border-heavy text-[10px] font-bold text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <p
            className="text-body-sm font-body-sm text-primary font-medium"
            id="modalNotes"
          >
            {project.notes}
          </p>
          {project.caseStudy && (
            <ul className="space-y-1 pt-1 border-t border-primary/10 text-body-sm text-on-surface-variant list-disc pl-4">
              {project.caseStudy.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          className="w-full py-2.5 rounded-xl bg-primary text-on-primary text-label-md font-label-md font-bold ink-border-heavy cel-shadow-sm cel-btn-active"
          onClick={onClose}
        >
          關閉檢視視窗
        </button>
      </div>
    </div>
  );
}
