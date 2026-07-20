import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import travellerModelUrl from "../assets/cartoon_boy_character.glb";

const sectionMessages = [
  { id: "hero", text: "Welcome to my portfolio" },
  { id: "about", text: "Here is my story" },
  { id: "experience", text: "Professional journey" },
  { id: "projects", text: "Personal projects" },
  { id: "skills", text: "Skills and tools" },
  { id: "contact", text: "Let's connect" },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const ScrollTraveller = () => {
  const modelMountRef = useRef(null);
  const [travelY, setTravelY] = useState(120);
  const [activeMessage, setActiveMessage] = useState(sectionMessages[0].text);

  useEffect(() => {
    const mount = modelMountRef.current;

    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const clock = new THREE.Clock();
    const group = new THREE.Group();
    const loader = new GLTFLoader();
    let animationFrameId;
    let mixer;
    let resizeObserver;
    let loadedModel;

    camera.position.set(0, 1.2, 4.2);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    scene.add(group);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8bb7a9, 2.8));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd1fae5, 1.4);
    fillLight.position.set(-3, 2, 3);
    scene.add(fillLight);

    const resizeRenderer = () => {
      const width = mount.clientWidth || 116;
      const height = mount.clientHeight || 132;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    resizeRenderer();

    resizeObserver = new ResizeObserver(resizeRenderer);
    resizeObserver.observe(mount);

    loader.load(travellerModelUrl, (gltf) => {
      loadedModel = gltf.scene;
      loadedModel.traverse((child) => {
        if (child.isMesh) {
          child.frustumCulled = false;
        }
      });

      const bounds = new THREE.Box3().setFromObject(loadedModel);
      const size = bounds.getSize(new THREE.Vector3());
      const center = bounds.getCenter(new THREE.Vector3());
      const maxSize = Math.max(size.x, size.y, size.z) || 1;

      loadedModel.position.sub(center);
      loadedModel.scale.setScalar(2.45 / maxSize);
      group.add(loadedModel);

      if (gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(loadedModel);
        mixer.clipAction(gltf.animations[0]).play();
      }
    });

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.elapsedTime;

      if (mixer) {
        mixer.update(delta);
      }

      group.rotation.y = 0.25 + Math.sin(elapsed * 1.4) * 0.08;
      group.position.y = Math.sin(elapsed * 4) * 0.035;

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];

          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      loadedModel = undefined;
    };
  }, []);

  useEffect(() => {
    let frameId;

    const updateTraveller = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      const minY = 118;
      const maxY = Math.max(minY, window.innerHeight - 176);

      setTravelY(minY + clamp(progress, 0, 1) * (maxY - minY));

      const viewportAnchor = window.innerHeight * 0.45;
      const currentSection =
        sectionMessages.find(({ id }) => {
          const section = document.getElementById(id);

          if (!section) {
            return false;
          }

          const rect = section.getBoundingClientRect();
          return rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;
        }) || sectionMessages[0];

      setActiveMessage(currentSection.text);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateTraveller);
    };

    updateTraveller();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <aside
      className="pointer-events-none fixed left-4 z-40 hidden transition-transform duration-300 ease-out md:block lg:left-8"
      style={{ transform: `translate3d(0, ${travelY}px, 0)` }}
      aria-live="polite"
    >
      <div className="traveller-bubble">{activeMessage}</div>

      <div ref={modelMountRef} className="traveller-model" aria-hidden="true" />
    </aside>
  );
};

export default ScrollTraveller;
