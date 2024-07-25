"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTags";
import { motion, useInView } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";

type Pin = {
  title: string;
  href: string;
  heading: string;
  description: string;
  tag: string; // Add tag property
};

const projectData: Pin[] = [
  {
    title: "/ui.aceternity.com",
    href: "https://twitter.com/mannupaaji",
    heading: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    tag: "Web",
  },
  {
    title: "/example.com",
    href: "https://example.com",
    heading: "Example Project",
    description: "An example project description.",
    tag: "All",
  },
  {
    title: "/ui.aceternity.com",
    href: "https://twitter.com/mannupaaji",
    heading: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    tag: "Web",
  },
  {
    title: "/example.com",
    href: "https://example.com",
    heading: "Example Project",
    description: "An example project description.",
    tag: "All",
  },

  {
    title: "/ui.aceternity.com",
    href: "https://twitter.com/mannupaaji",
    heading: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    tag: "Web",
  },
  {
    title: "/example.com",
    href: "https://example.com",
    heading: "Example Project",
    description: "An example project description.",
    tag: "All",
  },  // Add more pins as needed
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        {/* Add more ProjectTags if needed */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((pin, index) => (
          <PinContainer key={index} title={pin.title} href={pin.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {pin.heading}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {pin.description}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
