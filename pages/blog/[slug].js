import { sanityClient, urlFor } from "../../sanity";
import { PortableText } from "@portabletext/react";
import moment from "moment";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => <img src={urlFor(value).url()} className="my-5" />,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-3">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-xl mb-2">{children}</h3>,
    normal: ({ children }) => <p className="text-base mb-2">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-[2px] border-c-primary pl-2">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-3 ml-8 list-disc">{children}</ul>
    ),
  },
};

const BlogItem = ({ post }) => {
  console.log(post);
  return (
    <main className="wrapper flex flex-col items-center">
      <div className="pt-[5%]">
        <img
          src={urlFor(post.mainImage).url()}
          className="rounded-2xl"
          alt=""
        />
        <div className="mx-5 mt-3">
          <h1 className="text-[40px] font-bold text-c-light-high dark:text-c-dark-high">
            {post.title}
          </h1>
          <h3 className="text-lg text-c-text dark:text-c-dark-high">
            {post.description}
          </h3>
          <div className="flex gap-3 text-[#757575] mt-2">
            <span>
              Posted on {moment(post.publishedAt).format("MMMM D, YYYY")}
            </span>
            <span>-</span>
            <span>3 min read</span>
          </div>
        </div>
        <hr className="my-10" />
      </div>
      <section className="max-w-[700px] pb-10 px-5">
        <PortableText value={post.body} components={myPortableTextComponents} />
      </section>
    </main>
  );
};

export default BlogItem;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
        _id,
        slug {
        current
      }
      }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    author -> {
      name,
    },
    mainImage,
    description,
    slug,
    body
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
