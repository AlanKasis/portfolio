import React, { useMemo, useRef } from "react";
import * as THREE from "three";

type ProjectBulletProps = {};

const ProjectBullet = (props: ProjectBulletProps) => {
  const count = 2000;
  const points = useRef<any>();
  const particlesPosition = useMemo(() => {
    // Create a Float32Array of count*3 length
    // -> we are going to generate the x, y, and z values for 2000 particles
    // -> thus we need 6000 items in this array
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const distance = 2.5;

      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      // Generate random values for x, y, and z on every loop
      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      // We add the 3 values to the attribute array for every loop
      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);
  return (
      <>
        <points
          ref={points}
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() => setHovered(false)}
        >
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlesPosition.length / 3}
              array={particlesPosition}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="#5786F5" size={0.02} sizeAttenuation />
        </points>
      </>
  );
};

export default ProjectBullet;
