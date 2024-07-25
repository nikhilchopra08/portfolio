"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTags";
import { motion, useInView } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import img from "../public/Images/about.png"

type Pin = {
  title: string;
  href: string;
  heading: string;
  description: string;
  tag: string; // Add tag property
};

const projectData: Pin[] = [
  {
    title: "https://github.com/nikhilchopra08/portfolio",
    href: "https://github.com/nikhilchopra08/portfolio",
    heading: "Portfolio",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    tag: "Web",
  },
  {
    title: "https://admin-ecommerce-store.vercel.app/78777410-c8cc-4ed1-8cff-fec370274b36",
    href: "https://admin-ecommerce-store.vercel.app/78777410-c8cc-4ed1-8cff-fec370274b36",
    heading: "Ecommerce Admin",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    tag: "Web",
  },
  {
    title: "https://github.com/nikhilchopra08/OneForAll-Frontend",
    href: "https://github.com/nikhilchopra08/OneForAll-Frontend",
    heading: "One for All",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    tag: "Web",
  },
  {
    title: "https://github.com/nikhilchopra08/finance_app_tutorials",
    href: "https://github.com/nikhilchopra08/finance_app_tutorials",
    heading: "Finance Saas App",
    description: "An example project description.",
    tag: "Web",
  },
  {
    title: "https://github.com/nikhilchopra08/image_classification_using_machine_learning",
    href: "https://github.com/nikhilchopra08/image_classification_using_machine_learning",
    heading: "Image Classifcation Model",
    description: "An example project description.",
    tag: "ML",
  }

];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = tag === "All"
    ? projectData
    : projectData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="pointer-events-none whitespace-pre-wrap font-semibold leading-none text-transparent dark:from-white dark:to-black bg-gradient-to-b from-slate-500 to-gray-300 bg-clip-text text-6xl text-center mt-4 mb-2 md:mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="ML" isSelected={tag === "ML"} />
        {/* Add more ProjectTags if needed */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3 gap-12 md:mb-16 mb-12 md:gap-12">
        {filteredProjects.map((pin, index) => (
          <PinContainer key={index} title={pin.title} href={pin.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-center text-slate-100">
                {pin.heading}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {pin.description}
                </span>
              </div>
              {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
              <Image src={img} alt="Image" className="flex flex-1 w-full rounded-lg mt-4"/>
            </div>
          </PinContainer>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
