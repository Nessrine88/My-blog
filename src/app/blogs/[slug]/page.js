// app/blog/[slug]/page.tsx

import { allBlogs } from "@/.contentlayer/generated";
import Tag from "../../components/Elements/Tag";
import Image from "next/image";
import BlogDetails from "../../components/Blog/BlogDetails";
import RenderMdx from "../RenderMdx";
import { slug } from "github-slugger";


export async function generateStacticParams(){
  return allBlogs.map((blog) => ({slug:blog._raw.flattenedPath  }));
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((b) => b._raw.flattenedPath === params.slug);

  if (!blog) {
    return <p className="text-center text-red-500 mt-10">Blog not found.</p>;
  }

  const imagePath = blog.image.filePath.replace("../public", "");

  return (
    <article>
      {/* Banner Section */}
      <div className="relative mb-8 text-center w-full h-[70vh] bg-dark">
        {/* Overlay Content */}
        <div className="w-full z-10 flex flex-col items-center justify-center text-light absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-sm py-2"
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-5xl leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 h-full bg-dark/60" />

        {/* Background Image */}
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl || ""}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>

      {/* Blog Metadata Section */}
      <BlogDetails blog={blog} slug={params.slug} />

      {/* Content Layout */}
      <div className="grid grid-cols-12 mt-8 px-10">
  {/* Table of Contents */}
  <div className="col-span-4 mr-10 overflow-visible">
    <details 
      className="border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
      open
    >
      <summary className="text-lg font-semibold capitalize cursor-pointer">Table Of Content</summary>
      <ul className="mt-4 font-in text-base">
  {blog.toc.map((heading) => (
    <li key={`#${heading.slug}`} className="py-1">
      <a
        href={`#${heading.slug}`}
        data-level={heading.level}
        className={`
          data-[level="two"]:pl-0 
          data-[level="two"]:pt-2 
          data-[level="two"]:border-t  
          border-solid border-dark/40 
          data-[level="three"]:pl-6
          flex items-center justify-start
        `}
      >
        {heading.level === "three" && (
          <span className="flex w-1 h-1 rounded-full bg-dark mr-2"> &nbsp; </span>
        )}
        <span className="hover:underline">{heading.text}</span>
      </a>
    </li>
  ))}
</ul>

    </details>
  </div>

  {/* Render MDX Content */}
  <div className="col-span-8">
    <RenderMdx blog={blog} />
  </div>
</div>
    </article>
  );
}
