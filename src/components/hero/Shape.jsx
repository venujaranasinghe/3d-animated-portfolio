import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#B3DFFF" // Very light pastel blue to blend well
          attach="material"
          distort={0.5} // Minimal distortion for a softer look
          speed={1} // Slow animation for elegance
        />
      </Sphere>
      <ambientLight intensity={3} /> {/* Gentle lighting for soft feel */}
      <directionalLight position={[2, 3, 4]} intensity={1} />
    </>
  );
};

export default Shape;
