import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions["Experiment"].play(); // Start the animation
  }, [actions]);

  useFrame(() => {
    // Update animation time continuously based on time elapsed
    if (actions["Experiment"]) {
      actions["Experiment"].time += 0.01; // Increment the time gradually to loop the animation
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={[1.5, 1.5, 1.5]} position={[0, -2, 0]} /> {/* Scale applied here */}
    </group>
  );
}
