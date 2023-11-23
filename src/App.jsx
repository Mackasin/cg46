import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

const Torus = ({ position }) => {
  const { color, radius, tube } = useControls({
    color: "white",
    radius: { value: 0.6, min: 0.1, max: 2, step: 0.1 },
    tube: { value: 0.25, min: 0.1, max: 1, step: 0.1 },
  });

  const [isClicked, setIsClicked] = useState(false);

  return (
    <mesh position={position} onClick={() => setIsClicked((prev) => !prev)}>
      <torusGeometry args={[radius, tube, 50, 50]} />
      <meshStandardMaterial color={color} wireframe={isClicked} />
    </mesh>
  );
};
const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.6} />

      <Torus position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
