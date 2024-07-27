"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { TextGenerateEffect } from './ui/text-generate-effect';


const HeroSection = () => {

  const words = `I'm a full-stack developer and programmer. `;

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1}} transition={{ duration: 0.5}} className='col-span-7 place-content-center text-center sm:text-left'>
          <h1 className="text-4xl lg:mt-0 md:text-5xl lg:text-6xl font-bold antialiased text-center lg:text-left">
            <span className="text-white ">
              Hello, I&apos;m{" "} Nikhil Chopra!
            </span>
            <TextGenerateEffect words={words} />
          </h1>
          <p className='text-white text-base sm:text-lg lg:text-xl mt-4 mb-4'>Creating innovative solutions and pushing the boundaries of technology.</p>
          <div>
            <button className='px-4 py-3 w-fit rounded-full mr-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-300 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-500 rounded-full px-5 py-2'>
                Download Cv
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1}} className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <div className='h-300 text-black w-400 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>My Image Here</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection