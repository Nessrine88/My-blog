import React from 'react'
import {format,parseISO} from 'date-fns'
import Link from 'next/link'
import { slug } from 'github-slugger'
import ViewCounter from './ViewCounter'

const BlogDetails = ({blog, slug: blogSlug} ) => {
  return (
    <div className='px-10 bg-accent justify-around text-light py-2 flex items-center flex-wrap mx-10 rounded-lg font-medium text-xl'>
        <time  className='m-3'>
            {format(parseISO(blog.publishedAt), "LLLL d,yyyy")}
        </time>
        <span  className='m-3'>
          <ViewCounter slug ={blogSlug} />
        </span>
        <div  className='m-3'>
            {blog.readingTime.text}
        </div>
        <Link href={`/categories/${slug(blog.tags[0])}`} className='m-3' >
        #{blog.tags[0]} 
        </Link>
    </div>
  )
}

export default BlogDetails