import React from 'react'
import { sortBlogs } from '@/src/app/utils'
import { BlogLayoutOne } from '../../Blog/BlogLayoutOne'
import BlogLayoutTwo from '../../Blog/BlogLayoutTwo'
import Link from 'next/link'
import BlogLayoutThree from '../../Blog/BlogLayoutThree'

const RecentPosts = ({blogs}) => {
   const  sortedBlogs =  sortBlogs(blogs)
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center  '>
        <div className='w-full flex justify-between'>

        <h2 className='inline-block font-bold capitalize text-4xl'>Recent Posts</h2>
        <Link href="/categories/all" className='iniline-block font-medium text-accent underline underline-offset-2 text-lg'>View all</Link>
        </div>
        <div className='grid grid-cols-3 gap-16 mt-16 grid-rows-2'>
        {
            sortedBlogs.slice(4,10).map((blog, index)=> (
                    <article key={index} className='col-span-1 row-span-1 relative'> {<BlogLayoutThree blog={blog} />} </article>
            ))
        }
        </div>

    </section>
   
  )
}

export default RecentPosts