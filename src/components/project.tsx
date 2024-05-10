import { ProjectProps } from "@/app/projects/page";
import Image from "next/image";
import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";

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
  const { width } = useWindowSize();
  return (
    <div className="w-full flex flex-col xl:border-r-2 xl:pr-7">
      <div className="grid xl:grid-cols-2 ">
        <span className="w-full text-xl xl:text-2xl font-bold border-b-2 border-black mb-2 xl:m-0 xl:border-0">
          {project.name}
        </span>
        <div className="flex flex-col text-sm xl:border-l-2 border-black xl:pl-4">
          <span className="">Roles: {project.roles}</span>
          <span className="">Client: {project.client}</span>
          <span className="">Year: {project.year}</span>
        </div>
      </div>
      <div className="w-full relative object-contain mt-4 shadow-lg">
        <swiper-container
          slides-per-view="1"
          // autoplay-delay="3000"
          navigation="true"
          // loop="true"
          pagination="true"
          style={{
            "--swiper-pagination-color": "#999999",
            "--swiper-pagination-bullet-inactive-color": "#DDDDDD",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "6px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "0rem",
            "--swiper-navigation-size": "12px",
            "--swiper-navigation-color": "#444444",
          }}
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
