import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/guitar.glb");

export default function Model() {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/guitar.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log("Available Animations:", animations);
    console.log("Animation Actions:", actions);

    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0]; // Play the first animation found
      firstAction.play();
    }
  }, [actions]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={[1.5, 1.5, 1.5]} position={[0, -2, 0]} />
    </group>
  );
}
