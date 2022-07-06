import React from "react";
import { sanityClient } from "../sanity";
import { IoSearch } from "react-icons/io5";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

const blog = ({ posts }) => {
  return (
    <div className="wrapper flex flex-col items-center">
      <section className="py-[5%] max-w-[700px]">
        <h1 className="title">Blog.</h1>
        <p className="text-[#757575] text-lg mt-[21px]">
          Here i write about everything, from coding and design to life.
        </p>
        <section className="flex flex-col items-center gap-10 mt-5">
          <div className="w-full max-w-[700px] flex items-start">
            <div className="search-input">
              <IoSearch color="#757575" size={20} />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                // onChange={() => {}}
                // value={() => {}}
              />
            </div>
          </div>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id}>
              <a className="w-full max-w-[700px]">
                <BlogCard post={post} />
              </a>
            </Link>
          ))}
        </section>
      </section>
    </div>
  );
};

export default blog;

export const getStaticProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    author -> {
    name,
  },
  mainImage,
  description,
  publishedAt,
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
