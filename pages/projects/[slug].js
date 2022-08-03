import React from "react";
import { ButtonSocial } from "../../components/Buttons";
import Tag from "../../components/Tag";
import { sanityClient, urlFor } from "../../sanity";

const Project = ({ project }) => {
  return (
    <main className="wrapper flex flex-col items-center">
      <section className="max-w-[700px] w-full pt-[5%]">
        {/* Project Image & Buttons */}
        <div
          className={`relative ${
            !project.image && "max-w-[700px] h-[350px] rounded-2xl bg-slate-300"
          }`}
        >
          {project.image && (
            <img
              src={urlFor(project.image).url()}
              className="rounded-2xl"
              alt=""
            />
          )}
          <div className="absolute bottom-3 right-3 flex gap-3 md:bottom-5 md:right-5">
            <ButtonSocial
              to={project.website}
              color="#0079FF"
              title={"View Live"}
            />
            <ButtonSocial
              to={project.github}
              color="#333333"
              title="View Repo"
            />
          </div>
        </div>
        <div className="mx-5 mt-3 flex flex-col gap-3">
          {/* Project Title & Description */}
          <div>
            <h1 className="text-[40px] font-bold text-c-light-high dark:text-c-dark-high">
              {project.title}
            </h1>
            <h3 className="text-lg text-c-text dark:text-c-dark-high">
              {project.description}
            </h3>
          </div>
          {/* Tags */}
          <div className="flex gap-2 justify-start flex-wrap h-fit mt-2">
            {project.tags.map((tag) => (
              <React.Fragment key={tag.label}>
                <Tag title={tag.label} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <hr className="my-10" />
      </section>
    </main>
  );
};

export default Project;

export const getStaticPaths = async () => {
  const query = `*[_type == "project"] {
        _id,
        slug {
        current
      }
      }`;

  const projects = await sanityClient.fetch(query);

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    github,
    website,
    projectType,
    tags,
    image,
    slug,
    body
  }`;

  const project = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
