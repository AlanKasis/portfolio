import { ProjectProps } from "@/app/projects/page";
import React from "react";

interface ProjectItemProps extends ProjectProps {
    selected: boolean,
}

const ProjectItem = ({ name, roles, selected }: ProjectItemProps) => {
    console.log(selected)
  return (
    <div className={`group border-b-2 py-4 flex justify-between items-center`}>
      <span className={`text-2xl relative after:bg-black after:absolute after:h-0.5 ${selected ? "after:w-full" : "after:w-0"} after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>{name}</span>
      <span>{roles}</span>
    </div>
    
  );
};

export default ProjectItem;
