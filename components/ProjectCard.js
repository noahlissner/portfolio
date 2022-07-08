import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug.current}`}>
      <a className="flex-1">
        <div
          className="bg-[#f1f1f1] dark:bg-[#525252] h-[350px] 2xl:h-[400px] min-w-[300px] rounded-3xl flex items-center justify-center
        hover:bg-[#e8e8e8] dark:hover:bg-[#3F3F3F] duration-150"
        >
          <span className="text-2xl">{project.title}</span>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
