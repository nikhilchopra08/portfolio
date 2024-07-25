"use client"
import React , {useState , useRef} from 'react'
import { motion, useInView} from 'framer-motion'
import ToolCard from './ToolCard'

const projectData = [
  {
    id: 1,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 2,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 3,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 4,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 5,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 6,
    title: "jkfdng n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Mobile"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 7,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 8,
    title: "jkfdng n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Mobile"],
    gitUrl : "/",
    previewUrl : "/"
  }
]

const Project1 = () => {

  const [tag , setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref , {once: true});

  const cardVarients = {
    initial : {y : 50 , opacity : 0},
    animate : {y: 0 , opacity : 1}, 
  }

  return (
    <section>
    <h2 className='pointer-events-none whitespace-pre-wrap font-semibold leading-none text-transparent dark:from-white dark:to-black bg-gradient-to-b from-slate-500 to-gray-300 bg-clip-text text-6xl text-center mt-4 mb-8'>Tools</h2>
    <ul ref={ref} className='grid max-w-6xl mx-auto lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-8 md:mb-16 mb-8'>
      {projectData.map((project , index) =>
      <motion.li key={index} variants={cardVarients} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3,  delay: index * 0.4}}>
       <ToolCard
        key={project.id} imgUrl = {project.image} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
          </motion.li>
      )}
       </ul>
    </section>
  )
}

export default Project1