import React from 'react'
import {format} from 'date-fns/format'
import Link from 'next/link'
import Image from 'next/image'

const BlogLayoutThree = ({blog}) => {
  return (
    <div className="flex flex-col items-center text-dark group">
    <Link href={blog?.url || "#"} className="rounded-xl overflow-hidden">
      <Image
        src={blog?.image?.filePath?.replace("../public", "") || "/fallback-image.jpg"}
        placeholder={blog?.image?.blurhashDataUrl ? "blur" : "empty"}
        blurDataURL={blog?.image?.blurhashDataUrl}
        alt={blog?.title || "Blog image"}
        width={blog?.image?.width || 400}
        height={blog?.image?.height || 300}
        className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
      />
    </Link>
    <span className="flex flex-col w-full mt-4">
      {blog?.tags?.length > 0 && (
        <span className="uppercase text-accent font-semibold text-sm">
          {blog.tags[0]}
        </span>
      )}
      <Link href={blog?.url || "#"} className="inline-block my-1">
        <h2 className="font-semibold capitalize text-lg">
          <span className="bg-gradient-to-r from-accent/50 bg-[length:0_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
            {blog?.title || "Untitled Blog"}
          </span>
        </h2>
      </Link>
    </span>
  </div>
  )
}

export default BlogLayoutThree