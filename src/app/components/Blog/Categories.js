import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({categories, currentSlug} ) => {
  return (
    <div className='px-10 mt-10 border-t-2 text-dark border-b-2 border-dark py-4 flex items-start flex-wrap font-medium mx-10'>
        {
            categories.map(cat => <Category key={cat} link={`/categories/${cat} `} name={cat} 
            active={currentSlug === slug(cat) }
            />)
        }
    </div>
  )
}

export default Categories