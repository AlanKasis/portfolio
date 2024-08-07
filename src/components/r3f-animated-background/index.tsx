"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import BasicParticles from "./basic-particles";
import { useRouter, usePathname } from "next/navigation";
import { Environment } from "@react-three/drei";
import * as THREE from 'three'

const R3fAnimatedBackground = () => {
  const [scrollPaused, setScrollPaused] = useState<boolean>(false);
  const pathnames = ["/", "/about", "/projects", "/contact"];
  const currentPathname = usePathname();
  const router = useRouter();

  //Scrolling capture and routing logic
  const handleScroll = (e: React.WheelEvent) => {
    if (scrollPaused) {
      return;
    }

    if (e.deltaY < 0) {
      if (pathnames.indexOf(currentPathname) === 0) {
        return;
      }
      router.push(pathnames[pathnames.indexOf(currentPathname) - 1]);
      setScrollPaused(true);
    } else {
      if (pathnames.indexOf(currentPathname) === pathnames.length - 1) {
        return;
      }
      router.push(pathnames[pathnames.indexOf(currentPathname) + 1]);
      setScrollPaused(true);
    }
  };

  useEffect(() => {
    if (!scrollPaused) {
      return;
    }
    setTimeout(() => {
      setScrollPaused(false);
    }, 500);
  }, [scrollPaused]);

  return (
    <div
      className="absolute w-[100vw] h-[100%] flex justify-center items-center top-0 left-0"
      onWheel={(e) => handleScroll(e)}
    >
      <Canvas >
        {/* <Environment preset="city" /> */}
        <BasicParticles />
      </Canvas>
    </div>
  );
};

export default R3fAnimatedBackground;
