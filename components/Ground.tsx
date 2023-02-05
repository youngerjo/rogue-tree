import { useControls } from "leva";

export default function Ground() {
  const { groundColor, undergroundCeilingColor, undergroundWallColor } =
    useControls("Ground", {
      groundColor: "#bfe897",
      undergroundCeilingColor: "#796651",
      undergroundWallColor: "#58472a",
    });

  return (
    <group>
      <mesh rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[200, 200, 1]} />
        <meshBasicMaterial color={groundColor} />
      </mesh>
      <group position-y={-0.01}>
        <mesh rotation-x={Math.PI * 0.5}>
          <planeGeometry args={[200, 200, 1]} />
          <meshBasicMaterial color={undergroundCeilingColor} />
        </mesh>
        <mesh position={[0, -25, -25]}>
          <planeGeometry args={[50, 50, 1]} />
          <meshBasicMaterial color={undergroundWallColor} />
        </mesh>
        <mesh position={[0, -25, 25]} rotation-y={Math.PI}>
          <planeGeometry args={[50, 50, 1]} />
          <meshBasicMaterial color={undergroundWallColor} />
        </mesh>
        <mesh position={[-25, -25, 0]} rotation-y={Math.PI * 0.5}>
          <planeGeometry args={[50, 50, 1]} />
          <meshBasicMaterial color={undergroundWallColor} />
        </mesh>
        <mesh position={[25, -25, 0]} rotation-y={Math.PI * -0.5}>
          <planeGeometry args={[50, 50, 1]} />
          <meshBasicMaterial color={undergroundWallColor} />
        </mesh>
      </group>
    </group>
  );
}
