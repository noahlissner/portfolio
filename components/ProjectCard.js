import React from "react";

const ProjectCard = ({ title }) => {
  return (
    <a href="#" className="flex-1">
      <div
        className="bg-[#f1f1f1] dark:bg-[#525252] h-[350px] 2xl:h-[400px] min-w-[300px] rounded-3xl flex items-center justify-center
      hover:bg-[#e8e8e8] dark:hover:bg-[#3F3F3F] duration-150"
      >
        <span className="text-2xl">{title}</span>
      </div>
    </a>
  );
};

export default ProjectCard;
