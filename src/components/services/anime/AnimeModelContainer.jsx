import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AnimeModel } from "./AnimeModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const AnimeModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="city" intensity={0.3}> {/* Reduced environment intensity */}
          <AnimeModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-0.5, 0, 1.2]} zoom={0.5} makeDefault /> {/* Adjusted camera position */}
      </Suspense>
    </Canvas>
  );
};

export default AnimeModelContainer;
