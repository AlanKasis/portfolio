"use client";

import Project from "@/components/project";
import ProjectList from "@/components/project-list";
import Link from "next/link";
import React, { useState } from "react";
import projects from "../../data/projects.json";

export interface ProjectProps {
  name: string;
  imgSrc?: string[];
  client?: string;
  roles: string;
  year?: number;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  return (
    <div className="absolute w-[100vw] h-full flex justify-center items-center top-0 left-0">
      <div className="w-4/5 bg-white bg-opacity-80 rounded-3xl shadow-lg animate-latefadein p-10 grid grid-cols-5 gap-4 z-30">
        <div className="col-span-3">
          <Project project={projects[selectedProject]} />
        </div>
        <div className="col-span-2">
          <ProjectList
            projects={projects}
            action={(index: number) => setSelectedProject(index)}
            active={selectedProject}
          />
          <div className="w-full flex flex-wrap flex-col justify-center items-center p-2 mt-10">
            <span className="w-full text-center">Want to see more?</span>
            <Link className="underline mt-2" href="/contact">Contact me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
