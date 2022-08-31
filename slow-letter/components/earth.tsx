import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";

const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={0.15} />
    </>
  );
};

export default function Earth() {
  return (
    <>
      <div className="globe">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 4] }}>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate minDistance={2.5} maxDistance={6} />
        </Canvas>
      </div>
      <style jsx>
        {`
          .globe {
            display: grid;
            place-items: center;
            height: 100%;
            cursor: grabbing;
          }
        `}
      </style>
    </>
  );
}
