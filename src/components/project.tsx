import { ProjectProps } from "@/app/projects/page";
import Image from "next/image";
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

import { register } from "swiper/element/bundle";

register();

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="w-full flex flex-col border-r-2 pr-7">
      <div className="grid grid-cols-2 ">
        <span className="w-full text-2xl font-bold">{project.name}</span>
        <div className="flex flex-col border-l-2 border-black pl-4">
          <span className="">Roles: {project.roles}</span>
          <span className="">Client: {project.client}</span>
          <span className="">Year: {project.year}</span>
        </div>
      </div>
      <div className="w-full relative object-contain mt-4 shadow-lg">
        <swiper-container
          slides-per-view="1"
          autoplay-delay="3000"
          autoplay-disable-on-interaction="true"
          // navigation="true"
          loop="true"
          // pagination="true"
        >
          {project.imgSrc.map((imgSrc: string, index: number) => {
            return (
              <swiper-slide key={`slide-${index}`}>
                <Image
                  src={`/${imgSrc}`}
                  alt="Not Maev Project Image"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto rounded"
                />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default Project;
