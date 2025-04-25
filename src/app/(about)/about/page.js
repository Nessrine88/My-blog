import React from 'react'
import AboutCoverSection from '../../components/About/AboutCoverSection'
import Skills from '../../components/About/Skills'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
        Have a project in mind? Reach out to me 📞 from{' '}
        <Link href="/contact" className="underline underline-offset-2 text-accent">
           here
        </Link>{' '}
        and let's make it happen.
      </h2>
    </div>
  )
}

export default About
