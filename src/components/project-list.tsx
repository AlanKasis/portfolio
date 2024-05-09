import React from "react";
import { ProjectProps } from "@/app/projects/page";
import ProjectItem from "./project-item";

interface ProjectListProps {
    projects: ProjectProps[],
    action: (num: number) => void,
    active: number
}

const ProjectList = ({ projects, action, active }: ProjectListProps) => {
  return (
    <div className="w-full flex flex-col mx-4">
      <div className="text-3xl border-b-2 pb-2">Latest projects</div>
      {projects.map((project: ProjectProps, index: number) => {
        return (
          <div key={`${project.name}-list-item`} onClick={() => action(index)} className="cursor-pointer">
            <ProjectItem
              name={project.name}
              roles={project.roles}
              selected={active == index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
