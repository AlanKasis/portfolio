"use client";

import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const ScrollIndicator = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const pathnames = ["/", "/about", "/projects", "/contact"];

  if (!["/contact", "/menu"].includes(currentPathname)) {
      return (
        <div
          className="animate-fadein z-20 absolute bottom-10 w-full text-center hover:animate-pulse cursor-pointer"
          onClick={() =>
            router.push(pathnames[pathnames.indexOf(currentPathname) + 1])
          }
        >
          <span className="text-xs">SCROLL</span>
          <Image
            className="mx-auto"
            src="/icons/down-arrow.png"
            alt="Scroll down arrow"
            width={12}
            height={12}
          />
        </div>
      );
  } else {
    return
  }
};

export default ScrollIndicator;
