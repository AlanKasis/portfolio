import Link from "next/link";
import React from "react";

type AboutProps = {};

const About = (props: AboutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-column justify-center items-center absolute top-0">
      <div className="animate-fadein lg:w-1/2 z-20 absolute xl:translate-y-1/2 top-1/3 flex flex-wrap justify-center items-center flex-column px-10 space-y-4">
        <span className="w-full md:text-3xl text-2xl font-bold">Nice to meet you! I&apos;m Alan Kasis</span>
        <span className="w-full text-lg md:text-xl">
          I&apos;m a Frontend Developer based in Buenos Aires, Argentina.
        </span>
        <span className="w-full text-lg md:text-xl">
          I&apos;ll build your brand an interactive digital experience your users will love.
        </span>
        <Link className="w-full text-lg md:text-xl underline" href="/projects">Explore my projects.</Link>
      </div>
    </div>
  );
};

export default About;
