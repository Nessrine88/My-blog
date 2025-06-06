import React from 'react'
import AboutCoverSection from './AboutCoverSection'
const SkillList = [
    "next.js",
    "tailwind css",
    "figma",
    "javaScript",
    "web design",
    "Gatsby.js",
    "strapi",
    "firebase",
    "generative AI",
    "wireframing",
    "SEO",
    "framer motion",
    "sanity",
  ];
  
const Skills = () => {
  return (
    <section className='w-full flex flex-col p-20 border-b-2 bordder-solid border-dark text-dark'>
     <span className='font-semibold text-4xl text-accent'>
        I'm comfortable in ...
     </span>
     <ul className='flex flex-wrap mt-8 justify-start'>
        {
            SkillList.map((item, index) => {
                return <li key={index} className='font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid border-dark rounded mr-6 mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer'>{item} </li>
            } )
        }
     </ul>
  
    </section>
  )
}

export default Skills