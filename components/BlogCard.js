import React from "react";
import moment from "moment";
import { urlFor } from "../sanity";

const BlogCard = ({ post }) => {
  return (
    <div className="group">
      <img
        src={urlFor(post.mainImage).url()}
        alt=""
        className="w-full max-h-[200px] sm:max-h-[350px] object-cover rounded-2xl mb-2"
      />
      <div className="ml-5">
        <h1 className="text-[28px] font-bold text-c-light-high dark:text-c-dark-high">
          {post.title}
        </h1>
        <p className="text-lg text-c-text dark:text-c-dark-high">
          {post.description}
        </p>
        <div className="flex gap-3 text-[#757575] mt-2">
          <span>
            Posted on {moment(post.publishedAt).format("MMMM D, YYYY")}
          </span>
          <span>-</span>
          <span>3 min read</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
