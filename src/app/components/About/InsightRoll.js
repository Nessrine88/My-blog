import React from 'react'

const InsightRoll = ({insights} ) => {
  return (
    <div className='w-full bg-accent overflow-hidden text-white whitespace-nowrap'>
        <div className='animate-roll w-full py-3 flex items-center justify-center capitalize font-semibold text-base tracking-wider'>
  {
    insights.map(text =>(
        <div> {text} <span className='px-4 '> </span> </div>
    ))
  }
        </div>
    </div>
  )
}

export default InsightRoll