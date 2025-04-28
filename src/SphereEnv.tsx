import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export function SphereEnv() {
    const map = useTexture("textures/starmap.jpg");

    return (
    <mesh>
        <sphereGeometry args={[150, 100, 150]} />
        <meshBasicMaterial
        side={BackSide}
        map={map}
        />
    </mesh>
    )
}