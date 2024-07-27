"use client"
import React , {useState , useRef} from 'react'
import { motion, useInView} from 'framer-motion'
import ToolCard from './ToolCard'

const projectData = [
  {
    id: 1,
    title: "Docker",
    description : "An open-source platform that automates the deployment and management of applications using containerization. ",
    image : "/Images/docker.png",
  },
  {
    id: 2,
    title: "AWS (Amazon Web Services)",
    description : "A comprehensive cloud computing platform by Amazon offering a wide range of services, ",
    image : "/Images/aws.jpeg",
  },
  {
    id: 3,
    title: "Firebase",
    description : "A platform developed by Google for building and managing web and mobile applications. ",
    image : "/Images/firebase.png",
  },
  {
    id: 4,
    title: "Postman",
    description : "A collaboration platform for API development.",
    image : "/Images/postman.jpg",
  },
  {
    id: 5,
    title: "Redis",
    description : "An open-source, in-memory data structure store used as a database, cache, and message broker. ",
    image : "/Images/redis.webp",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    description : "Utility-first CSS framework for rapid UI development",
    image : "/Images/tailwind.png",
  },
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
    <section id='tool'>
    <h2 className='pointer-events-none whitespace-pre-wrap font-semibold leading-none text-slate-50 text-6xl text-center mt-4 mb-8'>Tools</h2>
    <ul ref={ref} className='grid max-w-6xl mx-auto lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-8 md:mb-16 mb-8'>
      {projectData.map((project , index) =>
      <motion.li key={index} variants={cardVarients} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3,  delay: index * 0.4}}>
       <ToolCard
        key={project.id} imgUrl = {project.image} title={project.title} description={project.description}/>
          </motion.li>
      )}
       </ul>
    </section>
  )
}

export default Project1