import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePathname } from "next/navigation";

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const count = 1000;
  const points = useRef<any>();
  const menuCameraTarget = useRef<THREE.Mesh>(null!);
  // const torusKnot = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState<boolean>(false);
  const pathname = usePathname();
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

  // if (torusKnot !== null) {
  //   torusKnot.current.position.set(-5, -3, 9);
  // }

  useFrame((state) => {
    //Camera

    state.camera.position.lerp(
      {
        x: pathname == "/menu" ? 0 : 0,
        y: pathname == "/menu" ? 0 : 0,
        z: pathname == "/projects" ? 2 : pathname == "/contact" ? 8 : 10,
      },
      0.04
    );

    if (pathname == "/menu") {
      menuCameraTarget.current.position.lerp(
        {
          x: -10,
          y: 0,
          z: 10,
        },
        0.04
      );
    } else {
      menuCameraTarget.current.position.lerp(
        {
          x: 0,
          y: 0,
          z: 0,
        },
        0.04
      );
    }
    state.camera.lookAt(menuCameraTarget.current.position);

    //Points

    points.current.rotation.y =
      state.clock.getElapsedTime() / (pathname == "/projects" ? 12 : 6);
    points.current.position.lerp(
      {
        x: pathname == "/about" ? 3.5 : 0,
        y: 0,
        z: pathname == "/about" ? 3 : 0,
      },
      0.04
    );

    // //Torus Knot

    // torusKnot.current.rotation.y =
    //   state.clock.getElapsedTime() / (pathname == "/projects" ? 12 : 6);
  });

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <>
      <color args={["#fafafa"]} attach="background" />
      <points
        ref={points}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
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
        {/* <OrbitControls autoRotate autoRotateSpeed={0.5} /> */}
      </points>
      <mesh ref={menuCameraTarget}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" transparent opacity={0} />
      </mesh>
      {/* <mesh ref={torusKnot}>
        <torusKnotGeometry args={[1, 0.2, 200, 6, 2, 3]} />
        <meshStandardMaterial color="orange" />
      </mesh> */}
      {/* {pathname == "/projects" && <BoxTextBlock position={[0, 0, 0]} />} */}
      {/* {pathname == "/projects" && <ProjectBullet />} */}
    </>
  );
};

export default BasicParticles;
