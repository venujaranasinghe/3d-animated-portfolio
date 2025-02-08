import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import Model from "./Model";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
    return (
        <Canvas style={{ height: "100vh", position: "relative" }} gl={{ antialias: true }} dpr={[1, 1.5]}>

            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={<Loader />}>
                <Model />
            </Suspense>
        </Canvas>
    );
}
