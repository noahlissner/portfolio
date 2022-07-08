import React from "react";
import { sanityClient } from "../sanity";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="flex flex-col gap-10 mt-10 pb-10">
      <h2 className="font-medium text-3xl text-c-light-high dark:text-c-dark-high ml-auto">
        Selected Works
      </h2>
      <div className="flex gap-[60px] flex-wrap">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
        {/* <ProjectCard title={"Twitter Clone"} />
        <ProjectCard title={"Survey Builder"} />
        <ProjectCard title={"E-Commerce"} /> */}
      </div>
      <a
        href="#"
        className="self-center text-c-light-high dark:text-c-dark-high"
      >
        View all projects
      </a>
    </section>
  );
};

export default ProjectsGrid;
